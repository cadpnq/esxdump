const generic = require("./generic");

// this field is potentially common among the following records: ACHR, ADDN, ALCH, AMMO, ARMO, ASTP, BOOK, CAMS, CELL, CLAS, CMPO, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, ECZN, EFSH, EQUP, EXPL, FACT, FSTP, FSTS, GDRY, GMST, GRAS, HDPT, IDLE, INGR, IPCT, KEYM, KYWD, LAND, LGTM, LIGH, MATO, MGEF, MISC, MSTT, NOCM, NOTE, NPC_, OMOD, OVIS, PERK, PGRE, PHZD, PMIS, PROJ, RACE, REFR, RELA, REVB, RFCT, SCEN, SCOL, SPGD, TRNS, WATR, WRLD, WTHR
module.exports["PHZD.DATA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
module.exports["PHZD.EDID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, PGRE, PHZD, PMIS, RACE, REFR
module.exports["PHZD.NAME"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, PGRE, PHZD, REFR
module.exports["PHZD.XESP"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, PHZD, REFR
module.exports["PHZD.XLKR"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, PHZD, REFR
module.exports["PHZD.XLRT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, PGRE, PHZD, REFR
module.exports["PHZD.XLYR"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, PHZD, REFR
module.exports["PHZD.XRFG"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, CELL, PHZD, REFR
module.exports["PHZD.XRNK"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, PHZD, REFR
module.exports["PHZD.XSCL"] = (data) => {
  return generic.print_as_hash(data);
}

