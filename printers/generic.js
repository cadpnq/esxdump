const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");

exports.print_string = (data) => {
    return data.toString('binary').replace(/\0/g, '');  // 'binary' should be close to the 'Windows-1252' encoding it uses than 'utf8'
}

exports.print_uint8 = (data) => {
    return data.readUInt8LE().toString();
}

exports.print_int8 = (data) => {
    return data.readInt8LE().toString();
}

exports.print_uint16 = (data) => {
    return data.readUInt16LE().toString();
}

exports.print_int16 = (data) => {
    return data.readInt16LE().toString();
}

exports.print_uint32 = (data) => {
    return data.readUInt32LE().toString();
}

exports.print_int32 = (data) => {
    return data.readInt32LE().toString();
}

// Javascript doesn't support 64 bit ints, workaround necessary or use of suitable library
// exports.print_uint64 = (data) => {
//     return data.readUInt64LE().toString();
// }

// exports.print_int64 = (data) => {
//     return data.readInt64LE().toString();
// }

exports.print_float32 = (data) => {
    return data.readFloatLE().toString();
}

exports.print_float64 = (data) => {
    return data.readDoubleLE().toString();
}

exports.print_char = (data) => {
    return data.toString('binary');
}

exports.print_wchar = (data) => {
    return data.toString('utf16le');
}

exports.print_formid = (data) => {
    return sprintf("%08x", data.readUInt32LE());
}

exports.print_vsval = (data) => {
  let byte1 = data.readUInt8LE();
  let type = byte1 & 0x3; // last two bits determine
  let val = undefined;
  switch (type) {
    case 0: //uint8 < 0x40
      val = (byte1 >> 2);
      break;
    case 1: //int16 < 0x4000
      val = ((byte1 | (data.readUInt8LE(1) << 8)) >> 2);
      break;
    case 2: //int32 < 0x40000000
      /* following 'vsval' from http://en.uesp.net/wiki/Tes5Mod:File_Format_Conventions we should only read 3 bytes? <-- stupid? We read 4 */
      val = ((byte1 | (data.readUInt8LE(1) << 8) | (data.readUInt8LE(2) << 16) | (data.readUInt8LE(3) << 24)) >> 2);
      break;
    }
    return val.toString(); // include that it's a 'vsval' for later reconstruction?
  }

exports.print_as_hash = (data) => {
  return hasha(data, {algorithm: "md5"});
}
