const generic = require("./generic");

// this field is potentially common among the following records: ACTI, ALCH, CAMS, CLFM, COBJ, CPTH, ENCH, FACT, FURN, HDPT, IDLE, INFO, LSCR, MESG, MGEF, MUST, PACK, PERK, QUST, RACE, SCEN, SMBN, SMEN, SMQN, SNDR, SPEL, TERM
module.exports["HDPT.CTDA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, ADDN, ALCH, AMMO, ARMO, ASTP, BOOK, CAMS, CELL, CLAS, CMPO, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, ECZN, EFSH, EQUP, EXPL, FACT, FSTP, FSTS, GDRY, GMST, GRAS, HDPT, IDLE, INGR, IPCT, KEYM, KYWD, LAND, LGTM, LIGH, MATO, MGEF, MISC, MSTT, NOCM, NOTE, NPC_, OMOD, OVIS, PERK, PGRE, PHZD, PMIS, PROJ, RACE, REFR, RELA, REVB, RFCT, SCEN, SCOL, SPGD, TRNS, WATR, WRLD, WTHR
module.exports["HDPT.DATA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
module.exports["HDPT.EDID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, AVIF, BOOK, CELL, CLAS, CLFM, CMPO, CONT, DIAL, DOOR, ENCH, EXPL, FACT, FLOR, FLST, FURN, HAZD, HDPT, INGR, KEYM, KYWD, LCTN, LIGH, MESG, MGEF, MISC, MSTT, NOTE, NPC_, OMOD, PERK, PROJ, QUST, RACE, REFR, SCOL, SNCT, SPEL, STAT, TACT, TERM, WATR, WEAP, WRLD
module.exports["HDPT.FULL"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: HDPT, IMGS, LTEX, MATT, RACE, SCEN, SMQN
module.exports["HDPT.HNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ADDN, ALCH, AMMO, ANIO, ARMA, ARMO, ARTO, BOOK, BPTD, CAMS, CLMT, CONT, DOOR, EFSH, EXPL, FLOR, FURN, GRAS, HAZD, HDPT, IDLM, INGR, IPCT, KEYM, LIGH, LVLN, MATO, MISC, MSTT, NOTE, OMOD, PROJ, RACE, SCOL, STAT, TACT, TERM, TREE, WEAP, WTHR
module.exports["HDPT.MODL"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ADDN, ALCH, AMMO, ANIO, ARTO, BOOK, BPTD, CAMS, CLMT, CONT, DEBR, DOOR, EFSH, EXPL, FLOR, FURN, GRAS, HAZD, HDPT, IDLM, INGR, IPCT, KEYM, LIGH, LVLN, MATT, MISC, MSTT, NOTE, OMOD, PROJ, RACE, SCOL, STAT, TACT, TERM, TREE, WEAP, WTHR
module.exports["HDPT.MODT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, AVIF, FURN, HDPT, INFO, LIGH, RACE, SCEN, TERM, WATR, WRLD, WTHR
module.exports["HDPT.NAM0"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AMMO, ARMA, AVIF, BPTD, COBJ, FURN, HDPT, IMAD, INFO, IPCT, LCTN, NOCM, OMOD, PROJ, RACE, SOPM, WATR, WTHR
module.exports["HDPT.NAM1"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, DIAL, EQUP, FLOR, FURN, HDPT, IPDS, LAYR, LCTN, MATT, MUSC, NOTE, NPC_, PACK, RACE, SCEN, SCSN, SMBN, SMEN, SMQN, SNCT, TACT, TERM, WRLD, WTHR
module.exports["HDPT.PNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO, FACT, HDPT, IMAD, INFO, KSSM, LCTN, NPC_, RACE, RFGP, SMQN, TERM, WRLD, WTHR
module.exports["HDPT.RNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, BNDS, CLMT, CONT, DLBR, HDPT, IMAD, IMGS, INFO, KSSM, KYWD, LCRT, LSCR, LTEX, MESG, MUSC, REFR, SCEN, STAG, TERM, TES4, WATR, WTHR
module.exports["HDPT.TNAM"] = (data) => {
  return generic.print_as_hash(data);
}

