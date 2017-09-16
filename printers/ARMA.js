const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
const generic = require("./generic");

// this field is potentially common among the following records: ARMA, ARMO, RACE
exports["ARMA.BOD2"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, RACE
exports["ARMA.BSMB"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, RACE
exports["ARMA.BSMP"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, RACE
exports["ARMA.BSMS"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, ADDN, AECH, ALCH, AMDL, AMMO, ARMA, ARTO, BNDS, BOOK, BPTD, DLBR, DLVW, DMGT, DOBJ, EFSH, HAZD, IDLE, IMAD, IMGS, INFO, IPCT, KSSM, KYWD, LENS, MATO, MESG, MGEF, MUST, NOTE, NPC_, PROJ, QUST, SCEN, SMBN, SMEN, SMQN, SNDR, STAT, TXST, VTYP, WATR, WEAP, WRLD
exports["ARMA.DNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
exports["ARMA.EDID"] = generic.print_as_hash;

exports["ARMA.MO2F"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, ARMO
exports["ARMA.MO2S"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, ARMO
exports["ARMA.MO2T"] = generic.print_as_hash;

exports["ARMA.MO3C"] = generic.print_as_hash;

exports["ARMA.MO3F"] = generic.print_as_hash;

exports["ARMA.MO3S"] = generic.print_as_hash;

exports["ARMA.MO3T"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, ARMO
exports["ARMA.MO4S"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, ARMO, WEAP
exports["ARMA.MO4T"] = generic.print_as_hash;

exports["ARMA.MO5S"] = generic.print_as_hash;

exports["ARMA.MO5T"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, ARMO
exports["ARMA.MOD2"] = generic.print_as_hash;

exports["ARMA.MOD3"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, ARMO, WEAP
exports["ARMA.MOD4"] = generic.print_as_hash;

exports["ARMA.MOD5"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ADDN, ALCH, AMMO, ANIO, ARMA, ARMO, ARTO, BOOK, BPTD, CAMS, CLMT, CONT, DOOR, EFSH, EXPL, FLOR, FURN, GRAS, HAZD, HDPT, IDLM, INGR, IPCT, KEYM, LIGH, LVLN, MATO, MISC, MSTT, NOTE, OMOD, PROJ, RACE, SCOL, STAT, TACT, TERM, TREE, WEAP, WTHR
exports["ARMA.MODL"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, AVIF, FURN, HDPT, INFO, LIGH, RACE, SCEN, TERM, WATR, WRLD, WTHR
exports["ARMA.NAM0"] = generic.print_as_hash;

// this field is potentially common among the following records: AMMO, ARMA, AVIF, BPTD, COBJ, FURN, HDPT, IMAD, INFO, IPCT, LCTN, NOCM, OMOD, PROJ, RACE, SOPM, WATR, WTHR
exports["ARMA.NAM1"] = generic.print_as_hash;

// this field is potentially common among the following records: AMMO, ARMA, COBJ, IMAD, INFO, IPCT, PROJ, QUST, RACE, WATR, WRLD
exports["ARMA.NAM2"] = generic.print_as_hash;

// this field is potentially common among the following records: AMMO, ARMA, CONT, DOOR, INFO, LSCR, LVLI, RACE, REFR, SCEN, SCOL, SNCT, SNDR, SOPM, WRLD
exports["ARMA.ONAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, ARMO, FACT, HDPT, IMAD, INFO, KSSM, LCTN, NPC_, RACE, RFGP, SMQN, TERM, WRLD, WTHR
exports["ARMA.RNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMA, MGEF
exports["ARMA.SNDD"] = generic.print_as_hash;

