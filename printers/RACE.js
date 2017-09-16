const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
const generic = require("./generic");

exports["RACE.AHCF"] = generic.print_as_hash;

exports["RACE.AHCM"] = generic.print_as_hash;

// this field is potentially common among the following records: AVIF, COBJ, CPTH, DOOR, EQUP, FSTP, IDLE, INFO, LCTN, MATT, MUST, NPC_, PACK, QUST, RACE, REGN, REVB, SCEN, SNDR, TERM, WATR
exports["RACE.ANAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMO, FURN, NPC_, RACE, WEAP
exports["RACE.APPR"] = generic.print_as_hash;

exports["RACE.ATKD"] = generic.print_as_hash;

exports["RACE.ATKE"] = generic.print_as_hash;

exports["RACE.ATKS"] = generic.print_as_hash;

exports["RACE.ATKT"] = generic.print_as_hash;

exports["RACE.ATKW"] = generic.print_as_hash;

exports["RACE.BMMP"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, ARMO, RACE
exports["RACE.BOD2"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, RACE
exports["RACE.BSMB"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, RACE
exports["RACE.BSMP"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, RACE
exports["RACE.BSMS"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, BOOK, BPTD, CLFM, COBJ, COLL, DOOR, IMGS, KYWD, LCRT, LCTN, LENS, MATT, MSWP, MUST, NPC_, PACK, PKIN, QUST, RACE, SCEN, SCSN, SNCT, SNDR, TES4, TREE, WRLD
exports["RACE.CNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ALCH, CAMS, CLFM, COBJ, CPTH, ENCH, FACT, FURN, HDPT, IDLE, INFO, LSCR, MESG, MGEF, MUST, PACK, PERK, QUST, RACE, SCEN, SMBN, SMEN, SMQN, SNDR, SPEL, TERM
exports["RACE.CTDA"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, ADDN, ALCH, AMMO, ARMO, ASTP, BOOK, CAMS, CELL, CLAS, CMPO, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, ECZN, EFSH, EQUP, EXPL, FACT, FSTP, FSTS, GDRY, GMST, GRAS, HDPT, IDLE, INGR, IPCT, KEYM, KYWD, LAND, LGTM, LIGH, MATO, MGEF, MISC, MSTT, NOCM, NOTE, NPC_, OMOD, OVIS, PERK, PGRE, PHZD, PMIS, PROJ, RACE, REFR, RELA, REVB, RFCT, SCEN, SCOL, SPGD, TRNS, WATR, WRLD, WTHR
exports["RACE.DATA"] = generic.print_as_hash;

// this field is potentially common among the following records: ALCH, AMMO, ARMO, AVIF, BOOK, CLAS, COBJ, COLL, LSCR, MESG, OMOD, PERK, RACE, SPEL, WEAP
exports["RACE.DESC"] = generic.print_as_hash;

exports["RACE.DFTF"] = generic.print_as_hash;

exports["RACE.DFTM"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
exports["RACE.EDID"] = generic.print_as_hash;

exports["RACE.FLMV"] = generic.print_as_hash;

// this field is potentially common among the following records: NPC_, RACE
exports["RACE.FMRI"] = generic.print_as_hash;

exports["RACE.FMRN"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ARMO, BPTD, CLFM, CLMT, COBJ, COLL, DOOR, FLOR, FURN, GLOB, IPCT, LENS, LIGH, MATT, MSWP, MUSC, MUST, OMOD, PACK, PERK, QUST, RACE, REFR, SCEN, SNCT, SNDR, TACT, TERM, WATR, WEAP, WTHR
exports["RACE.FNAM"] = generic.print_as_hash;

exports["RACE.FTSF"] = generic.print_as_hash;

exports["RACE.FTSM"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, AVIF, BOOK, CELL, CLAS, CLFM, CMPO, CONT, DIAL, DOOR, ENCH, EXPL, FACT, FLOR, FLST, FURN, HAZD, HDPT, INGR, KEYM, KYWD, LCTN, LIGH, MESG, MGEF, MISC, MSTT, NOTE, NPC_, OMOD, PERK, PROJ, QUST, RACE, REFR, SCOL, SNCT, SPEL, STAT, TACT, TERM, WATR, WEAP, WRLD
exports["RACE.FULL"] = generic.print_as_hash;

// this field is potentially common among the following records: CLMT, CMPO, COLL, IDLE, INFO, LTEX, QUST, RACE, SNDR, WATR, WTHR, ZOOM
exports["RACE.GNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: NPC_, RACE
exports["RACE.HCLF"] = generic.print_as_hash;

exports["RACE.HEAD"] = generic.print_as_hash;

// this field is potentially common among the following records: HDPT, IMGS, LTEX, MATT, RACE, SCEN, SMQN
exports["RACE.HNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMO, NOCM, OVIS, QUST, RACE
exports["RACE.INDX"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, IDLM, INNR, KEYM, LCTN, LIGH, MGEF, MISC, MSTT, NPC_, QUST, RACE, SCEN, TERM, WEAP
exports["RACE.KSIZ"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, IDLM, INNR, KEYM, LCTN, LIGH, MGEF, MISC, MSTT, NPC_, QUST, RACE, SCEN, TERM, WEAP
exports["RACE.KWDA"] = generic.print_as_hash;

// this field is potentially common among the following records: ADDN, FLST, LIGH, MOVT, MUST, OMOD, QUST, RACE, REFR, SCEN, SNDR, WEAP, WTHR
exports["RACE.LNAM"] = generic.print_as_hash;

exports["RACE.MLSI"] = generic.print_as_hash;

// this field is potentially common among the following records: CAMS, CMPO, COLL, EXPL, FURN, HAZD, LCTN, LTEX, MATT, MOVT, OMOD, RACE, REFR, SMQN, SNCT, SOPM, SPGD, STAT, TERM, TXST, WRLD, WTHR
exports["RACE.MNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ADDN, ALCH, AMMO, ANIO, ARMA, ARMO, ARTO, BOOK, BPTD, CAMS, CLMT, CONT, DOOR, EFSH, EXPL, FLOR, FURN, GRAS, HAZD, HDPT, IDLM, INGR, IPCT, KEYM, LIGH, LVLN, MATO, MISC, MSTT, NOTE, OMOD, PROJ, RACE, SCOL, STAT, TACT, TERM, TREE, WEAP, WTHR
exports["RACE.MODL"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ADDN, ALCH, AMMO, ANIO, ARTO, BOOK, BPTD, CAMS, CLMT, CONT, DEBR, DOOR, EFSH, EXPL, FLOR, FURN, GRAS, HAZD, HDPT, IDLM, INGR, IPCT, KEYM, LIGH, LVLN, MATT, MISC, MSTT, NOTE, OMOD, PROJ, RACE, SCOL, STAT, TACT, TERM, TREE, WEAP, WTHR
exports["RACE.MODT"] = generic.print_as_hash;

exports["RACE.MPGN"] = generic.print_as_hash;

exports["RACE.MPGS"] = generic.print_as_hash;

exports["RACE.MPPC"] = generic.print_as_hash;

exports["RACE.MPPF"] = generic.print_as_hash;

exports["RACE.MPPI"] = generic.print_as_hash;

exports["RACE.MPPK"] = generic.print_as_hash;

exports["RACE.MPPM"] = generic.print_as_hash;

exports["RACE.MPPN"] = generic.print_as_hash;

exports["RACE.MPPT"] = generic.print_as_hash;

exports["RACE.MSID"] = generic.print_as_hash;

exports["RACE.MSM0"] = generic.print_as_hash;

exports["RACE.MSM1"] = generic.print_as_hash;

exports["RACE.MTNM"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, AVIF, FURN, HDPT, INFO, LIGH, RACE, SCEN, TERM, WATR, WRLD, WTHR
exports["RACE.NAM0"] = generic.print_as_hash;

// this field is potentially common among the following records: AMMO, ARMA, AVIF, BPTD, COBJ, FURN, HDPT, IMAD, INFO, IPCT, LCTN, NOCM, OMOD, PROJ, RACE, SOPM, WATR, WTHR
exports["RACE.NAM1"] = generic.print_as_hash;

// this field is potentially common among the following records: AMMO, ARMA, COBJ, IMAD, INFO, IPCT, PROJ, QUST, RACE, WATR, WRLD
exports["RACE.NAM2"] = generic.print_as_hash;

// this field is potentially common among the following records: COBJ, IMAD, INFO, RACE, WATR, WRLD
exports["RACE.NAM3"] = generic.print_as_hash;

// this field is potentially common among the following records: BPTD, IMAD, INFO, NPC_, RACE, WATR, WRLD, WTHR
exports["RACE.NAM4"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PGRE, PHZD, PMIS, RACE, REFR
exports["RACE.NAME"] = generic.print_as_hash;

// this field is potentially common among the following records: KYWD, LSCR, MESG, PERK, QUST, RACE, RFGP, SCEN, SMQN, WEAP, WTHR
exports["RACE.NNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: RACE, SCEN
exports["RACE.NTOP"] = generic.print_as_hash;

// this field is potentially common among the following records: AMMO, ARMA, CONT, DOOR, INFO, LSCR, LVLI, RACE, REFR, SCEN, SCOL, SNCT, SNDR, SOPM, WRLD
exports["RACE.ONAM"] = generic.print_as_hash;

exports["RACE.PHTN"] = generic.print_as_hash;

exports["RACE.PHWT"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, DIAL, EQUP, FLOR, FURN, HDPT, IPDS, LAYR, LCTN, MATT, MUSC, NOTE, NPC_, PACK, RACE, SCEN, SCSN, SMBN, SMEN, SMQN, SNCT, TACT, TERM, WRLD, WTHR
exports["RACE.PNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, CLAS, CONT, FLOR, FURN, LIGH, MSTT, NPC_, RACE, STAT, TERM
exports["RACE.PRPS"] = generic.print_as_hash;

// this field is potentially common among the following records: RACE, SCEN
exports["RACE.PTOP"] = generic.print_as_hash;

// this field is potentially common among the following records: CONT, DIAL, DLBR, DLVW, IDLM, MESG, NPC_, PACK, RACE, SCCO, SMQN, WTHR
exports["RACE.QNAM"] = generic.print_as_hash;

exports["RACE.QSTI"] = generic.print_as_hash;

exports["RACE.RBPC"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, ARMO, FACT, HDPT, IMAD, INFO, KSSM, LCTN, NPC_, RACE, RFGP, SMQN, TERM, WRLD, WTHR
exports["RACE.RNAM"] = generic.print_as_hash;

exports["RACE.RPRF"] = generic.print_as_hash;

exports["RACE.RPRM"] = generic.print_as_hash;

exports["RACE.SAKD"] = generic.print_as_hash;

exports["RACE.SAPT"] = generic.print_as_hash;

exports["RACE.SGNM"] = generic.print_as_hash;

// this field is potentially common among the following records: NPC_, RACE
exports["RACE.SPCT"] = generic.print_as_hash;

// this field is potentially common among the following records: NPC_, RACE
exports["RACE.SPLO"] = generic.print_as_hash;

exports["RACE.SRAC"] = generic.print_as_hash;

// this field is potentially common among the following records: INFO, RACE
exports["RACE.SRAF"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, NPC_, RACE
exports["RACE.STCP"] = generic.print_as_hash;

exports["RACE.STKD"] = generic.print_as_hash;

exports["RACE.SWMV"] = generic.print_as_hash;

// this field is potentially common among the following records: NPC_, RACE
exports["RACE.TETI"] = generic.print_as_hash;

exports["RACE.TINL"] = generic.print_as_hash;

exports["RACE.TTEB"] = generic.print_as_hash;

exports["RACE.TTEC"] = generic.print_as_hash;

exports["RACE.TTED"] = generic.print_as_hash;

exports["RACE.TTEF"] = generic.print_as_hash;

exports["RACE.TTET"] = generic.print_as_hash;

exports["RACE.TTGE"] = generic.print_as_hash;

exports["RACE.TTGP"] = generic.print_as_hash;

// this field is potentially common among the following records: IMAD, INNR, PACK, RACE, SNCT, TERM, WTHR
exports["RACE.UNAM"] = generic.print_as_hash;

exports["RACE.UNWP"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, IMAD, INNR, KSSM, PKIN, PROJ, RACE, SCCO, SCEN, SNCT, SOPM, TACT, WTHR
exports["RACE.VNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: NPC_, QUST, RACE
exports["RACE.VTCK"] = generic.print_as_hash;

exports["RACE.WKMV"] = generic.print_as_hash;

exports["RACE.WMAP"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ASPC, IMAD, INNR, MUSC, NPC_, RACE, REGN, SCEN, TERM, WRLD, WTHR
exports["RACE.WNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ALCH, AMMO, ARMO, BOOK, COBJ, LSCR, MISC, NOTE, NPC_, RACE, WEAP, WRLD
exports["RACE.ZNAM"] = generic.print_as_hash;

