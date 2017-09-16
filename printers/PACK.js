const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
const generic = require("./generic");

// this field is potentially common among the following records: AVIF, COBJ, CPTH, DOOR, EQUP, FSTP, IDLE, INFO, LCTN, MATT, MUST, NPC_, PACK, QUST, RACE, REGN, REVB, SCEN, SNDR, TERM, WATR
exports["PACK.ANAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ANIO, ASPC, BPTD, COBJ, COLL, DIAL, DLVW, IMAD, MATT, MSWP, MUST, PACK, SNDR
exports["PACK.BNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, IDLE, INFO, PACK, PERK, QUST, SCEN, SMQN, TERM
exports["PACK.CIS1"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, IDLE, INFO, LSCR, MESG, MUST, PACK, QUST, SCEN, SMBN, SMQN, SPEL, TERM
exports["PACK.CIS2"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, FACT, FURN, MUST, PACK, SCEN, SMBN, SMEN, SMQN
exports["PACK.CITC"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, BOOK, BPTD, CLFM, COBJ, COLL, DOOR, IMGS, KYWD, LCRT, LCTN, LENS, MATT, MSWP, MUST, NPC_, PACK, PKIN, QUST, RACE, SCEN, SCSN, SNCT, SNDR, TES4, TREE, WRLD
exports["PACK.CNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ALCH, CAMS, CLFM, COBJ, CPTH, ENCH, FACT, FURN, HDPT, IDLE, INFO, LSCR, MESG, MGEF, MUST, PACK, PERK, QUST, RACE, SCEN, SMBN, SMEN, SMQN, SNDR, SPEL, TERM
exports["PACK.CTDA"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
exports["PACK.EDID"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ARMO, BPTD, CLFM, CLMT, COBJ, COLL, DOOR, FLOR, FURN, GLOB, IPCT, LENS, LIGH, MATT, MSWP, MUSC, MUST, OMOD, PACK, PERK, QUST, RACE, REFR, SCEN, SNCT, SNDR, TACT, TERM, WATR, WEAP, WTHR
exports["PACK.FNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: IDLM, PACK
exports["PACK.IDLA"] = generic.print_as_hash;

// this field is potentially common among the following records: IDLM, PACK
exports["PACK.IDLC"] = generic.print_as_hash;

// this field is potentially common among the following records: IDLM, PACK
exports["PACK.IDLF"] = generic.print_as_hash;

// this field is potentially common among the following records: IDLM, PACK
exports["PACK.IDLT"] = generic.print_as_hash;

// this field is potentially common among the following records: BOOK, BPTD, INFO, MESG, MOVT, NPC_, OTFT, PACK, REFR, SCEN, WATR, WEAP
exports["PACK.INAM"] = generic.print_as_hash;

// this field is potentially common among the following records: PACK, REFR
exports["PACK.PDTO"] = generic.print_as_hash;

exports["PACK.PFO2"] = generic.print_as_hash;

exports["PACK.PKC2"] = generic.print_as_hash;

exports["PACK.PKCU"] = generic.print_as_hash;

exports["PACK.PKDT"] = generic.print_as_hash;

exports["PACK.PLDT"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, DIAL, EQUP, FLOR, FURN, HDPT, IPDS, LAYR, LCTN, MATT, MUSC, NOTE, NPC_, PACK, RACE, SCEN, SCSN, SMBN, SMEN, SMQN, SNCT, TACT, TERM, WRLD, WTHR
exports["PACK.PNAM"] = generic.print_as_hash;

exports["PACK.POBA"] = generic.print_as_hash;

exports["PACK.POCA"] = generic.print_as_hash;

exports["PACK.POEA"] = generic.print_as_hash;

exports["PACK.PRCB"] = generic.print_as_hash;

exports["PACK.PSDT"] = generic.print_as_hash;

exports["PACK.PTDA"] = generic.print_as_hash;

// this field is potentially common among the following records: CONT, DIAL, DLBR, DLVW, IDLM, MESG, NPC_, PACK, RACE, SCCO, SMQN, WTHR
exports["PACK.QNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: IMAD, INNR, PACK, RACE, SNCT, TERM, WTHR
exports["PACK.UNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, ACTI, ARMO, BOOK, CONT, DOOR, FLOR, FURN, INFO, KEYM, LIGH, MGEF, MISC, MSTT, NOTE, NPC_, PACK, PERK, PGRE, QUST, REFR, SCEN, STAT, TACT, TERM, WEAP
exports["PACK.VMAD"] = generic.print_as_hash;

// this field is potentially common among the following records: FACT, IMAD, PACK, QUST, SCCO, SCEN, SMBN, SMEN, SMQN, WATR
exports["PACK.XNAM"] = generic.print_as_hash;

