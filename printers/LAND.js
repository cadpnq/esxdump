const generic = require("./generic");

module.exports["LAND.ATXT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: LAND, TERM
module.exports["LAND.BTXT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, ADDN, ALCH, AMMO, ARMO, ASTP, BOOK, CAMS, CELL, CLAS, CMPO, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, ECZN, EFSH, EQUP, EXPL, FACT, FSTP, FSTS, GDRY, GMST, GRAS, HDPT, IDLE, INGR, IPCT, KEYM, KYWD, LAND, LGTM, LIGH, MATO, MGEF, MISC, MSTT, NOCM, NOTE, NPC_, OMOD, OVIS, PERK, PGRE, PHZD, PMIS, PROJ, RACE, REFR, RELA, REVB, RFCT, SCEN, SCOL, SPGD, TRNS, WATR, WRLD, WTHR
module.exports["LAND.DATA"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["LAND.MPCD"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["LAND.VCLR"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["LAND.VHGT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["LAND.VNML"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["LAND.VTXT"] = (data) => {
  return generic.print_as_hash(data);
}

