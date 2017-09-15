const generic = require("./generic");

// this field is potentially common among the following records: ACHR, ADDN, ALCH, AMMO, ARMO, ASTP, BOOK, CAMS, CELL, CLAS, CMPO, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, ECZN, EFSH, EQUP, EXPL, FACT, FSTP, FSTS, GDRY, GMST, GRAS, HDPT, IDLE, INGR, IPCT, KEYM, KYWD, LAND, LGTM, LIGH, MATO, MGEF, MISC, MSTT, NOCM, NOTE, NPC_, OMOD, OVIS, PERK, PGRE, PHZD, PMIS, PROJ, RACE, REFR, RELA, REVB, RFCT, SCEN, SCOL, SPGD, TRNS, WATR, WRLD, WTHR
module.exports["CELL.DATA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
module.exports["CELL.EDID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, AVIF, BOOK, CELL, CLAS, CLFM, CMPO, CONT, DIAL, DOOR, ENCH, EXPL, FACT, FLOR, FLST, FURN, HAZD, HDPT, INGR, KEYM, KYWD, LCTN, LIGH, MESG, MGEF, MISC, MSTT, NOTE, NPC_, OMOD, PERK, PROJ, QUST, RACE, REFR, SCOL, SNCT, SPEL, STAT, TACT, TERM, WATR, WEAP, WRLD
module.exports["CELL.FULL"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["CELL.LTMP"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: CELL, WRLD
module.exports["CELL.MHDT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["CELL.PCMB"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["CELL.RVIS"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["CELL.TVDT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["CELL.VISI"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["CELL.XCAS"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["CELL.XCCM"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["CELL.XCIM"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["CELL.XCLC"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["CELL.XCLL"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["CELL.XCLR"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["CELL.XCLW"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["CELL.XCMO"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["CELL.XCRI"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["CELL.XCWT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, CELL, PGRE, REFR
module.exports["CELL.XEZN"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["CELL.XGDR"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["CELL.XILL"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["CELL.XILW"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, CELL, WRLD
module.exports["CELL.XLCN"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, CELL, PGRE, REFR
module.exports["CELL.XOWN"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["CELL.XPRI"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, CELL, PHZD, REFR
module.exports["CELL.XRNK"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: CELL, REFR
module.exports["CELL.XWCN"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: CELL, REFR
module.exports["CELL.XWCU"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: CELL, WRLD
module.exports["CELL.XXXX"] = (data) => {
  return generic.print_as_hash(data);
}

