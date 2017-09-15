const generic = require("./generic");

// this field is potentially common among the following records: AACT, BOOK, BPTD, CLFM, COBJ, COLL, DOOR, IMGS, KYWD, LCRT, LCTN, LENS, MATT, MSWP, MUST, NPC_, PACK, PKIN, QUST, RACE, SCEN, SCSN, SNCT, SNDR, TES4, TREE, WRLD
module.exports["TES4.CNAM"] = generic.print_string;

module.exports["TES4.MAST"] = generic.print_string;

module.exports["TES4.HEDR"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: INFO, TES4
module.exports["TES4.INCC"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: COBJ, COLL, INFO, NOCM, SNDR, TES4
module.exports["TES4.INTV"] = generic.print_uint32;

// this field is potentially common among the following records: AACT, BNDS, CLMT, CONT, DLBR, HDPT, IMAD, IMGS, INFO, KSSM, KYWD, LCRT, LSCR, LTEX, MESG, MUSC, REFR, SCEN, STAG, TERM, TES4, WATR, WTHR
module.exports["TES4.TNAM"] = (data) => {
  return generic.print_as_hash(data);
}
