const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const zlib = require('zlib');
const fs = require("fs");

let header = new Parser()
    .endianess("little")
    .string("type", {length: 4})
    .uint32("dataSize")
    .uint32("flags")
    .uint32("id")
    .uint32("revision")
    .uint16("version")
    .uint16("unknown")

let field = new Parser()
    .endianess("little")
    .string("type", {length: 4})
    .uint16("size")
    .buffer("data", {
	length: "size"
    })

let compressed = new Parser()
    .uint32("decompSize")
    .buffer("compData", {
	readUntil: "eof"
    })

let all_fields = new Set();
let fields = new Map();
let examples = new Map();

let mappings = new Map();
if (fs.existsSync("fields.txt")) {
    for (let line of fs.readFileSync("fields.txt", "utf8").split("\n")) {
	if (line.startsWith("//")) {
	    continue;
	}
	let [name, type] = line.split(" ");
	mappings.set(name, type);
    }
}

for (let file of fs.readdirSync("plugins")) {
    if (!/^.*\.es[m|p|l]$/i.test(file)) continue;
    let buff = fs.readFileSync(`plugins/${file}`);
    let num = 0;
    while (buff.length) {
	num += 1;
	let h = header.parse(buff);

	if (h.type == "GRUP") {
	    buff = buff.slice(24);
	    continue;
	}

	let data = buff.slice(24, h.dataSize + 24);
	if (h.flags & 0x00040000) {
	    data = zlib.inflateSync(compressed.parse(data).compData);
	}

	while (data.length) {
	    let f = field.parse(data);
	    data = data.slice(6 + f.size);

	    if (f.type == "XXXX") {
		f.type = data.toString("ascii", 0, 4);
		f.size = f.data.readUInt32LE();
		f.data = data.slice(6, 6 + f.size);
		data = data.slice(6 + f.size);
	    }

	    let name = escape(`${h.type}.${f.type}`);
	    all_fields.add(escape(`${h.type}.${f.type}`));

	    // Add the longest example, assumption being more data is better (at a certain computation cost that is)
	    let example = escape(f.data.toString("ascii"));
	    let prev_example = examples.get(name);
	    if (!prev_example || (prev_example.Length < example.Length)) {
		examples.set(name, example);
	    }
	    if (!fields.has(f.type)) {
		fields.set(f.type, new Set());
	    }
	    fields.get(f.type).add(`${h.type}.${f.type}`);
	}
	buff = buff.slice(h.dataSize + 24);
    }
}

for (let f of all_fields) {
    if (!mappings.has(f)) {
	mappings.set(f, "unknown");
    }
}

let unique = new Set();
let output = "";
for (let f of Array.from(fields.keys()).sort()) {
    let records_with_field = Array.from(fields.get(f));
    if (records_with_field.length == 1) {
	unique.add(escape(records_with_field[0]));
    } else {
	output += `// ############### ${f}\n`;
	for (let field of records_with_field) {
	    output += `${field} ${mappings.get(field)}\n// ${examples.get(field)}\n//\n`;
	}
    }
}

output += "// ############### fields below this line are unique to one record type\n";
for (let field of Array.from(unique).sort()) {
    output += `${field} ${mappings.get(field)}\n// ${examples.get(field)}\n//\n`;
}
fs.writeFileSync("fields.txt", output);
