const sprintf = require("sprintf-js").sprintf;
const fs = require("fs");

const boilerplate_requires = `const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
const generic = require("./generic");\n`;

const boilerplate_printer = (name) => `// START <${name}> - do not edit; auto-generated comments\n\
exports['${name}'] = undefined; // undefined until implemented\n// END <${name}>\n\n`;

const fields_file_path = "fields.txt";
const index_file_path = "printers/index.js";

let mappings = new Map();
if (fs.existsSync(fields_file_path)) {
    for (let line of fs.readFileSync(fields_file_path, "utf8").split("\n")) {
	if (line.startsWith("//")) continue;
	let [record_field_pair, printer] = line.split(" ");
	if (!record_field_pair || !printer) continue;
	mappings.set(record_field_pair, printer);
    }
} else {
    return;
}

let cur_record;
let cur_file_path;
let cur_file_data;

for (let f of new Map([...mappings.entries()].sort())) { // sorting to process one record at a time
    let [record, field] = f[0].split(".");
    let name = `${record}.${field}`;
    let regexp = new RegExp(String.raw`^\/\/ START <${record}\.${field}>([\s\S])*?exports\['${record}\.${field}'\]([\s\S])*?^\/\/ END <${record}\.${field}>$`, 'm');

    if (record !== cur_record) {
	if (typeof cur_record !== "undefined") {
	    fs.writeFileSync(cur_file_path, cur_file_data);
	}
	cur_record = record;
	cur_file_path = `printers/${record}.js`;
	cur_file_data = fs.existsSync(cur_file_path) ? fs.readFileSync(cur_file_path, "utf8") : boilerplate_requires;
    }
    
    let regexp_match = regexp.exec(cur_file_data);
    if (regexp_match === null) {
	let sort_regexp = new RegExp(String.raw`^\/\/ START <${record}\.(\S{4,}?)>`, 'gm');
	
	// insert it in alphabetical order
	while(true) {
	    let sort_match = sort_regexp.exec(cur_file_data);
	    if (sort_match !== null) {
		if (typeof sort_match[1] !== "undefined" && field.localeCompare(sort_match[1]) < 0) {
		    let new_file_data = [
			cur_file_data.slice(0, sort_match.index),
			boilerplate_printer(name),
			cur_file_data.slice(sort_match.index)
		    ].join("");
		    cur_file_data = new_file_data;
		    break;
		}
	    } else {
		cur_file_data += boilerplate_printer(name);
		break;
	    }
	}
    } else {
	// do any updates here, commenting out the previous
	//let new_file_data = [
	//    cur_file_data.slice(0, regexp_match.index),
	//    // comment out previous code to not lose anything
	//    String.raw`/*${regexp_match[0]}*/`,
	//    substitute_stuff_here,
	//    cur_file_data.slice(regexp_match.index + regexp_match[0].length)
	//].join("");
	//cur_file_data = new_file_data;
    }
}
// to not miss last record type
if (typeof cur_record !== "undefined") {
    fs.writeFileSync(cur_file_path, cur_file_data);
}


if (!fs.existsSync(index_file_path)) {
    let index_output =
String.raw`const Parser = require("binary-parser").Parser;
const fs = require("fs");

let mappings = new Map();
for (let f of fs.readdirSync(__dirname)) {
  let file = __dirname + "\\" + f;
  if (!fs.lstatSync(file).isFile()) continue;
  if (f.split(".").pop() !== "js") continue;
  if (f === __filename.split("\\").pop()) continue;
  let req = require(file);
  for (let field_printer in req) {
    if (req.hasOwnProperty(field_printer)) {
      mappings.set(field_printer, req[field_printer]);
    }
  }
}
module.exports = mappings;`;

    fs.writeFileSync(index_file_path, index_output);
}
