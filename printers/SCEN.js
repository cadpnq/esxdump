const generic = require("./generic");

module.exports["SCEN.ACTV"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: QUST, SCEN
module.exports["SCEN.ALID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AVIF, COBJ, CPTH, DOOR, EQUP, FSTP, IDLE, INFO, LCTN, MATT, MUST, NPC_, PACK, QUST, RACE, REGN, REVB, SCEN, SNDR, TERM, WATR
module.exports["SCEN.ANAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, IDLE, INFO, PACK, PERK, QUST, SCEN, SMQN, TERM
module.exports["SCEN.CIS1"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, IDLE, INFO, LSCR, MESG, MUST, PACK, QUST, SCEN, SMBN, SMQN, SPEL, TERM
module.exports["SCEN.CIS2"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, FACT, FURN, MUST, PACK, SCEN, SMBN, SMEN, SMQN
module.exports["SCEN.CITC"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, BOOK, BPTD, CLFM, COBJ, COLL, DOOR, IMGS, KYWD, LCRT, LCTN, LENS, MATT, MSWP, MUST, NPC_, PACK, PKIN, QUST, RACE, SCEN, SCSN, SNCT, SNDR, TES4, TREE, WRLD
module.exports["SCEN.CNAM"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.CRIS"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, CAMS, CLFM, COBJ, CPTH, ENCH, FACT, FURN, HDPT, IDLE, INFO, LSCR, MESG, MGEF, MUST, PACK, PERK, QUST, RACE, SCEN, SMBN, SMEN, SMQN, SNDR, SPEL, TERM
module.exports["SCEN.CTDA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: LGTM, SCEN, WTHR
module.exports["SCEN.DALC"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, ADDN, ALCH, AMMO, ARMO, ASTP, BOOK, CAMS, CELL, CLAS, CMPO, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, ECZN, EFSH, EQUP, EXPL, FACT, FSTP, FSTS, GDRY, GMST, GRAS, HDPT, IDLE, INGR, IPCT, KEYM, KYWD, LAND, LGTM, LIGH, MATO, MGEF, MISC, MSTT, NOCM, NOTE, NPC_, OMOD, OVIS, PERK, PGRE, PHZD, PMIS, PROJ, RACE, REFR, RELA, REVB, RFCT, SCEN, SCOL, SPGD, TRNS, WATR, WRLD, WTHR
module.exports["SCEN.DATA"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.DEMO"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.DEVA"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.DMAX"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.DMIN"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ADDN, AECH, ALCH, AMDL, AMMO, ARMA, ARTO, BNDS, BOOK, BPTD, DLBR, DLVW, DMGT, DOBJ, EFSH, HAZD, IDLE, IMAD, IMGS, INFO, IPCT, KSSM, KYWD, LENS, MATO, MESG, MGEF, MUST, NOTE, NPC_, PROJ, QUST, SCEN, SMBN, SMEN, SMQN, SNDR, STAT, TXST, VTYP, WATR, WEAP, WRLD
module.exports["SCEN.DNAM"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.DTGT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.DTID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
module.exports["SCEN.EDID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: BPTD, DLVW, FURN, IDLE, IMGS, INFO, IPCT, KSSM, QUST, SCEN, SMEN, SOPM
module.exports["SCEN.ENAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ARMO, BPTD, CLFM, CLMT, COBJ, COLL, DOOR, FLOR, FURN, GLOB, IPCT, LENS, LIGH, MATT, MSWP, MUSC, MUST, OMOD, PACK, PERK, QUST, RACE, REFR, SCEN, SNCT, SNDR, TACT, TERM, WATR, WEAP, WTHR
module.exports["SCEN.FNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: HDPT, IMGS, LTEX, MATT, RACE, SCEN, SMQN
module.exports["SCEN.HNAM"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.HTID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: BOOK, BPTD, INFO, MESG, MOVT, NPC_, OTFT, PACK, REFR, SCEN, WATR, WEAP
module.exports["SCEN.INAM"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.INTT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.JOUT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, IDLM, INNR, KEYM, LCTN, LIGH, MGEF, MISC, MSTT, NPC_, QUST, RACE, SCEN, TERM, WEAP
module.exports["SCEN.KSIZ"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, IDLM, INNR, KEYM, LCTN, LIGH, MGEF, MISC, MSTT, NPC_, QUST, RACE, SCEN, TERM, WEAP
module.exports["SCEN.KWDA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: LCTN, SCEN
module.exports["SCEN.LCEP"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ADDN, FLST, LIGH, MOVT, MUST, OMOD, QUST, RACE, REFR, SCEN, SNDR, WEAP, WTHR
module.exports["SCEN.LNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, AVIF, FURN, HDPT, INFO, LIGH, RACE, SCEN, TERM, WATR, WRLD, WTHR
module.exports["SCEN.NAM0"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.NETO"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: QUST, SCEN
module.exports["SCEN.NEXT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: KYWD, LSCR, MESG, PERK, QUST, RACE, RFGP, SCEN, SMQN, WEAP, WTHR
module.exports["SCEN.NNAM"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.NNGT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.NNUT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.NPOS"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.NPOT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.NQUS"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.NQUT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: RACE, SCEN
module.exports["SCEN.NTOP"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AMMO, ARMA, CONT, DOOR, INFO, LSCR, LVLI, RACE, REFR, SCEN, SCOL, SNCT, SNDR, SOPM, WRLD
module.exports["SCEN.ONAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, DIAL, EQUP, FLOR, FURN, HDPT, IPDS, LAYR, LCTN, MATT, MUSC, NOTE, NPC_, PACK, RACE, SCEN, SCSN, SMBN, SMEN, SMQN, SNCT, TACT, TERM, WRLD, WTHR
module.exports["SCEN.PNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: RACE, SCEN
module.exports["SCEN.PTOP"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.QTOP"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.SCQS"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ADDN, ASPC, CONT, CPTH, DIAL, DLBR, DOOR, FLOR, FURN, IMAD, INFO, IPCT, LTEX, MESG, MSTT, MSWP, MUST, NOTE, NPC_, PERK, QUST, SCCO, SCEN, SMBN, SMEN, SMQN, SNDR, TERM, WATR, WTHR
module.exports["SCEN.SNAM"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.SSPN"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["SCEN.STSC"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, BNDS, CLMT, CONT, DLBR, HDPT, IMAD, IMGS, INFO, KSSM, KYWD, LCRT, LSCR, LTEX, MESG, MUSC, REFR, SCEN, STAG, TERM, TES4, WATR, WTHR
module.exports["SCEN.TNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: FACT, SCEN
module.exports["SCEN.VENC"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, ACTI, ARMO, BOOK, CONT, DOOR, FLOR, FURN, INFO, KEYM, LIGH, MGEF, MISC, MSTT, NOTE, NPC_, PACK, PERK, PGRE, QUST, REFR, SCEN, STAT, TACT, TERM, WEAP
module.exports["SCEN.VMAD"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, IMAD, INNR, KSSM, PKIN, PROJ, RACE, SCCO, SCEN, SNCT, SOPM, TACT, WTHR
module.exports["SCEN.VNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ASPC, IMAD, INNR, MUSC, NPC_, RACE, REGN, SCEN, TERM, WRLD, WTHR
module.exports["SCEN.WNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: FACT, IMAD, PACK, QUST, SCCO, SCEN, SMBN, SMEN, SMQN, WATR
module.exports["SCEN.XNAM"] = (data) => {
  return generic.print_as_hash(data);
}

