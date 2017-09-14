const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
const zlib = require('zlib');
const fs = require("fs");

const printers = require("./printers/index.js").printers;

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

  let fields = new Parser()
    .array("fields", {
      type: field,
      readUntil: "eof"
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
let s = fs.createReadStream(process.argv[2]);
s.on("data", (chunk) => {
  if (!buff) {
    buff = chunk;
  } else {
    buff = Buffer.concat([buff, chunk]);
  }

  let h;
  let data;
  let fs;
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

    fs = fields.parse(data);

    records += 1;
    console.log(`${sprintf("%08x", h.id)} - ${h.type}`);
    for (let f of fs.fields) {
      let printed;
      if (printers.has(f.type)) {
        printed = printers.get(f.type)(f.data);
      } else if (printers.has(`${h.type}.${f.type}`)) {
        printed = printers.get(`${h.type}.${f.type}`)(f.data);
      } else {
        printed = hasha(f.data, {algorithm: 'md5'});
      }

      console.log(`\t${f.type} - ${printed}`);
    }
    buff = buff.slice(h.dataSize + 24);
  }
});

s.on("end", () => {
  console.log(`groups: ${groups}\nrecords: ${records}\ntotal: ${groups+records}\ncompressed: ${compressed_records}`)
});
