const generic = require("./generic");

module.exports["NPC_.ACBS"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.AIDT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AVIF, COBJ, CPTH, DOOR, EQUP, FSTP, IDLE, INFO, LCTN, MATT, MUST, NPC_, PACK, QUST, RACE, REGN, REVB, SCEN, SNDR, TERM, WATR
module.exports["NPC_.ANAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, FURN, NPC_, RACE, WEAP
module.exports["NPC_.APPR"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.ATKR"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, BOOK, BPTD, CLFM, COBJ, COLL, DOOR, IMGS, KYWD, LCRT, LCTN, LENS, MATT, MSWP, MUST, NPC_, PACK, PKIN, QUST, RACE, SCEN, SCSN, SNCT, SNDR, TES4, TREE, WRLD
module.exports["NPC_.CNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: CONT, FURN, NPC_, QUST, TERM
module.exports["NPC_.CNTO"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: CONT, FURN, NPC_, QUST, TERM
module.exports["NPC_.COCT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.CRIF"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.CS2D"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.CS2E"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.CS2F"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.CS2H"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.CS2K"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: CSTY, NPC_
module.exports["NPC_.CSCR"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, ADDN, ALCH, AMMO, ARMO, ASTP, BOOK, CAMS, CELL, CLAS, CMPO, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, ECZN, EFSH, EQUP, EXPL, FACT, FSTP, FSTS, GDRY, GMST, GRAS, HDPT, IDLE, INGR, IPCT, KEYM, KYWD, LAND, LGTM, LIGH, MATO, MGEF, MISC, MSTT, NOCM, NOTE, NPC_, OMOD, OVIS, PERK, PGRE, PHZD, PMIS, PROJ, RACE, REFR, RELA, REVB, RFCT, SCEN, SCOL, SPGD, TRNS, WATR, WRLD, WTHR
module.exports["NPC_.DATA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, CONT, DOOR, FLOR, FURN, MISC, MSTT, NPC_, PROJ, WEAP
module.exports["NPC_.DEST"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ADDN, AECH, ALCH, AMDL, AMMO, ARMA, ARTO, BNDS, BOOK, BPTD, DLBR, DLVW, DMGT, DOBJ, EFSH, HAZD, IDLE, IMAD, IMGS, INFO, IPCT, KSSM, KYWD, LENS, MATO, MESG, MGEF, MUST, NOTE, NPC_, PROJ, QUST, SCEN, SMBN, SMEN, SMQN, SNDR, STAT, TXST, VTYP, WATR, WEAP, WRLD
module.exports["NPC_.DNAM"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.DOFT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.DPLT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, CONT, DOOR, FLOR, FURN, MISC, MSTT, NPC_, PROJ, WEAP
module.exports["NPC_.DSTD"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, CONT, DOOR, FLOR, FURN, MISC, MSTT, NPC_, PROJ, WEAP
module.exports["NPC_.DSTF"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: NPC_, QUST
module.exports["NPC_.ECOR"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
module.exports["NPC_.EDID"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.FMIN"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: NPC_, RACE
module.exports["NPC_.FMRI"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.FMRS"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.FTST"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, CONT, FURN, NPC_, STAT
module.exports["NPC_.FTYP"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, AVIF, BOOK, CELL, CLAS, CLFM, CMPO, CONT, DIAL, DOOR, ENCH, EXPL, FACT, FLOR, FLST, FURN, HAZD, HDPT, INGR, KEYM, KYWD, LCTN, LIGH, MESG, MGEF, MISC, MSTT, NOTE, NPC_, OMOD, PERK, PROJ, QUST, RACE, REFR, SCOL, SNCT, SPEL, STAT, TACT, TERM, WATR, WEAP, WRLD
module.exports["NPC_.FULL"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.GWOR"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: NPC_, RACE
module.exports["NPC_.HCLF"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: BOOK, BPTD, INFO, MESG, MOVT, NPC_, OTFT, PACK, REFR, SCEN, WATR, WEAP
module.exports["NPC_.INAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, IDLM, INNR, KEYM, LCTN, LIGH, MGEF, MISC, MSTT, NPC_, QUST, RACE, SCEN, TERM, WEAP
module.exports["NPC_.KSIZ"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, IDLM, INNR, KEYM, LCTN, LIGH, MGEF, MISC, MSTT, NPC_, QUST, RACE, SCEN, TERM, WEAP
module.exports["NPC_.KWDA"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.LTPC"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.LTPT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.MRSV"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.MSDK"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.MSDV"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.MWGT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: BPTD, IMAD, INFO, NPC_, RACE, WATR, WRLD, WTHR
module.exports["NPC_.NAM4"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: BPTD, IMAD, NPC_
module.exports["NPC_.NAM5"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: IMAD, NPC_
module.exports["NPC_.NAM6"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: EFSH, NPC_
module.exports["NPC_.NAM8"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, CONT, DOOR, NPC_
module.exports["NPC_.NTRM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ADDN, ALCH, AMMO, ARMO, ARTO, ASPC, BNDS, BOOK, CMPO, CONT, DOOR, ENCH, EXPL, FLOR, FURN, GRAS, HAZD, IDLM, INGR, KEYM, LIGH, LVLI, LVLN, MISC, MSTT, NOTE, NPC_, PKIN, PROJ, SCOL, SOUN, SPEL, STAT, TACT, TERM, TREE, TXST, WEAP
module.exports["NPC_.OBND"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, FURN, NPC_, WEAP
module.exports["NPC_.OBTE"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, NPC_, WEAP
module.exports["NPC_.OBTF"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, FURN, NPC_, WEAP
module.exports["NPC_.OBTS"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.PFRN"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.PKID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, DIAL, EQUP, FLOR, FURN, HDPT, IPDS, LAYR, LCTN, MATT, MUSC, NOTE, NPC_, PACK, RACE, SCEN, SCSN, SMBN, SMEN, SMQN, SNCT, TACT, TERM, WRLD, WTHR
module.exports["NPC_.PNAM"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.PRKR"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.PRKZ"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, CLAS, CONT, FLOR, FURN, LIGH, MSTT, NPC_, RACE, STAT, TERM
module.exports["NPC_.PRPS"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, KEYM, LIGH, MISC, MSTT, NOTE, NPC_, SCOL, STAT, TERM, WEAP
module.exports["NPC_.PTRN"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: CONT, DIAL, DLBR, DLVW, IDLM, MESG, NPC_, PACK, RACE, SCCO, SMQN, WTHR
module.exports["NPC_.QNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: NPC_, REGN
module.exports["NPC_.RCLR"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMA, ARMO, FACT, HDPT, IMAD, INFO, KSSM, LCTN, NPC_, RACE, RFGP, SMQN, TERM, WRLD, WTHR
module.exports["NPC_.RNAM"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.SHRT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ADDN, ASPC, CONT, CPTH, DIAL, DLBR, DOOR, FLOR, FURN, IMAD, INFO, IPCT, LTEX, MESG, MSTT, MSWP, MUST, NOTE, NPC_, PERK, QUST, SCCO, SCEN, SMBN, SMEN, SMQN, SNDR, TERM, WATR, WTHR
module.exports["NPC_.SNAM"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.SOFT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: NPC_, RACE
module.exports["NPC_.SPCT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: NPC_, RACE
module.exports["NPC_.SPLO"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, NPC_, RACE
module.exports["NPC_.STCP"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ARMO, FURN, NPC_, WEAP
module.exports["NPC_.STOP"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.TEND"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: NPC_, RACE
module.exports["NPC_.TETI"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.TPLT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["NPC_.TPTA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, ACTI, ARMO, BOOK, CONT, DOOR, FLOR, FURN, INFO, KEYM, LIGH, MGEF, MISC, MSTT, NOTE, NPC_, PACK, PERK, PGRE, QUST, REFR, SCEN, STAT, TACT, TERM, WEAP
module.exports["NPC_.VMAD"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: NPC_, QUST, RACE
module.exports["NPC_.VTCK"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ASPC, IMAD, INNR, MUSC, NPC_, RACE, REGN, SCEN, TERM, WRLD, WTHR
module.exports["NPC_.WNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ALCH, AMMO, ARMO, BOOK, COBJ, LSCR, MISC, NOTE, NPC_, RACE, WEAP, WRLD
module.exports["NPC_.ZNAM"] = (data) => {
  return generic.print_as_hash(data);
}

