const generic = require("./generic");

// this field is potentially common among the following records: ACTI, IDLE, INFO, PACK, PERK, QUST, SCEN, SMQN, TERM
module.exports["SMQN.CIS1"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, IDLE, INFO, LSCR, MESG, MUST, PACK, QUST, SCEN, SMBN, SMQN, SPEL, TERM
module.exports["SMQN.CIS2"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, FACT, FURN, MUST, PACK, SCEN, SMBN, SMEN, SMQN
module.exports["SMQN.CITC"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, CAMS, CLFM, COBJ, CPTH, ENCH, FACT, FURN, HDPT, IDLE, INFO, LSCR, MESG, MGEF, MUST, PACK, PERK, QUST, RACE, SCEN, SMBN, SMEN, SMQN, SNDR, SPEL, TERM
module.exports["SMQN.CTDA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ADDN, AECH, ALCH, AMDL, AMMO, ARMA, ARTO, BNDS, BOOK, BPTD, DLBR, DLVW, DMGT, DOBJ, EFSH, HAZD, IDLE, IMAD, IMGS, INFO, IPCT, KSSM, KYWD, LENS, MATO, MESG, MGEF, MUST, NOTE, NPC_, PROJ, QUST, SCEN, SMBN, SMEN, SMQN, SNDR, STAT, TXST, VTYP, WATR, WEAP, WRLD
module.exports["SMQN.DNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
module.exports["SMQN.EDID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: HDPT, IMGS, LTEX, MATT, RACE, SCEN, SMQN
module.exports["SMQN.HNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: CAMS, CMPO, COLL, EXPL, FURN, HAZD, LCTN, LTEX, MATT, MOVT, OMOD, RACE, REFR, SMQN, SNCT, SOPM, SPGD, STAT, TERM, TXST, WRLD, WTHR
module.exports["SMQN.MNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: KYWD, LSCR, MESG, PERK, QUST, RACE, RFGP, SCEN, SMQN, WEAP, WTHR
module.exports["SMQN.NNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, DIAL, EQUP, FLOR, FURN, HDPT, IPDS, LAYR, LCTN, MATT, MUSC, NOTE, NPC_, PACK, RACE, SCEN, SCSN, SMBN, SMEN, SMQN, SNCT, TACT, TERM, WRLD, WTHR
module.exports["SMQN.PNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: CONT, DIAL, DLBR, DLVW, IDLM, MESG, NPC_, PACK, RACE, SCCO, SMQN, WTHR
module.exports["SMQN.QNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO, FACT, HDPT, IMAD, INFO, KSSM, LCTN, NPC_, RACE, RFGP, SMQN, TERM, WRLD, WTHR
module.exports["SMQN.RNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ADDN, ASPC, CONT, CPTH, DIAL, DLBR, DOOR, FLOR, FURN, IMAD, INFO, IPCT, LTEX, MESG, MSTT, MSWP, MUST, NOTE, NPC_, PERK, QUST, SCCO, SCEN, SMBN, SMEN, SMQN, SNDR, TERM, WATR, WTHR
module.exports["SMQN.SNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: FACT, IMAD, PACK, QUST, SCCO, SCEN, SMBN, SMEN, SMQN, WATR
module.exports["SMQN.XNAM"] = (data) => {
  return generic.print_as_hash(data);
}

