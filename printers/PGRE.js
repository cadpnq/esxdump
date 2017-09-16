const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
const generic = require("./generic");

// this field is potentially common among the following records: ACHR, ADDN, ALCH, AMMO, ARMO, ASTP, BOOK, CAMS, CELL, CLAS, CMPO, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, ECZN, EFSH, EQUP, EXPL, FACT, FSTP, FSTS, GDRY, GMST, GRAS, HDPT, IDLE, INGR, IPCT, KEYM, KYWD, LAND, LGTM, LIGH, MATO, MGEF, MISC, MSTT, NOCM, NOTE, NPC_, OMOD, OVIS, PERK, PGRE, PHZD, PMIS, PROJ, RACE, REFR, RELA, REVB, RFCT, SCEN, SCOL, SPGD, TRNS, WATR, WRLD, WTHR
exports["PGRE.DATA"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PGRE, PHZD, PMIS, RACE, REFR
exports["PGRE.NAME"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, ACTI, ARMO, BOOK, CONT, DOOR, FLOR, FURN, INFO, KEYM, LIGH, MGEF, MISC, MSTT, NOTE, NPC_, PACK, PERK, PGRE, QUST, REFR, SCEN, STAT, TACT, TERM, WEAP
exports["PGRE.VMAD"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PGRE, PHZD, REFR
exports["PGRE.XESP"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, CELL, PGRE, REFR
exports["PGRE.XEZN"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PGRE, PHZD, REFR
exports["PGRE.XLYR"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PGRE, REFR
exports["PGRE.XMSP"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, CELL, PGRE, REFR
exports["PGRE.XOWN"] = generic.print_as_hash;

