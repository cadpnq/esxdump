const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
const zlib = require('zlib');
const fs = require("fs");

const printers = require("./printers");

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


let compressed_records = 0;
let records = 0;
let groups = 0;

let buff;
let file = process.argv[2];
if (!/^.*\.es[m|p|l]$/i.test(file)) {
  console.log(`File '${file}' is not of correct type; expected '*.es[m|p|l]'`);
  return;
}
let s = fs.createReadStream(file);
s.on("data", (chunk) => {
  if (!buff) {
    buff = chunk;
  } else {
    buff = Buffer.concat([buff, chunk]);
  }

  let h;
  let data;
  while (true) {
    if (buff.length < 24) {
      return;
    }
    h = header.parse(buff);

    if (h.type == "GRUP") {
      buff = buff.slice(24)
      groups += 1
      continue;
    }

    if (buff.length < h.dataSize+24) {
      return;
    }

    data = buff.slice(24, h.dataSize + 24);

    if (h.flags & 0x00040000) {
      compressed_records += 1;
      let decomp = compressed.parse(data);
      data = zlib.inflateSync(decomp.compData);
    }

    records += 1;
    console.log(`${sprintf("%08x", h.id)} - ${h.type}`);

    while (data.length) {
      let f = field.parse(data);
      data = data.slice(6 + f.size);

      if (f.type == "XXXX") {
        f.type = data.toString("ascii", 0, 4);
        f.size = f.data.readUInt32LE();
        f.data = data.slice(6, 6 + f.size);
        data = data.slice(6 + f.size);
      }

      let name = `${h.type}.${f.type}`;
      let printed;
      if (printers.has(f.type)) {
        printed = printers.get(f.type)(f.data);
      } else if (printers.has(name)) {
	let printer = printers.get(name);
	printed = typeof printer !== "undefined" ? printer(f.data) : `<undefined> ${hasha(f.data, {algorithm: 'md5'})}`;
      } else {
        printed = `<unknown> ${hasha(f.data, {algorithm: 'md5'})}`;
      }

      console.log(`\t${f.type} - ${printed}`);
    }
    buff = buff.slice(h.dataSize + 24);
  }
});

s.on("end", () => {
  console.log(`groups: ${groups}\nrecords: ${records}\ntotal: ${groups+records}\ncompressed: ${compressed_records}`)
});
