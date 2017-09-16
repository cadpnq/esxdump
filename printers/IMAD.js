const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
const generic = require("./generic");

exports["IMAD. IAD"] = generic.print_as_hash;

exports["IMAD.IAD"] = generic.print_as_hash;

exports["IMAD.IAD"] = generic.print_as_hash;

exports["IMAD.IAD"] = generic.print_as_hash;

exports["IMAD.IAD"] = generic.print_as_hash;

exports["IMAD.IAD"] = generic.print_as_hash;

exports["IMAD.IAD"] = generic.print_as_hash;

exports["IMAD.IAD"] = generic.print_as_hash;

exports["IMAD.IAD"] = generic.print_as_hash;

exports["IMAD.	IAD"] = generic.print_as_hash;

exports["IMAD."] = generic.print_as_hash;

exports["IMAD.IAD"] = generic.print_as_hash;

exports["IMAD.IAD"] = generic.print_as_hash;

exports["IMAD.\nIAD"] = generic.print_as_hash;
exports["IMAD.IAD"] = generic.print_as_hash;

exports["IMAD.IAD"] = generic.print_as_hash;

exports["IMAD.IAD"] = generic.print_as_hash;

exports["IMAD.IAD"] = generic.print_as_hash;

exports["IMAD.IAD"] = generic.print_as_hash;

exports["IMAD.IAD"] = generic.print_as_hash;

exports["IMAD.IAD"] = generic.print_as_hash;

exports["IMAD.@IAD"] = generic.print_as_hash;

exports["IMAD.AIAD"] = generic.print_as_hash;

exports["IMAD.BIAD"] = generic.print_as_hash;

// this field is potentially common among the following records: ANIO, ASPC, BPTD, COBJ, COLL, DIAL, DLVW, IMAD, MATT, MSWP, MUST, PACK, SNDR
exports["IMAD.BNAM"] = generic.print_as_hash;

exports["IMAD.CIAD"] = generic.print_as_hash;

exports["IMAD.DIAD"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, ADDN, AECH, ALCH, AMDL, AMMO, ARMA, ARTO, BNDS, BOOK, BPTD, DLBR, DLVW, DMGT, DOBJ, EFSH, HAZD, IDLE, IMAD, IMGS, INFO, IPCT, KSSM, KYWD, LENS, MATO, MESG, MGEF, MUST, NOTE, NPC_, PROJ, QUST, SCEN, SMBN, SMEN, SMQN, SNDR, STAT, TXST, VTYP, WATR, WEAP, WRLD
exports["IMAD.DNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
exports["IMAD.EDID"] = generic.print_as_hash;

exports["IMAD.EIAD"] = generic.print_as_hash;

exports["IMAD.FIAD"] = generic.print_as_hash;

exports["IMAD.GIAD"] = generic.print_as_hash;

exports["IMAD.HIAD"] = generic.print_as_hash;

exports["IMAD.IIAD"] = generic.print_as_hash;

exports["IMAD.JIAD"] = generic.print_as_hash;

exports["IMAD.KIAD"] = generic.print_as_hash;

exports["IMAD.LIAD"] = generic.print_as_hash;

exports["IMAD.MIAD"] = generic.print_as_hash;

// this field is potentially common among the following records: AMMO, ARMA, AVIF, BPTD, COBJ, FURN, HDPT, IMAD, INFO, IPCT, LCTN, NOCM, OMOD, PROJ, RACE, SOPM, WATR, WTHR
exports["IMAD.NAM1"] = generic.print_as_hash;

// this field is potentially common among the following records: AMMO, ARMA, COBJ, IMAD, INFO, IPCT, PROJ, QUST, RACE, WATR, WRLD
exports["IMAD.NAM2"] = generic.print_as_hash;

// this field is potentially common among the following records: COBJ, IMAD, INFO, RACE, WATR, WRLD
exports["IMAD.NAM3"] = generic.print_as_hash;

// this field is potentially common among the following records: BPTD, IMAD, INFO, NPC_, RACE, WATR, WRLD, WTHR
exports["IMAD.NAM4"] = generic.print_as_hash;

// this field is potentially common among the following records: BPTD, IMAD, NPC_
exports["IMAD.NAM5"] = generic.print_as_hash;

// this field is potentially common among the following records: IMAD, NPC_
exports["IMAD.NAM6"] = generic.print_as_hash;

exports["IMAD.NIAD"] = generic.print_as_hash;

exports["IMAD.OIAD"] = generic.print_as_hash;

exports["IMAD.PIAD"] = generic.print_as_hash;

exports["IMAD.QIAD"] = generic.print_as_hash;

exports["IMAD.RIAD"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, ARMO, FACT, HDPT, IMAD, INFO, KSSM, LCTN, NPC_, RACE, RFGP, SMQN, TERM, WRLD, WTHR
exports["IMAD.RNAM"] = generic.print_as_hash;

exports["IMAD.SIAD"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ADDN, ASPC, CONT, CPTH, DIAL, DLBR, DOOR, FLOR, FURN, IMAD, INFO, IPCT, LTEX, MESG, MSTT, MSWP, MUST, NOTE, NPC_, PERK, QUST, SCCO, SCEN, SMBN, SMEN, SMQN, SNDR, TERM, WATR, WTHR
exports["IMAD.SNAM"] = generic.print_as_hash;

exports["IMAD.TIAD"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, BNDS, CLMT, CONT, DLBR, HDPT, IMAD, IMGS, INFO, KSSM, KYWD, LCRT, LSCR, LTEX, MESG, MUSC, REFR, SCEN, STAG, TERM, TES4, WATR, WTHR
exports["IMAD.TNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: IMAD, INNR, PACK, RACE, SNCT, TERM, WTHR
exports["IMAD.UNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, IMAD, INNR, KSSM, PKIN, PROJ, RACE, SCCO, SCEN, SNCT, SOPM, TACT, WTHR
exports["IMAD.VNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ASPC, IMAD, INNR, MUSC, NPC_, RACE, REGN, SCEN, TERM, WRLD, WTHR
exports["IMAD.WNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: FACT, IMAD, PACK, QUST, SCCO, SCEN, SMBN, SMEN, SMQN, WATR
exports["IMAD.XNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ALCH, AMMO, ARMO, BOOK, COBJ, IMAD, INGR, INNR, MISC, NOTE, WATR, WEAP
exports["IMAD.YNAM"] = generic.print_as_hash;
