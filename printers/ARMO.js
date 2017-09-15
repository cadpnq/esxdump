const generic = require("./generic");

// this field is potentially common among the following records: ARMO, FURN, NPC_, RACE, WEAP
module.exports["ARMO.APPR"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, WEAP
module.exports["ARMO.BAMT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO, RACE
module.exports["ARMO.BOD2"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, WEAP
module.exports["ARMO.DAMA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, ADDN, ALCH, AMMO, ARMO, ASTP, BOOK, CAMS, CELL, CLAS, CMPO, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, ECZN, EFSH, EQUP, EXPL, FACT, FSTP, FSTS, GDRY, GMST, GRAS, HDPT, IDLE, INGR, IPCT, KEYM, KYWD, LAND, LGTM, LIGH, MATO, MGEF, MISC, MSTT, NOCM, NOTE, NPC_, OMOD, OVIS, PERK, PGRE, PHZD, PMIS, PROJ, RACE, REFR, RELA, REVB, RFCT, SCEN, SCOL, SPGD, TRNS, WATR, WRLD, WTHR
module.exports["ARMO.DATA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ALCH, AMMO, ARMO, AVIF, BOOK, CLAS, COBJ, COLL, LSCR, MESG, OMOD, PERK, RACE, SPEL, WEAP
module.exports["ARMO.DESC"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
module.exports["ARMO.EDID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, EXPL, WEAP
module.exports["ARMO.EITM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, SPEL, WEAP
module.exports["ARMO.ETYP"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ARMO, BPTD, CLFM, CLMT, COBJ, COLL, DOOR, FLOR, FURN, GLOB, IPCT, LENS, LIGH, MATT, MSWP, MUSC, MUST, OMOD, PACK, PERK, QUST, RACE, REFR, SCEN, SNCT, SNDR, TACT, TERM, WATR, WEAP, WTHR
module.exports["ARMO.FNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, AVIF, BOOK, CELL, CLAS, CLFM, CMPO, CONT, DIAL, DOOR, ENCH, EXPL, FACT, FLOR, FLST, FURN, HAZD, HDPT, INGR, KEYM, KYWD, LCTN, LIGH, MESG, MGEF, MISC, MSTT, NOTE, NPC_, OMOD, PERK, PROJ, QUST, RACE, REFR, SCOL, SNCT, SPEL, STAT, TACT, TERM, WATR, WEAP, WRLD
module.exports["ARMO.FULL"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, NOCM, OVIS, QUST, RACE
module.exports["ARMO.INDX"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, WEAP
module.exports["ARMO.INRD"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, IDLM, INNR, KEYM, LCTN, LIGH, MGEF, MISC, MSTT, NPC_, QUST, RACE, SCEN, TERM, WEAP
module.exports["ARMO.KSIZ"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, IDLM, INNR, KEYM, LCTN, LIGH, MGEF, MISC, MSTT, NPC_, QUST, RACE, SCEN, TERM, WEAP
module.exports["ARMO.KWDA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO
module.exports["ARMO.MO2S"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO
module.exports["ARMO.MO2T"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO
module.exports["ARMO.MO4S"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO, WEAP
module.exports["ARMO.MO4T"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO
module.exports["ARMO.MOD2"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO, WEAP
module.exports["ARMO.MOD4"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ADDN, ALCH, AMMO, ANIO, ARMA, ARMO, ARTO, BOOK, BPTD, CAMS, CLMT, CONT, DOOR, EFSH, EXPL, FLOR, FURN, GRAS, HAZD, HDPT, IDLM, INGR, IPCT, KEYM, LIGH, LVLN, MATO, MISC, MSTT, NOTE, OMOD, PROJ, RACE, SCOL, STAT, TACT, TERM, TREE, WEAP, WTHR
module.exports["ARMO.MODL"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ADDN, ALCH, AMMO, ARMO, ARTO, ASPC, BNDS, BOOK, CMPO, CONT, DOOR, ENCH, EXPL, FLOR, FURN, GRAS, HAZD, IDLM, INGR, KEYM, LIGH, LVLI, LVLN, MISC, MSTT, NOTE, NPC_, PKIN, PROJ, SCOL, SOUN, SPEL, STAT, TACT, TERM, TREE, TXST, WEAP
module.exports["ARMO.OBND"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, FURN, NPC_, WEAP
module.exports["ARMO.OBTE"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, NPC_, WEAP
module.exports["ARMO.OBTF"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, FURN, NPC_, WEAP
module.exports["ARMO.OBTS"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, KEYM, LIGH, MISC, MSTT, NOTE, NPC_, SCOL, STAT, TERM, WEAP
module.exports["ARMO.PTRN"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO, FACT, HDPT, IMAD, INFO, KSSM, LCTN, NPC_, RACE, RFGP, SMQN, TERM, WRLD, WTHR
module.exports["ARMO.RNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, FURN, NPC_, WEAP
module.exports["ARMO.STOP"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, ACTI, ARMO, BOOK, CONT, DOOR, FLOR, FURN, INFO, KEYM, LIGH, MGEF, MISC, MSTT, NOTE, NPC_, PACK, PERK, PGRE, QUST, REFR, SCEN, STAT, TACT, TERM, WEAP
module.exports["ARMO.VMAD"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ALCH, AMMO, ARMO, BOOK, COBJ, IMAD, INGR, INNR, MISC, NOTE, WATR, WEAP
module.exports["ARMO.YNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ALCH, AMMO, ARMO, BOOK, COBJ, LSCR, MISC, NOTE, NPC_, RACE, WEAP, WRLD
module.exports["ARMO.ZNAM"] = (data) => {
  return generic.print_as_hash(data);
}

