const fs = require("fs");

let file = fs.readFileSync("all_fields.txt").toString();

let all_records = new Map();
let all_fields = new Map();

for (let line of file.split("\n")) {
  let [record, field] = line.split(".");

  if (!all_records.has(record)) {
    all_records.set(record, new Set());
  }
  all_records.get(record).add(field);

  if (!all_fields.has(field)) {
    all_fields.set(field, new Set());
  }
  all_fields.get(field).add(record);
}

for (let [field, records] of all_fields.entries()) {
  if (records.size > 1) {
//    console.log(`${field} is common between\n\t${Array.from(records).join("\n\t")}`);
  }
}

//fs.writeFileSync(file, data[, options])#

for (let [record, fields] of all_records.entries()) {
  let f = `const common = require("./common");\n\n`;

  for (let field of fields) {
    let common_records = all_fields.get(field);
    if (common_records.size > 1) {
      f += `// this field is potentially common among the following records: ${Array.from(common_records).join(", ")}\n`;
    }
    f +=
`module.exports["${record}.${field}"] = (data) => {
  return common.print_as_hash(data);
}\n\n`;
  }
  fs.writeFileSync(`${record}.js`, f);
}
