const generic = require("./generic");

// this field is potentially common among the following records: AACT, ADDN, AECH, ALCH, AMDL, AMMO, ARMA, ARTO, BNDS, BOOK, BPTD, DLBR, DLVW, DMGT, DOBJ, EFSH, HAZD, IDLE, IMAD, IMGS, INFO, IPCT, KSSM, KYWD, LENS, MATO, MESG, MGEF, MUST, NOTE, NPC_, PROJ, QUST, SCEN, SMBN, SMEN, SMQN, SNDR, STAT, TXST, VTYP, WATR, WEAP, WRLD
module.exports["KSSM.DNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
module.exports["KSSM.EDID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: BPTD, DLVW, FURN, IDLE, IMGS, INFO, IPCT, KSSM, QUST, SCEN, SMEN, SOPM
module.exports["KSSM.ENAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AECH, DIAL, KSSM
module.exports["KSSM.KNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO, FACT, HDPT, IMAD, INFO, KSSM, LCTN, NPC_, RACE, RFGP, SMQN, TERM, WRLD, WTHR
module.exports["KSSM.RNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, BNDS, CLMT, CONT, DLBR, HDPT, IMAD, IMGS, INFO, KSSM, KYWD, LCRT, LSCR, LTEX, MESG, MUSC, REFR, SCEN, STAG, TERM, TES4, WATR, WTHR
module.exports["KSSM.TNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, IMAD, INNR, KSSM, PKIN, PROJ, RACE, SCCO, SCEN, SNCT, SOPM, TACT, WTHR
module.exports["KSSM.VNAM"] = (data) => {
  return generic.print_as_hash(data);
}

