const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
const generic = require("./generic");

// this field is potentially common among the following records: ACHR, ADDN, ALCH, AMMO, ARMO, ASTP, BOOK, CAMS, CELL, CLAS, CMPO, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, ECZN, EFSH, EQUP, EXPL, FACT, FSTP, FSTS, GDRY, GMST, GRAS, HDPT, IDLE, INGR, IPCT, KEYM, KYWD, LAND, LGTM, LIGH, MATO, MGEF, MISC, MSTT, NOCM, NOTE, NPC_, OMOD, OVIS, PERK, PGRE, PHZD, PMIS, PROJ, RACE, REFR, RELA, REVB, RFCT, SCEN, SCOL, SPGD, TRNS, WATR, WRLD, WTHR
exports["CELL.DATA"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
exports["CELL.EDID"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, AVIF, BOOK, CELL, CLAS, CLFM, CMPO, CONT, DIAL, DOOR, ENCH, EXPL, FACT, FLOR, FLST, FURN, HAZD, HDPT, INGR, KEYM, KYWD, LCTN, LIGH, MESG, MGEF, MISC, MSTT, NOTE, NPC_, OMOD, PERK, PROJ, QUST, RACE, REFR, SCOL, SNCT, SPEL, STAT, TACT, TERM, WATR, WEAP, WRLD
exports["CELL.FULL"] = generic.print_as_hash;

exports["CELL.LTMP"] = generic.print_as_hash;

// this field is potentially common among the following records: CELL, WRLD
exports["CELL.MHDT"] = generic.print_as_hash;

exports["CELL.PCMB"] = generic.print_as_hash;

exports["CELL.RVIS"] = generic.print_as_hash;

exports["CELL.TVDT"] = generic.print_as_hash;

exports["CELL.VISI"] = generic.print_as_hash;

exports["CELL.XCAS"] = generic.print_as_hash;

exports["CELL.XCCM"] = generic.print_as_hash;

exports["CELL.XCIM"] = generic.print_as_hash;

exports["CELL.XCLC"] = generic.print_as_hash;

exports["CELL.XCLL"] = generic.print_as_hash;

exports["CELL.XCLR"] = generic.print_as_hash;

exports["CELL.XCLW"] = generic.print_as_hash;

exports["CELL.XCMO"] = generic.print_as_hash;

exports["CELL.XCRI"] = generic.print_as_hash;

exports["CELL.XCWT"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, CELL, PGRE, REFR
exports["CELL.XEZN"] = generic.print_as_hash;

exports["CELL.XGDR"] = generic.print_as_hash;

exports["CELL.XILL"] = generic.print_as_hash;

exports["CELL.XILW"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, CELL, WRLD
exports["CELL.XLCN"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, CELL, PGRE, REFR
exports["CELL.XOWN"] = generic.print_as_hash;

exports["CELL.XPRI"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, CELL, PHZD, REFR
exports["CELL.XRNK"] = generic.print_as_hash;

// this field is potentially common among the following records: CELL, REFR
exports["CELL.XWCN"] = generic.print_as_hash;

// this field is potentially common among the following records: CELL, REFR
exports["CELL.XWCU"] = generic.print_as_hash;

// this field is potentially common among the following records: CELL, WRLD
exports["CELL.XXXX"] = generic.print_as_hash;

