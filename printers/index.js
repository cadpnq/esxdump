const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;

function print_string(data) {
    return data.toString('binary').replace(/\0/g, '');  // 'binary' should be close to the 'Windows-1252' encoding it uses than 'utf8'
}

function print_uint8(data) {
    return data.readUInt8LE().toString();
}

function print_int8(data) {
    return data.readInt8LE().toString();
}

function print_uint16(data) {
    return data.readUInt16LE().toString();
}

function print_int16(data) {
    return data.readInt16LE().toString();
}

function print_uint32(data) {
    return data.readUInt32LE().toString();
}

function print_int32(data) {
    return data.readInt32LE().toString();
}

// Javascript doesn't support 64 bit ints, workaround necessary or use of suitable library
// function print_uint64(data) {
//     return data.readUInt64LE().toString();
// }

// function print_int64(data) {
//     return data.readInt64LE().toString();
// }

function print_float32(data) {
    return data.readFloatLE().toString();
}

function print_float64(data) {
    return data.readDoubleLE().toString();
}

function print_char(data) {
    return data.toString('binary');
}

function print_wchar(data) {
    return data.toString('utf16le');
}

function print_vsval(data) { // Variable-sized value
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

function print_formid(data) {
    return sprintf("%08x", data.readUInt32LE()); 
}

let ctda = new Parser()
    .endianess("little")
    .uint8("operator")
    .array("unknown00", {
	type: 'uint8',
	length: 3
    })
    .buffer("comparisonValue", {
	length: 4
    })
    .uint16("functionIndex")
    .array("padding", {
	type: 'uint8',
	length: 2,
    })
    .buffer("params", {
	length: 8
    })
    .uint32("runOnType")
    .buffer("reference", {
	length: 4
    })
    .int32("unknown01");
	    
	
function print_ctda(data) {
    let d = ctda.parse(data);
    return (
`operator : ${d.operator}
unknown00 : ${d.unknown00.map((x) => sprintf("%02x", x)).join(' ')}
comparisonValue : ${(d.operator & 0x04) ? print_formid(d.comparisonValue) : print_float32(d.comparisonValue)}
functionIndex : ${d.functionIndex}
padding : ${d.padding.map((x) => sprintf("%02x", x)).join(' ')}
${(d.functionIndex != 4672 ?
`param1 : ${d.params.readInt32LE() /* formid, int32 or stringtype, based on the function in d.functionIndex */}
param2 : ${d.params.readInt32LE(1) /* formid, int32 or stringtype, based on the function in d.functionIndex */}` :
`param1 : ${d.params.readUInt16LE()}
    param2 : ${d.params.toString('binary', 2, 5)}
    param3 : ${sprintf("%08x", d.params.readUInt32LE(1))}`
)}
runOnType : ${d.runOnType}
reference : ${print_formid(d.reference)}
unknown01 : ${d.unknown01}`);
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
printers.set("MESG.INAM", print_uint32);
printers.set("MESG.QNAM", print_formid);
printers.set("MESG.DNAM", print_uint32);
printers.set("MESG.TNAM", print_uint32);
printers.set("MESG.ITXT", print_string);
printers.set("MESG.CTDA", print_ctda);



module.exports = {
    printers: printers
}
