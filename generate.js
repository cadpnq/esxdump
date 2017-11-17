const sprintf = require("sprintf-js").sprintf;
const fs = require("fs");

const boilerplate_requires =
`const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
`;
const fields_file_path = "fields.txt";
const generic_file_path = "printers/generic.js";
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

//let generic_file;
//let current_record_file;
let records_with_printers = new Set();

for (let f of new Map([...mappings.entries()].sort())) { // sorting to process one record at a time
    let [record, field] = f[0].split(".");
    let name = `${record}.${field}`;
    let regexp = new RegExp(`^(// START <${name}>){1}[\\s\\S]*(exports\\['${name}'\\]){1}[\\s\\S]*^(// END <${name}>){1}$`, 'gm');
    
    let printer_file_path = `printers/${record}.js`;
    let printer_file_path_exists = fs.existsSync(printer_file_path);

    console.log(`${record}.${field} => ${f[1]}`);
    
    // is it mapped to a generic method
    let generic_regexp = new RegExp(/^(generic\.){1}\w+/);
    console.log(generic_regexp.source);
    console.log(f[1]);
    console.log(generic_regexp.test(f[1]));

    if (f[1] === "unknown")
    if (generic_regexp.test(f[1])) {
	if (!fs.existsSync(generic_file_path)) {
	    fs.writeFileSync(generic_file_path, boilerplate_requires);
	}
	let name = f[1].replace(/^(generic)/, "exports");
	if (!fs.readFileSync(generic_file_path, "utf8").includes(name)) {
	    let generic_placeholder =
`
${name} = (data) => {
    throw new Error("Not Implemented");
}
`;
	    fs.appendFileSync(generic_file_path, generic_placeholder);
	}
	
	if (printer_file_path_exists) {
	    
	    // TODO: check if function was previously defined, and commment out
	    //       probably need to use fileStreams to write to a specific position in the file
	}
    }

    if (!printer_file_path_exists) {
	fs.writeFileSync(printer_file_path, boilerplate_requires + 'const generic = require("./generic");\n');
    }
    let printer_file = fs.readFileSync(printer_file_path, "utf8");
    if (!regexp.test(printer_file)) {
	let default_output = 
`
// START <${name}> - do not edit; auto-generated comments
exports['${name}'] = undefined; // undefined until implemented
// END <${name}>
`;
	fs.appendFileSync(printer_file_path, default_output);
    }
    records_with_printers.add(record);
}
//if (generic_file) fs.closeSync(generic_file);
//if (current_record_file) fs.closeSync(current_record_file);

if (!fs.existsSync(index_file_path)) {
    let index_output =
`const Parser = require("binary-parser").Parser;
const fs = require("fs");

let mappings = new Map();
for (let f of fs.readdirSync(__dirname)) {
  let file = __dirname + "\\\\" + f;
  if (!fs.lstatSync(file).isFile()) continue;
  if (f.split(".").pop() !== "js") continue;
  if (f === __filename.split("\\\\").pop()) continue;
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
