const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
const generic = require("./generic");

// this field is potentially common among the following records: ACHR, ADDN, ALCH, AMMO, ARMO, ASTP, BOOK, CAMS, CELL, CLAS, CMPO, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, ECZN, EFSH, EQUP, EXPL, FACT, FSTP, FSTS, GDRY, GMST, GRAS, HDPT, IDLE, INGR, IPCT, KEYM, KYWD, LAND, LGTM, LIGH, MATO, MGEF, MISC, MSTT, NOCM, NOTE, NPC_, OMOD, OVIS, PERK, PGRE, PHZD, PMIS, PROJ, RACE, REFR, RELA, REVB, RFCT, SCEN, SCOL, SPGD, TRNS, WATR, WRLD, WTHR
exports["ACHR.DATA"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
exports["ACHR.EDID"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PGRE, PHZD, PMIS, RACE, REFR
exports["ACHR.NAME"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, ACTI, ARMO, BOOK, CONT, DOOR, FLOR, FURN, INFO, KEYM, LIGH, MGEF, MISC, MSTT, NOTE, NPC_, PACK, PERK, PGRE, QUST, REFR, SCEN, STAT, TACT, TERM, WEAP
exports["ACHR.VMAD"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, REFR
exports["ACHR.XAPD"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, REFR
exports["ACHR.XAPR"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PGRE, PHZD, REFR
exports["ACHR.XESP"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, CELL, PGRE, REFR
exports["ACHR.XEZN"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, REFR
exports["ACHR.XIS2"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, REFR
exports["ACHR.XLCM"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, CELL, WRLD
exports["ACHR.XLCN"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PHZD, REFR
exports["ACHR.XLKR"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, REFR
exports["ACHR.XLKT"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PHZD, REFR
exports["ACHR.XLRT"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PGRE, PHZD, REFR
exports["ACHR.XLYR"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, REFR
exports["ACHR.XMBR"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PGRE, REFR
exports["ACHR.XMSP"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, CELL, PGRE, REFR
exports["ACHR.XOWN"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PHZD, REFR
exports["ACHR.XRFG"] = generic.print_as_hash;

exports["ACHR.XRGB"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, REFR
exports["ACHR.XRGD"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, CELL, PHZD, REFR
exports["ACHR.XRNK"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PHZD, REFR
exports["ACHR.XSCL"] = generic.print_as_hash;

