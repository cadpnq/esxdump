const generic = require("./generic");

// this field is potentially common among the following records: ACHR, ADDN, ALCH, AMMO, ARMO, ASTP, BOOK, CAMS, CELL, CLAS, CMPO, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, ECZN, EFSH, EQUP, EXPL, FACT, FSTP, FSTS, GDRY, GMST, GRAS, HDPT, IDLE, INGR, IPCT, KEYM, KYWD, LAND, LGTM, LIGH, MATO, MGEF, MISC, MSTT, NOCM, NOTE, NPC_, OMOD, OVIS, PERK, PGRE, PHZD, PMIS, PROJ, RACE, REFR, RELA, REVB, RFCT, SCEN, SCOL, SPGD, TRNS, WATR, WRLD, WTHR
module.exports["PGRE.DATA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, PGRE, PHZD, PMIS, RACE, REFR
module.exports["PGRE.NAME"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, ACTI, ARMO, BOOK, CONT, DOOR, FLOR, FURN, INFO, KEYM, LIGH, MGEF, MISC, MSTT, NOTE, NPC_, PACK, PERK, PGRE, QUST, REFR, SCEN, STAT, TACT, TERM, WEAP
module.exports["PGRE.VMAD"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, PGRE, PHZD, REFR
module.exports["PGRE.XESP"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, CELL, PGRE, REFR
module.exports["PGRE.XEZN"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, PGRE, PHZD, REFR
module.exports["PGRE.XLYR"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, PGRE, REFR
module.exports["PGRE.XMSP"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, CELL, PGRE, REFR
module.exports["PGRE.XOWN"] = (data) => {
  return generic.print_as_hash(data);
}

