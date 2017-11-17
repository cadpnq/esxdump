const Parser = require("binary-parser").Parser;
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
module.exports = mappings;