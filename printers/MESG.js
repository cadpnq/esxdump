const generic = require("./generic");
const Parser = require("binary-parser").Parser;

// this field is potentially common among the following records: ACTI, IDLE, INFO, LSCR, MESG, MUST, PACK, QUST, SCEN, SMBN, SMQN, SPEL, TERM
module.exports["MESG.CIS2"] = (data) => {
  return generic.print_as_hash(data);
}

console.log(Parser);

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

// this field is potentially common among the following records: ACTI, ALCH, CAMS, CLFM, COBJ, CPTH, ENCH, FACT, FURN, HDPT, IDLE, INFO, LSCR, MESG, MGEF, MUST, PACK, PERK, QUST, RACE, SCEN, SMBN, SMEN, SMQN, SNDR, SPEL, TERM
module.exports["MESG.CTDA"] = (data) => {
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

// this field is potentially common among the following records: ALCH, AMMO, ARMO, AVIF, BOOK, CLAS, COBJ, COLL, LSCR, MESG, OMOD, PERK, RACE, SPEL, WEAP
module.exports["MESG.DESC"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ADDN, AECH, ALCH, AMDL, AMMO, ARMA, ARTO, BNDS, BOOK, BPTD, DLBR, DLVW, DMGT, DOBJ, EFSH, HAZD, IDLE, IMAD, IMGS, INFO, IPCT, KSSM, KYWD, LENS, MATO, MESG, MGEF, MUST, NOTE, NPC_, PROJ, QUST, SCEN, SMBN, SMEN, SMQN, SNDR, STAT, TXST, VTYP, WATR, WEAP, WRLD
module.exports["MESG.DNAM"] = generic.print_uint32;

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
module.exports["MESG.EDID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, AVIF, BOOK, CELL, CLAS, CLFM, CMPO, CONT, DIAL, DOOR, ENCH, EXPL, FACT, FLOR, FLST, FURN, HAZD, HDPT, INGR, KEYM, KYWD, LCTN, LIGH, MESG, MGEF, MISC, MSTT, NOTE, NPC_, OMOD, PERK, PROJ, QUST, RACE, REFR, SCOL, SNCT, SPEL, STAT, TACT, TERM, WATR, WEAP, WRLD
module.exports["MESG.FULL"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: BOOK, BPTD, INFO, MESG, MOVT, NPC_, OTFT, PACK, REFR, SCEN, WATR, WEAP
module.exports["MESG.INAM"] = generic.print_uint32;

// this field is potentially common among the following records: MESG, TERM
module.exports["MESG.ITXT"] = generic.print_string;

// this field is potentially common among the following records: KYWD, LSCR, MESG, PERK, QUST, RACE, RFGP, SCEN, SMQN, WEAP, WTHR
module.exports["MESG.NNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: CONT, DIAL, DLBR, DLVW, IDLM, MESG, NPC_, PACK, RACE, SCCO, SMQN, WTHR
module.exports["MESG.QNAM"] = generic.print_formid;

// this field is potentially common among the following records: ACTI, ADDN, ASPC, CONT, CPTH, DIAL, DLBR, DOOR, FLOR, FURN, IMAD, INFO, IPCT, LTEX, MESG, MSTT, MSWP, MUST, NOTE, NPC_, PERK, QUST, SCCO, SCEN, SMBN, SMEN, SMQN, SNDR, TERM, WATR, WTHR
module.exports["MESG.SNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, BNDS, CLMT, CONT, DLBR, HDPT, IMAD, IMGS, INFO, KSSM, KYWD, LCRT, LSCR, LTEX, MESG, MUSC, REFR, SCEN, STAG, TERM, TES4, WATR, WTHR
module.exports["MESG.TNAM"] = generic.print_uint32;
