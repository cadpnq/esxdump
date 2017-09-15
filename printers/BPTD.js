const generic = require("./generic");

// this field is potentially common among the following records: ANIO, ASPC, BPTD, COBJ, COLL, DIAL, DLVW, IMAD, MATT, MSWP, MUST, PACK, SNDR
module.exports["BPTD.BNAM"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["BPTD.BPND"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["BPTD.BPNN"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["BPTD.BPNT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["BPTD.BPTN"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, BOOK, BPTD, CLFM, COBJ, COLL, DOOR, IMGS, KYWD, LCRT, LCTN, LENS, MATT, MSWP, MUST, NPC_, PACK, PKIN, QUST, RACE, SCEN, SCSN, SNCT, SNDR, TES4, TREE, WRLD
module.exports["BPTD.CNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ADDN, AECH, ALCH, AMDL, AMMO, ARMA, ARTO, BNDS, BOOK, BPTD, DLBR, DLVW, DMGT, DOBJ, EFSH, HAZD, IDLE, IMAD, IMGS, INFO, IPCT, KSSM, KYWD, LENS, MATO, MESG, MGEF, MUST, NOTE, NPC_, PROJ, QUST, SCEN, SMBN, SMEN, SMQN, SNDR, STAT, TXST, VTYP, WATR, WEAP, WRLD
module.exports["BPTD.DNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
module.exports["BPTD.EDID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: BPTD, DLVW, FURN, IDLE, IMGS, INFO, IPCT, KSSM, QUST, SCEN, SMEN, SOPM
module.exports["BPTD.ENAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ARMO, BPTD, CLFM, CLMT, COBJ, COLL, DOOR, FLOR, FURN, GLOB, IPCT, LENS, LIGH, MATT, MSWP, MUSC, MUST, OMOD, PACK, PERK, QUST, RACE, REFR, SCEN, SNCT, SNDR, TACT, TERM, WATR, WEAP, WTHR
module.exports["BPTD.FNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: BOOK, BPTD, INFO, MESG, MOVT, NPC_, OTFT, PACK, REFR, SCEN, WATR, WEAP
module.exports["BPTD.INAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: BPTD, MOVT, WTHR
module.exports["BPTD.JNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ADDN, ALCH, AMMO, ANIO, ARMA, ARMO, ARTO, BOOK, BPTD, CAMS, CLMT, CONT, DOOR, EFSH, EXPL, FLOR, FURN, GRAS, HAZD, HDPT, IDLM, INGR, IPCT, KEYM, LIGH, LVLN, MATO, MISC, MSTT, NOTE, OMOD, PROJ, RACE, SCOL, STAT, TACT, TERM, TREE, WEAP, WTHR
module.exports["BPTD.MODL"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ADDN, ALCH, AMMO, ANIO, ARTO, BOOK, BPTD, CAMS, CLMT, CONT, DEBR, DOOR, EFSH, EXPL, FLOR, FURN, GRAS, HAZD, HDPT, IDLM, INGR, IPCT, KEYM, LIGH, LVLN, MATT, MISC, MSTT, NOTE, OMOD, PROJ, RACE, SCOL, STAT, TACT, TERM, TREE, WEAP, WTHR
module.exports["BPTD.MODT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AMMO, ARMA, AVIF, BPTD, COBJ, FURN, HDPT, IMAD, INFO, IPCT, LCTN, NOCM, OMOD, PROJ, RACE, SOPM, WATR, WTHR
module.exports["BPTD.NAM1"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: BPTD, IMAD, INFO, NPC_, RACE, WATR, WRLD, WTHR
module.exports["BPTD.NAM4"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: BPTD, IMAD, NPC_
module.exports["BPTD.NAM5"] = (data) => {
  return generic.print_as_hash(data);
}

