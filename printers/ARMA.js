const generic = require("./generic");

// this field is potentially common among the following records: ARMA, ARMO, RACE
module.exports["ARMA.BOD2"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, RACE
module.exports["ARMA.BSMB"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, RACE
module.exports["ARMA.BSMP"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, RACE
module.exports["ARMA.BSMS"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ADDN, AECH, ALCH, AMDL, AMMO, ARMA, ARTO, BNDS, BOOK, BPTD, DLBR, DLVW, DMGT, DOBJ, EFSH, HAZD, IDLE, IMAD, IMGS, INFO, IPCT, KSSM, KYWD, LENS, MATO, MESG, MGEF, MUST, NOTE, NPC_, PROJ, QUST, SCEN, SMBN, SMEN, SMQN, SNDR, STAT, TXST, VTYP, WATR, WEAP, WRLD
module.exports["ARMA.DNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
module.exports["ARMA.EDID"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["ARMA.MO2F"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO
module.exports["ARMA.MO2S"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO
module.exports["ARMA.MO2T"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["ARMA.MO3C"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["ARMA.MO3F"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["ARMA.MO3S"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["ARMA.MO3T"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO
module.exports["ARMA.MO4S"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO, WEAP
module.exports["ARMA.MO4T"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["ARMA.MO5S"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["ARMA.MO5T"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO
module.exports["ARMA.MOD2"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["ARMA.MOD3"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO, WEAP
module.exports["ARMA.MOD4"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["ARMA.MOD5"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ADDN, ALCH, AMMO, ANIO, ARMA, ARMO, ARTO, BOOK, BPTD, CAMS, CLMT, CONT, DOOR, EFSH, EXPL, FLOR, FURN, GRAS, HAZD, HDPT, IDLM, INGR, IPCT, KEYM, LIGH, LVLN, MATO, MISC, MSTT, NOTE, OMOD, PROJ, RACE, SCOL, STAT, TACT, TERM, TREE, WEAP, WTHR
module.exports["ARMA.MODL"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, AVIF, FURN, HDPT, INFO, LIGH, RACE, SCEN, TERM, WATR, WRLD, WTHR
module.exports["ARMA.NAM0"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AMMO, ARMA, AVIF, BPTD, COBJ, FURN, HDPT, IMAD, INFO, IPCT, LCTN, NOCM, OMOD, PROJ, RACE, SOPM, WATR, WTHR
module.exports["ARMA.NAM1"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AMMO, ARMA, COBJ, IMAD, INFO, IPCT, PROJ, QUST, RACE, WATR, WRLD
module.exports["ARMA.NAM2"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AMMO, ARMA, CONT, DOOR, INFO, LSCR, LVLI, RACE, REFR, SCEN, SCOL, SNCT, SNDR, SOPM, WRLD
module.exports["ARMA.ONAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO, FACT, HDPT, IMAD, INFO, KSSM, LCTN, NPC_, RACE, RFGP, SMQN, TERM, WRLD, WTHR
module.exports["ARMA.RNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, MGEF
module.exports["ARMA.SNDD"] = (data) => {
  return generic.print_as_hash(data);
}

