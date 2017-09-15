const generic = require("./generic");

// this field is potentially common among the following records: ACHR, ADDN, ALCH, AMMO, ARMO, ASTP, BOOK, CAMS, CELL, CLAS, CMPO, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, ECZN, EFSH, EQUP, EXPL, FACT, FSTP, FSTS, GDRY, GMST, GRAS, HDPT, IDLE, INGR, IPCT, KEYM, KYWD, LAND, LGTM, LIGH, MATO, MGEF, MISC, MSTT, NOCM, NOTE, NPC_, OMOD, OVIS, PERK, PGRE, PHZD, PMIS, PROJ, RACE, REFR, RELA, REVB, RFCT, SCEN, SCOL, SPGD, TRNS, WATR, WRLD, WTHR
module.exports["NOCM.DATA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, NOCM, OVIS, QUST, RACE
module.exports["NOCM.INDX"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: COBJ, COLL, INFO, NOCM, SNDR, TES4
module.exports["NOCM.INTV"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AMMO, ARMA, AVIF, BPTD, COBJ, FURN, HDPT, IMAD, INFO, IPCT, LCTN, NOCM, OMOD, PROJ, RACE, SOPM, WATR, WTHR
module.exports["NOCM.NAM1"] = (data) => {
  return generic.print_as_hash(data);
}

