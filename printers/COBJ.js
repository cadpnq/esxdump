const generic = require("./generic");

// this field is potentially common among the following records: AVIF, COBJ, CPTH, DOOR, EQUP, FSTP, IDLE, INFO, LCTN, MATT, MUST, NPC_, PACK, QUST, RACE, REGN, REVB, SCEN, SNDR, TERM, WATR
module.exports["COBJ.ANAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ANIO, ASPC, BPTD, COBJ, COLL, DIAL, DLVW, IMAD, MATT, MSWP, MUST, PACK, SNDR
module.exports["COBJ.BNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, BOOK, BPTD, CLFM, COBJ, COLL, DOOR, IMGS, KYWD, LCRT, LCTN, LENS, MATT, MSWP, MUST, NPC_, PACK, PKIN, QUST, RACE, SCEN, SCSN, SNCT, SNDR, TES4, TREE, WRLD
module.exports["COBJ.CNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, CAMS, CLFM, COBJ, CPTH, ENCH, FACT, FURN, HDPT, IDLE, INFO, LSCR, MESG, MGEF, MUST, PACK, PERK, QUST, RACE, SCEN, SMBN, SMEN, SMQN, SNDR, SPEL, TERM
module.exports["COBJ.CTDA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ALCH, AMMO, ARMO, AVIF, BOOK, CLAS, COBJ, COLL, LSCR, MESG, OMOD, PERK, RACE, SPEL, WEAP
module.exports["COBJ.DESC"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
module.exports["COBJ.EDID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ARMO, BPTD, CLFM, CLMT, COBJ, COLL, DOOR, FLOR, FURN, GLOB, IPCT, LENS, LIGH, MATT, MSWP, MUSC, MUST, OMOD, PACK, PERK, QUST, RACE, REFR, SCEN, SNCT, SNDR, TACT, TERM, WATR, WEAP, WTHR
module.exports["COBJ.FNAM"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["COBJ.FVPA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: COBJ, COLL, INFO, NOCM, SNDR, TES4
module.exports["COBJ.INTV"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AMMO, ARMA, AVIF, BPTD, COBJ, FURN, HDPT, IMAD, INFO, IPCT, LCTN, NOCM, OMOD, PROJ, RACE, SOPM, WATR, WTHR
module.exports["COBJ.NAM1"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AMMO, ARMA, COBJ, IMAD, INFO, IPCT, PROJ, QUST, RACE, WATR, WRLD
module.exports["COBJ.NAM2"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: COBJ, IMAD, INFO, RACE, WATR, WRLD
module.exports["COBJ.NAM3"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ALCH, AMMO, ARMO, BOOK, COBJ, IMAD, INGR, INNR, MISC, NOTE, WATR, WEAP
module.exports["COBJ.YNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ALCH, AMMO, ARMO, BOOK, COBJ, LSCR, MISC, NOTE, NPC_, RACE, WEAP, WRLD
module.exports["COBJ.ZNAM"] = (data) => {
  return generic.print_as_hash(data);
}

