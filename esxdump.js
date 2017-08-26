const Parser = require("binary-parser").Parser;
const hasha = require("hasha");
const sprintf = require("sprintf-js").sprintf;
const fs = require("fs");

let record = new Parser()
  .endianess("little")
  .string("type", {length: 4})
  .uint32("dataSize")
  .uint32("flags")
  .uint32("id")
  .uint32("revision")
  .uint16("version")
  .uint16("unknown")
  .buffer("data", {
    length: "dataSize"
  });

fs.readFile(process.argv[2], (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  while (data != "") {
    let r = record.parse(data);
    if (r.type == "GRUP") {
      data = data.slice(24);
    } else {
      console.log(`${sprintf("%08x", r.id)} - ${r.type} - ${hasha(r.data, {algorithm: 'md5'})}`);
      data = data.slice(r.dataSize + 24);
    }
  }
});
