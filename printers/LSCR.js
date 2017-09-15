const generic = require("./generic");

// this field is potentially common among the following records: ACTI, IDLE, INFO, LSCR, MESG, MUST, PACK, QUST, SCEN, SMBN, SMQN, SPEL, TERM
module.exports["LSCR.CIS2"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, CAMS, CLFM, COBJ, CPTH, ENCH, FACT, FURN, HDPT, IDLE, INFO, LSCR, MESG, MGEF, MUST, PACK, PERK, QUST, RACE, SCEN, SMBN, SMEN, SMQN, SNDR, SPEL, TERM
module.exports["LSCR.CTDA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ALCH, AMMO, ARMO, AVIF, BOOK, CLAS, COBJ, COLL, LSCR, MESG, OMOD, PERK, RACE, SPEL, WEAP
module.exports["LSCR.DESC"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
module.exports["LSCR.EDID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: KYWD, LSCR, MESG, PERK, QUST, RACE, RFGP, SCEN, SMQN, WEAP, WTHR
module.exports["LSCR.NNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AMMO, ARMA, CONT, DOOR, INFO, LSCR, LVLI, RACE, REFR, SCEN, SCOL, SNCT, SNDR, SOPM, WRLD
module.exports["LSCR.ONAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, BNDS, CLMT, CONT, DLBR, HDPT, IMAD, IMGS, INFO, KSSM, KYWD, LCRT, LSCR, LTEX, MESG, MUSC, REFR, SCEN, STAG, TERM, TES4, WATR, WTHR
module.exports["LSCR.TNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ALCH, AMMO, ARMO, BOOK, COBJ, LSCR, MISC, NOTE, NPC_, RACE, WEAP, WRLD
module.exports["LSCR.ZNAM"] = (data) => {
  return generic.print_as_hash(data);
}

