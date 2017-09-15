const generic = require("./generic");

// this field is potentially common among the following records: AVIF, COBJ, CPTH, DOOR, EQUP, FSTP, IDLE, INFO, LCTN, MATT, MUST, NPC_, PACK, QUST, RACE, REGN, REVB, SCEN, SNDR, TERM, WATR
module.exports["PACK.ANAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ANIO, ASPC, BPTD, COBJ, COLL, DIAL, DLVW, IMAD, MATT, MSWP, MUST, PACK, SNDR
module.exports["PACK.BNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, IDLE, INFO, PACK, PERK, QUST, SCEN, SMQN, TERM
module.exports["PACK.CIS1"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, IDLE, INFO, LSCR, MESG, MUST, PACK, QUST, SCEN, SMBN, SMQN, SPEL, TERM
module.exports["PACK.CIS2"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, FACT, FURN, MUST, PACK, SCEN, SMBN, SMEN, SMQN
module.exports["PACK.CITC"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, BOOK, BPTD, CLFM, COBJ, COLL, DOOR, IMGS, KYWD, LCRT, LCTN, LENS, MATT, MSWP, MUST, NPC_, PACK, PKIN, QUST, RACE, SCEN, SCSN, SNCT, SNDR, TES4, TREE, WRLD
module.exports["PACK.CNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, CAMS, CLFM, COBJ, CPTH, ENCH, FACT, FURN, HDPT, IDLE, INFO, LSCR, MESG, MGEF, MUST, PACK, PERK, QUST, RACE, SCEN, SMBN, SMEN, SMQN, SNDR, SPEL, TERM
module.exports["PACK.CTDA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
module.exports["PACK.EDID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ARMO, BPTD, CLFM, CLMT, COBJ, COLL, DOOR, FLOR, FURN, GLOB, IPCT, LENS, LIGH, MATT, MSWP, MUSC, MUST, OMOD, PACK, PERK, QUST, RACE, REFR, SCEN, SNCT, SNDR, TACT, TERM, WATR, WEAP, WTHR
module.exports["PACK.FNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: IDLM, PACK
module.exports["PACK.IDLA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: IDLM, PACK
module.exports["PACK.IDLC"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: IDLM, PACK
module.exports["PACK.IDLF"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: IDLM, PACK
module.exports["PACK.IDLT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: BOOK, BPTD, INFO, MESG, MOVT, NPC_, OTFT, PACK, REFR, SCEN, WATR, WEAP
module.exports["PACK.INAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: PACK, REFR
module.exports["PACK.PDTO"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["PACK.PFO2"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["PACK.PKC2"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["PACK.PKCU"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["PACK.PKDT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["PACK.PLDT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, DIAL, EQUP, FLOR, FURN, HDPT, IPDS, LAYR, LCTN, MATT, MUSC, NOTE, NPC_, PACK, RACE, SCEN, SCSN, SMBN, SMEN, SMQN, SNCT, TACT, TERM, WRLD, WTHR
module.exports["PACK.PNAM"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["PACK.POBA"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["PACK.POCA"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["PACK.POEA"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["PACK.PRCB"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["PACK.PSDT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["PACK.PTDA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: CONT, DIAL, DLBR, DLVW, IDLM, MESG, NPC_, PACK, RACE, SCCO, SMQN, WTHR
module.exports["PACK.QNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: IMAD, INNR, PACK, RACE, SNCT, TERM, WTHR
module.exports["PACK.UNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, ACTI, ARMO, BOOK, CONT, DOOR, FLOR, FURN, INFO, KEYM, LIGH, MGEF, MISC, MSTT, NOTE, NPC_, PACK, PERK, PGRE, QUST, REFR, SCEN, STAT, TACT, TERM, WEAP
module.exports["PACK.VMAD"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: FACT, IMAD, PACK, QUST, SCCO, SCEN, SMBN, SMEN, SMQN, WATR
module.exports["PACK.XNAM"] = (data) => {
  return generic.print_as_hash(data);
}

