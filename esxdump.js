const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
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

function print_string(data) {
  return data.replace(/\0/g, '');
}

function print_uint8(data) {
    return data.readUInt8LE.toString();
}

function print_int8(data) {
    return data.readInt8LE.toString();
}

function print_uint16(data) {
    return data.readUInt16LE.toString();
}

function print_int16(data) {
    return data.readInt16LE.toString();
}

function print_uint32(data) {
    return data.readUInt32LE.toString();
}

function print_int32(data) {
    return data.readInt32LE.toString();
}

function print_vsval(data) { // Variable-sized value
    let byte1 = data.readUInt8LE();
    let type = byte1 & 0x3; // last two bits determine
    let val = undefined;
    switch (type) {
    case 0: //uint8 < 0x40
	val = byte1 >> 2;
	break;
    case 1: //int16 < 0x4000
	val = (byte1 | (data.readUInt8LE(8) << 8)) >> 2;
	break;
    case 2: //int32 < 0x40000000
	/* following 'vsval' from http://en.uesp.net/wiki/Tes5Mod:File_Format_Conventions we should only read 3 bytes? <-- stupid? We read 4 */
	val = (byte1 | (data.readUInt8LE(8) << 8) | (data.readUInt8LE(16) << 16) | (data.readUInt8LE(24) << 24)) >> 2;
        break;
    }
    return val.toString(); // include that it's a 'vsval' for later reconstruction?
}

// Javascript doesn't support 64 bit ints, workaround necessary or use of suitable library
// function print_uint64(data) {
//     return data.readUInt32LE.toString();
// }

// function print_int64(data) {
//     return data.readInt32LE.toString();
// }

function print_float32(data) {
    return data.readFloatLE.toString();
}

function print_float64(data) {
    return data.readDoubleLE.toString();
}

function print_char(data) {
    return data.toString('utf8');
}

function print_wchar(data) {
    return data.toString('utf16le');
}

let printers = new Map();
printers.set("EDID", print_string);
printers.set("FULL", print_string);
printers.set("DESC", print_string);
printers.set("TES4.CNAM", print_string);
printers.set("TES4.MAST", print_string);
printers.set("TES4.INTV", print_uint32);

printers.set("MSWP.BNAM", print_string);
printers.set("MSWP.SNAM", print_string);

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
