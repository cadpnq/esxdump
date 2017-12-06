const sprintf = require("sprintf-js").sprintf;
const fs = require("fs");

const boilerplate_requires = `const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
const generic = require("./generic");`;

const boilerplate_printer = (name, printer = undefined) => `// START <${name}> - do not edit; auto-generated comments\n\
exports['${name}'] = ${printer};\n// END <${name}>`;

const boilerplate_removed = (code) =>
`/*********************** AUTO-REMOVED ***********************\n|\n| ${code.replace(/\n/gm,"\n| ")}\
\n|\n\\${new Date(Date.now()).toLocaleString().padStart(57, "-")} */`;

const fields_file_path = "fields.txt";
const common_file_path = "common.json"; // use json for now
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

let common_data = null;
if (fs.existsSync(common_file_path)) {
    try {
	common_data = JSON.parse(fs.readFileSync(common_file_path, "utf8"));
    } catch (e) { }
}

let cur_regexp;
let cur_record;
let cur_file_path;
let cur_file_data;

for (let f of new Map([...mappings.entries()].sort())) { // sorting to process one record at a time
    let [record, field] = f[0].split(".");
    let name = `${record}.${field}`;

    if (record !== cur_record) {
	if (typeof cur_record !== "undefined") {
	    fs.writeFileSync(cur_file_path, cur_file_data);
	}
	cur_record = record;
	cur_file_path = `printers/${record}.js`;
	cur_file_data = fs.existsSync(cur_file_path) ? fs.readFileSync(cur_file_path, "utf8") : boilerplate_requires;
	// RegExp will match all boilerplate printer code, capturing field and export function as capture group 1 and 2
	cur_regexp = new RegExp(
	    // NOTE: Node bug, \1 is treated as octal (and needs escape) even when in String.raw``
	    String.raw`^\/\/ START <${record}\.(\S{4,}?)>(?:[\s\S])*?exports\['${record}\.${"\\1"}'\]\s*?=\s*?((?:[\w\.]|\[[\s\S]*?\])+)(?:[\s\S])*?^\/\/ END <${record}\.${"\\1"}>$`,
	    'gm'
	);
    }

    let printer_func = undefined;
    // check if the we should map a generic printer to this record-field pair
    if (common_data !== null && typeof common_data[field] !== "undefined") {
	if (common_data[field].records.length === 0 || common_data[field].records.includes(record)) {
	    printer_func = common_data[field].printer;
	}
    }

    while (true) {
	let last_match = cur_regexp.lastIndex;
	let regexp_match = cur_regexp.exec(cur_file_data);
	if (regexp_match !== null) {
	    if (typeof regexp_match[1] !== "undefined") {
		if (field === regexp_match[1]) {
		    if (typeof printer_func === "undefined") break;

		    if (typeof regexp_match[2] === "undefined" || regexp_match[2] !== printer_func) {
			// do any updates here, commenting out the previous
			let new_file_data = [
			    cur_file_data.slice(0, regexp_match.index),
			    // add out new common substiture
			    boilerplate_printer(name, printer_func),
			    cur_file_data.slice(regexp_match.index + regexp_match[0].length),
			    // comment out previous code to not lose anything
			    "\n\n" + boilerplate_removed(regexp_match[0])
			].join("");
			cur_file_data = new_file_data;
		    }
		    break;
		}
		else if (field.localeCompare(regexp_match[1]) < 0) {
		    let new_file_data = [
			cur_file_data.slice(0, regexp_match.index),
			boilerplate_printer(name, printer_func) + "\n\n",
			cur_file_data.slice(regexp_match.index)
		    ].join("");
		    cur_file_data = new_file_data;
		    cur_regexp.lastIndex = last_match;
		    break;
		}
	    }
	} else {
	    if (last_match > 0) {
		let new_file_data = [
		    cur_file_data.slice(0, last_match),
		    "\n\n" + boilerplate_printer(name, printer_func),
		    cur_file_data.slice(last_match)
		].join("");
		cur_file_data = new_file_data;
	    } else {
		cur_file_data += "\n\n" + boilerplate_printer(name, printer_func);
	    }
	    break;
	}
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
