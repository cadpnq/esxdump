const generic = require("./generic");

// this field is potentially common among the following records: AVIF, COBJ, CPTH, DOOR, EQUP, FSTP, IDLE, INFO, LCTN, MATT, MUST, NPC_, PACK, QUST, RACE, REGN, REVB, SCEN, SNDR, TERM, WATR
module.exports["DOOR.ANAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, BOOK, BPTD, CLFM, COBJ, COLL, DOOR, IMGS, KYWD, LCRT, LCTN, LENS, MATT, MSWP, MUST, NPC_, PACK, PKIN, QUST, RACE, SCEN, SCSN, SNCT, SNDR, TES4, TREE, WRLD
module.exports["DOOR.CNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, CONT, DOOR, FLOR, FURN, MISC, MSTT, NPC_, PROJ, WEAP
module.exports["DOOR.DEST"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, CONT, DOOR, FLOR, FURN, MISC, MSTT, NPC_, PROJ, WEAP
module.exports["DOOR.DSTD"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, CONT, DOOR, FLOR, FURN, MISC, MSTT, NPC_, PROJ, WEAP
module.exports["DOOR.DSTF"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
module.exports["DOOR.EDID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ARMO, BPTD, CLFM, CLMT, COBJ, COLL, DOOR, FLOR, FURN, GLOB, IPCT, LENS, LIGH, MATT, MSWP, MUSC, MUST, OMOD, PACK, PERK, QUST, RACE, REFR, SCEN, SNCT, SNDR, TACT, TERM, WATR, WEAP, WTHR
module.exports["DOOR.FNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, AVIF, BOOK, CELL, CLAS, CLFM, CMPO, CONT, DIAL, DOOR, ENCH, EXPL, FACT, FLOR, FLST, FURN, HAZD, HDPT, INGR, KEYM, KYWD, LCTN, LIGH, MESG, MGEF, MISC, MSTT, NOTE, NPC_, OMOD, PERK, PROJ, QUST, RACE, REFR, SCOL, SNCT, SPEL, STAT, TACT, TERM, WATR, WEAP, WRLD
module.exports["DOOR.FULL"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, IDLM, INNR, KEYM, LCTN, LIGH, MGEF, MISC, MSTT, NPC_, QUST, RACE, SCEN, TERM, WEAP
module.exports["DOOR.KSIZ"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, IDLM, INNR, KEYM, LCTN, LIGH, MGEF, MISC, MSTT, NPC_, QUST, RACE, SCEN, TERM, WEAP
module.exports["DOOR.KWDA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ADDN, ALCH, AMMO, ANIO, ARMA, ARMO, ARTO, BOOK, BPTD, CAMS, CLMT, CONT, DOOR, EFSH, EXPL, FLOR, FURN, GRAS, HAZD, HDPT, IDLM, INGR, IPCT, KEYM, LIGH, LVLN, MATO, MISC, MSTT, NOTE, OMOD, PROJ, RACE, SCOL, STAT, TACT, TERM, TREE, WEAP, WTHR
module.exports["DOOR.MODL"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, ANIO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, MISC, MSTT, OMOD, SCOL, STAT, TACT
module.exports["DOOR.MODS"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ADDN, ALCH, AMMO, ANIO, ARTO, BOOK, BPTD, CAMS, CLMT, CONT, DEBR, DOOR, EFSH, EXPL, FLOR, FURN, GRAS, HAZD, HDPT, IDLM, INGR, IPCT, KEYM, LIGH, LVLN, MATT, MISC, MSTT, NOTE, OMOD, PROJ, RACE, SCOL, STAT, TACT, TERM, TREE, WEAP, WTHR
module.exports["DOOR.MODT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, CONT, DOOR, NPC_
module.exports["DOOR.NTRM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ADDN, ALCH, AMMO, ARMO, ARTO, ASPC, BNDS, BOOK, CMPO, CONT, DOOR, ENCH, EXPL, FLOR, FURN, GRAS, HAZD, IDLM, INGR, KEYM, LIGH, LVLI, LVLN, MISC, MSTT, NOTE, NPC_, PKIN, PROJ, SCOL, SOUN, SPEL, STAT, TACT, TERM, TREE, TXST, WEAP
module.exports["DOOR.OBND"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AMMO, ARMA, CONT, DOOR, INFO, LSCR, LVLI, RACE, REFR, SCEN, SCOL, SNCT, SNDR, SOPM, WRLD
module.exports["DOOR.ONAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, KEYM, LIGH, MISC, MSTT, NOTE, NPC_, SCOL, STAT, TERM, WEAP
module.exports["DOOR.PTRN"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ADDN, ASPC, CONT, CPTH, DIAL, DLBR, DOOR, FLOR, FURN, IMAD, INFO, IPCT, LTEX, MESG, MSTT, MSWP, MUST, NOTE, NPC_, PERK, QUST, SCCO, SCEN, SMBN, SMEN, SMQN, SNDR, TERM, WATR, WTHR
module.exports["DOOR.SNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, ACTI, ARMO, BOOK, CONT, DOOR, FLOR, FURN, INFO, KEYM, LIGH, MGEF, MISC, MSTT, NOTE, NPC_, PACK, PERK, PGRE, QUST, REFR, SCEN, STAT, TACT, TERM, WEAP
module.exports["DOOR.VMAD"] = (data) => {
  return generic.print_as_hash(data);
}

