const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
const generic = require("./generic");

// this field is potentially common among the following records: AACT, BOOK, BPTD, CLFM, COBJ, COLL, DOOR, IMGS, KYWD, LCRT, LCTN, LENS, MATT, MSWP, MUST, NPC_, PACK, PKIN, QUST, RACE, SCEN, SCSN, SNCT, SNDR, TES4, TREE, WRLD
exports["TES4.CNAM"] = generic.print_as_hash;

exports["TES4.HEDR"] = generic.print_as_hash;

// this field is potentially common among the following records: INFO, TES4
exports["TES4.INCC"] = generic.print_as_hash;

// this field is potentially common among the following records: COBJ, COLL, INFO, NOCM, SNDR, TES4
exports["TES4.INTV"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, BNDS, CLMT, CONT, DLBR, HDPT, IMAD, IMGS, INFO, KSSM, KYWD, LCRT, LSCR, LTEX, MESG, MUSC, REFR, SCEN, STAG, TERM, TES4, WATR, WTHR
exports["TES4.TNAM"] = generic.print_as_hash;

