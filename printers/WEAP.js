const generic = require("./generic");

// this field is potentially common among the following records: ARMO, FURN, NPC_, RACE, WEAP
module.exports["WEAP.APPR"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, WEAP
module.exports["WEAP.BAMT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["WEAP.BIDS"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["WEAP.CRDT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, WEAP
module.exports["WEAP.DAMA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ALCH, AMMO, ARMO, AVIF, BOOK, CLAS, COBJ, COLL, LSCR, MESG, OMOD, PERK, RACE, SPEL, WEAP
module.exports["WEAP.DESC"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, CONT, DOOR, FLOR, FURN, MISC, MSTT, NPC_, PROJ, WEAP
module.exports["WEAP.DEST"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ADDN, AECH, ALCH, AMDL, AMMO, ARMA, ARTO, BNDS, BOOK, BPTD, DLBR, DLVW, DMGT, DOBJ, EFSH, HAZD, IDLE, IMAD, IMGS, INFO, IPCT, KSSM, KYWD, LENS, MATO, MESG, MGEF, MUST, NOTE, NPC_, PROJ, QUST, SCEN, SMBN, SMEN, SMQN, SNDR, STAT, TXST, VTYP, WATR, WEAP, WRLD
module.exports["WEAP.DNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, CONT, DOOR, FLOR, FURN, MISC, MSTT, NPC_, PROJ, WEAP
module.exports["WEAP.DSTD"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, CONT, DOOR, FLOR, FURN, MISC, MSTT, NPC_, PROJ, WEAP
module.exports["WEAP.DSTF"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["WEAP.EAMT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
module.exports["WEAP.EDID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, EXPL, WEAP
module.exports["WEAP.EITM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, SPEL, WEAP
module.exports["WEAP.ETYP"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ARMO, BPTD, CLFM, CLMT, COBJ, COLL, DOOR, FLOR, FURN, GLOB, IPCT, LENS, LIGH, MATT, MSWP, MUSC, MUST, OMOD, PACK, PERK, QUST, RACE, REFR, SCEN, SNCT, SNDR, TACT, TERM, WATR, WEAP, WTHR
module.exports["WEAP.FNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, AVIF, BOOK, CELL, CLAS, CLFM, CMPO, CONT, DIAL, DOOR, ENCH, EXPL, FACT, FLOR, FLST, FURN, HAZD, HDPT, INGR, KEYM, KYWD, LCTN, LIGH, MESG, MGEF, MISC, MSTT, NOTE, NPC_, OMOD, PERK, PROJ, QUST, RACE, REFR, SCOL, SNCT, SPEL, STAT, TACT, TERM, WATR, WEAP, WRLD
module.exports["WEAP.FULL"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: BOOK, BPTD, INFO, MESG, MOVT, NPC_, OTFT, PACK, REFR, SCEN, WATR, WEAP
module.exports["WEAP.INAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, WEAP
module.exports["WEAP.INRD"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, IDLM, INNR, KEYM, LCTN, LIGH, MGEF, MISC, MSTT, NPC_, QUST, RACE, SCEN, TERM, WEAP
module.exports["WEAP.KSIZ"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, IDLM, INNR, KEYM, LCTN, LIGH, MGEF, MISC, MSTT, NPC_, QUST, RACE, SCEN, TERM, WEAP
module.exports["WEAP.KWDA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ADDN, FLST, LIGH, MOVT, MUST, OMOD, QUST, RACE, REFR, SCEN, SNDR, WEAP, WTHR
module.exports["WEAP.LNAM"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["WEAP.MASE"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO, WEAP
module.exports["WEAP.MO4T"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO, WEAP
module.exports["WEAP.MOD4"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ADDN, ALCH, AMMO, ANIO, ARMA, ARMO, ARTO, BOOK, BPTD, CAMS, CLMT, CONT, DOOR, EFSH, EXPL, FLOR, FURN, GRAS, HAZD, HDPT, IDLM, INGR, IPCT, KEYM, LIGH, LVLN, MATO, MISC, MSTT, NOTE, OMOD, PROJ, RACE, SCOL, STAT, TACT, TERM, TREE, WEAP, WTHR
module.exports["WEAP.MODL"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ADDN, ALCH, AMMO, ANIO, ARTO, BOOK, BPTD, CAMS, CLMT, CONT, DEBR, DOOR, EFSH, EXPL, FLOR, FURN, GRAS, HAZD, HDPT, IDLM, INGR, IPCT, KEYM, LIGH, LVLN, MATT, MISC, MSTT, NOTE, OMOD, PROJ, RACE, SCOL, STAT, TACT, TERM, TREE, WEAP, WTHR
module.exports["WEAP.MODT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: KYWD, LSCR, MESG, PERK, QUST, RACE, RFGP, SCEN, SMQN, WEAP, WTHR
module.exports["WEAP.NNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ADDN, ALCH, AMMO, ARMO, ARTO, ASPC, BNDS, BOOK, CMPO, CONT, DOOR, ENCH, EXPL, FLOR, FURN, GRAS, HAZD, IDLM, INGR, KEYM, LIGH, LVLI, LVLN, MISC, MSTT, NOTE, NPC_, PKIN, PROJ, SCOL, SOUN, SPEL, STAT, TACT, TERM, TREE, TXST, WEAP
module.exports["WEAP.OBND"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, FURN, NPC_, WEAP
module.exports["WEAP.OBTE"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, NPC_, WEAP
module.exports["WEAP.OBTF"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, FURN, NPC_, WEAP
module.exports["WEAP.OBTS"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, KEYM, LIGH, MISC, MSTT, NOTE, NPC_, SCOL, STAT, TERM, WEAP
module.exports["WEAP.PTRN"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, FURN, NPC_, WEAP
module.exports["WEAP.STOP"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, ACTI, ARMO, BOOK, CONT, DOOR, FLOR, FURN, INFO, KEYM, LIGH, MGEF, MISC, MSTT, NOTE, NPC_, PACK, PERK, PGRE, QUST, REFR, SCEN, STAT, TACT, TERM, WEAP
module.exports["WEAP.VMAD"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["WEAP.WAMD"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: INFO, WEAP
module.exports["WEAP.WZMD"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ALCH, AMMO, ARMO, BOOK, COBJ, IMAD, INGR, INNR, MISC, NOTE, WATR, WEAP
module.exports["WEAP.YNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ALCH, AMMO, ARMO, BOOK, COBJ, LSCR, MISC, NOTE, NPC_, RACE, WEAP, WRLD
module.exports["WEAP.ZNAM"] = (data) => {
  return generic.print_as_hash(data);
}

