const generic = require("./generic");

// this field is potentially common among the following records: AVIF, COBJ, CPTH, DOOR, EQUP, FSTP, IDLE, INFO, LCTN, MATT, MUST, NPC_, PACK, QUST, RACE, REGN, REVB, SCEN, SNDR, TERM, WATR
module.exports["REGN.ANAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
module.exports["REGN.EDID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: NPC_, REGN
module.exports["REGN.RCLR"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ASPC, REGN
module.exports["REGN.RDAT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REGN.RDGS"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REGN.RDMO"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REGN.RDMP"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REGN.RDOT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REGN.RDSA"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REGN.RDWT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REGN.RPLD"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REGN.RPLI"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ASPC, IMAD, INNR, MUSC, NPC_, RACE, REGN, SCEN, TERM, WRLD, WTHR
module.exports["REGN.WNAM"] = (data) => {
  return generic.print_as_hash(data);
}

