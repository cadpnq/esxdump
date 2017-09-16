const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
const generic = require("./generic");

exports["LAND.ATXT"] = generic.print_as_hash;

// this field is potentially common among the following records: LAND, TERM
exports["LAND.BTXT"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, ADDN, ALCH, AMMO, ARMO, ASTP, BOOK, CAMS, CELL, CLAS, CMPO, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, ECZN, EFSH, EQUP, EXPL, FACT, FSTP, FSTS, GDRY, GMST, GRAS, HDPT, IDLE, INGR, IPCT, KEYM, KYWD, LAND, LGTM, LIGH, MATO, MGEF, MISC, MSTT, NOCM, NOTE, NPC_, OMOD, OVIS, PERK, PGRE, PHZD, PMIS, PROJ, RACE, REFR, RELA, REVB, RFCT, SCEN, SCOL, SPGD, TRNS, WATR, WRLD, WTHR
exports["LAND.DATA"] = generic.print_as_hash;

exports["LAND.MPCD"] = generic.print_as_hash;

exports["LAND.VCLR"] = generic.print_as_hash;

exports["LAND.VHGT"] = generic.print_as_hash;

exports["LAND.VNML"] = generic.print_as_hash;

exports["LAND.VTXT"] = generic.print_as_hash;

