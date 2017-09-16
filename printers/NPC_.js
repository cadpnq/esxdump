const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
const generic = require("./generic");

exports["NPC_.ACBS"] = generic.print_as_hash;

exports["NPC_.AIDT"] = generic.print_as_hash;

// this field is potentially common among the following records: AVIF, COBJ, CPTH, DOOR, EQUP, FSTP, IDLE, INFO, LCTN, MATT, MUST, NPC_, PACK, QUST, RACE, REGN, REVB, SCEN, SNDR, TERM, WATR
exports["NPC_.ANAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMO, FURN, NPC_, RACE, WEAP
exports["NPC_.APPR"] = generic.print_as_hash;

exports["NPC_.ATKR"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, BOOK, BPTD, CLFM, COBJ, COLL, DOOR, IMGS, KYWD, LCRT, LCTN, LENS, MATT, MSWP, MUST, NPC_, PACK, PKIN, QUST, RACE, SCEN, SCSN, SNCT, SNDR, TES4, TREE, WRLD
exports["NPC_.CNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: CONT, FURN, NPC_, QUST, TERM
exports["NPC_.CNTO"] = generic.print_as_hash;

// this field is potentially common among the following records: CONT, FURN, NPC_, QUST, TERM
exports["NPC_.COCT"] = generic.print_as_hash;

exports["NPC_.CRIF"] = generic.print_as_hash;

exports["NPC_.CS2D"] = generic.print_as_hash;

exports["NPC_.CS2E"] = generic.print_as_hash;

exports["NPC_.CS2F"] = generic.print_as_hash;

exports["NPC_.CS2H"] = generic.print_as_hash;

exports["NPC_.CS2K"] = generic.print_as_hash;

// this field is potentially common among the following records: CSTY, NPC_
exports["NPC_.CSCR"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, ADDN, ALCH, AMMO, ARMO, ASTP, BOOK, CAMS, CELL, CLAS, CMPO, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, ECZN, EFSH, EQUP, EXPL, FACT, FSTP, FSTS, GDRY, GMST, GRAS, HDPT, IDLE, INGR, IPCT, KEYM, KYWD, LAND, LGTM, LIGH, MATO, MGEF, MISC, MSTT, NOCM, NOTE, NPC_, OMOD, OVIS, PERK, PGRE, PHZD, PMIS, PROJ, RACE, REFR, RELA, REVB, RFCT, SCEN, SCOL, SPGD, TRNS, WATR, WRLD, WTHR
exports["NPC_.DATA"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ALCH, CONT, DOOR, FLOR, FURN, MISC, MSTT, NPC_, PROJ, WEAP
exports["NPC_.DEST"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, ADDN, AECH, ALCH, AMDL, AMMO, ARMA, ARTO, BNDS, BOOK, BPTD, DLBR, DLVW, DMGT, DOBJ, EFSH, HAZD, IDLE, IMAD, IMGS, INFO, IPCT, KSSM, KYWD, LENS, MATO, MESG, MGEF, MUST, NOTE, NPC_, PROJ, QUST, SCEN, SMBN, SMEN, SMQN, SNDR, STAT, TXST, VTYP, WATR, WEAP, WRLD
exports["NPC_.DNAM"] = generic.print_as_hash;

exports["NPC_.DOFT"] = generic.print_as_hash;

exports["NPC_.DPLT"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, CONT, DOOR, FLOR, FURN, MISC, MSTT, NPC_, PROJ, WEAP
exports["NPC_.DSTD"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, CONT, DOOR, FLOR, FURN, MISC, MSTT, NPC_, PROJ, WEAP
exports["NPC_.DSTF"] = generic.print_as_hash;

// this field is potentially common among the following records: NPC_, QUST
exports["NPC_.ECOR"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
exports["NPC_.EDID"] = generic.print_as_hash;

exports["NPC_.FMIN"] = generic.print_as_hash;

// this field is potentially common among the following records: NPC_, RACE
exports["NPC_.FMRI"] = generic.print_as_hash;

exports["NPC_.FMRS"] = generic.print_as_hash;

exports["NPC_.FTST"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, CONT, FURN, NPC_, STAT
exports["NPC_.FTYP"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, AVIF, BOOK, CELL, CLAS, CLFM, CMPO, CONT, DIAL, DOOR, ENCH, EXPL, FACT, FLOR, FLST, FURN, HAZD, HDPT, INGR, KEYM, KYWD, LCTN, LIGH, MESG, MGEF, MISC, MSTT, NOTE, NPC_, OMOD, PERK, PROJ, QUST, RACE, REFR, SCOL, SNCT, SPEL, STAT, TACT, TERM, WATR, WEAP, WRLD
exports["NPC_.FULL"] = generic.print_as_hash;

exports["NPC_.GWOR"] = generic.print_as_hash;

// this field is potentially common among the following records: NPC_, RACE
exports["NPC_.HCLF"] = generic.print_as_hash;

// this field is potentially common among the following records: BOOK, BPTD, INFO, MESG, MOVT, NPC_, OTFT, PACK, REFR, SCEN, WATR, WEAP
exports["NPC_.INAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, IDLM, INNR, KEYM, LCTN, LIGH, MGEF, MISC, MSTT, NPC_, QUST, RACE, SCEN, TERM, WEAP
exports["NPC_.KSIZ"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, IDLM, INNR, KEYM, LCTN, LIGH, MGEF, MISC, MSTT, NPC_, QUST, RACE, SCEN, TERM, WEAP
exports["NPC_.KWDA"] = generic.print_as_hash;

exports["NPC_.LTPC"] = generic.print_as_hash;

exports["NPC_.LTPT"] = generic.print_as_hash;

exports["NPC_.MRSV"] = generic.print_as_hash;

exports["NPC_.MSDK"] = generic.print_as_hash;

exports["NPC_.MSDV"] = generic.print_as_hash;

exports["NPC_.MWGT"] = generic.print_as_hash;

// this field is potentially common among the following records: BPTD, IMAD, INFO, NPC_, RACE, WATR, WRLD, WTHR
exports["NPC_.NAM4"] = generic.print_as_hash;

// this field is potentially common among the following records: BPTD, IMAD, NPC_
exports["NPC_.NAM5"] = generic.print_as_hash;

// this field is potentially common among the following records: IMAD, NPC_
exports["NPC_.NAM6"] = generic.print_as_hash;

// this field is potentially common among the following records: EFSH, NPC_
exports["NPC_.NAM8"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, CONT, DOOR, NPC_
exports["NPC_.NTRM"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ADDN, ALCH, AMMO, ARMO, ARTO, ASPC, BNDS, BOOK, CMPO, CONT, DOOR, ENCH, EXPL, FLOR, FURN, GRAS, HAZD, IDLM, INGR, KEYM, LIGH, LVLI, LVLN, MISC, MSTT, NOTE, NPC_, PKIN, PROJ, SCOL, SOUN, SPEL, STAT, TACT, TERM, TREE, TXST, WEAP
exports["NPC_.OBND"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMO, FURN, NPC_, WEAP
exports["NPC_.OBTE"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMO, NPC_, WEAP
exports["NPC_.OBTF"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMO, FURN, NPC_, WEAP
exports["NPC_.OBTS"] = generic.print_as_hash;

exports["NPC_.PFRN"] = generic.print_as_hash;

exports["NPC_.PKID"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, DIAL, EQUP, FLOR, FURN, HDPT, IPDS, LAYR, LCTN, MATT, MUSC, NOTE, NPC_, PACK, RACE, SCEN, SCSN, SMBN, SMEN, SMQN, SNCT, TACT, TERM, WRLD, WTHR
exports["NPC_.PNAM"] = generic.print_as_hash;

exports["NPC_.PRKR"] = generic.print_as_hash;

exports["NPC_.PRKZ"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, CLAS, CONT, FLOR, FURN, LIGH, MSTT, NPC_, RACE, STAT, TERM
exports["NPC_.PRPS"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, KEYM, LIGH, MISC, MSTT, NOTE, NPC_, SCOL, STAT, TERM, WEAP
exports["NPC_.PTRN"] = generic.print_as_hash;

// this field is potentially common among the following records: CONT, DIAL, DLBR, DLVW, IDLM, MESG, NPC_, PACK, RACE, SCCO, SMQN, WTHR
exports["NPC_.QNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: NPC_, REGN
exports["NPC_.RCLR"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, ARMO, FACT, HDPT, IMAD, INFO, KSSM, LCTN, NPC_, RACE, RFGP, SMQN, TERM, WRLD, WTHR
exports["NPC_.RNAM"] = generic.print_as_hash;

exports["NPC_.SHRT"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ADDN, ASPC, CONT, CPTH, DIAL, DLBR, DOOR, FLOR, FURN, IMAD, INFO, IPCT, LTEX, MESG, MSTT, MSWP, MUST, NOTE, NPC_, PERK, QUST, SCCO, SCEN, SMBN, SMEN, SMQN, SNDR, TERM, WATR, WTHR
exports["NPC_.SNAM"] = generic.print_as_hash;

exports["NPC_.SOFT"] = generic.print_as_hash;

// this field is potentially common among the following records: NPC_, RACE
exports["NPC_.SPCT"] = generic.print_as_hash;

// this field is potentially common among the following records: NPC_, RACE
exports["NPC_.SPLO"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, NPC_, RACE
exports["NPC_.STCP"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMO, FURN, NPC_, WEAP
exports["NPC_.STOP"] = generic.print_as_hash;

exports["NPC_.TEND"] = generic.print_as_hash;

// this field is potentially common among the following records: NPC_, RACE
exports["NPC_.TETI"] = generic.print_as_hash;

exports["NPC_.TPLT"] = generic.print_as_hash;

exports["NPC_.TPTA"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, ACTI, ARMO, BOOK, CONT, DOOR, FLOR, FURN, INFO, KEYM, LIGH, MGEF, MISC, MSTT, NOTE, NPC_, PACK, PERK, PGRE, QUST, REFR, SCEN, STAT, TACT, TERM, WEAP
exports["NPC_.VMAD"] = generic.print_as_hash;

// this field is potentially common among the following records: NPC_, QUST, RACE
exports["NPC_.VTCK"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ASPC, IMAD, INNR, MUSC, NPC_, RACE, REGN, SCEN, TERM, WRLD, WTHR
exports["NPC_.WNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ALCH, AMMO, ARMO, BOOK, COBJ, LSCR, MISC, NOTE, NPC_, RACE, WEAP, WRLD
exports["NPC_.ZNAM"] = generic.print_as_hash;

