const generic = require("./generic");

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
module.exports["FLST.EDID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, AVIF, BOOK, CELL, CLAS, CLFM, CMPO, CONT, DIAL, DOOR, ENCH, EXPL, FACT, FLOR, FLST, FURN, HAZD, HDPT, INGR, KEYM, KYWD, LCTN, LIGH, MESG, MGEF, MISC, MSTT, NOTE, NPC_, OMOD, PERK, PROJ, QUST, RACE, REFR, SCOL, SNCT, SPEL, STAT, TACT, TERM, WATR, WEAP, WRLD
module.exports["FLST.FULL"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ADDN, FLST, LIGH, MOVT, MUST, OMOD, QUST, RACE, REFR, SCEN, SNDR, WEAP, WTHR
module.exports["FLST.LNAM"] = (data) => {
  return generic.print_as_hash(data);
}

