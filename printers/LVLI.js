const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
const generic = require("./generic");

exports["LVLI.COED"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
exports["LVLI.EDID"] = generic.print_as_hash;

// this field is potentially common among the following records: LVLI, LVLN
exports["LVLI.LLCT"] = generic.print_as_hash;

// this field is potentially common among the following records: LVLI, LVLN
exports["LVLI.LLKC"] = generic.print_as_hash;

// this field is potentially common among the following records: LVLI, LVLN
exports["LVLI.LVLD"] = generic.print_as_hash;

// this field is potentially common among the following records: LVLI, LVLN
exports["LVLI.LVLF"] = generic.print_as_hash;

// this field is potentially common among the following records: LVLI, LVLN
exports["LVLI.LVLG"] = generic.print_as_hash;

// this field is potentially common among the following records: LVLI, LVLN
exports["LVLI.LVLM"] = generic.print_as_hash;

// this field is potentially common among the following records: LVLI, LVLN
exports["LVLI.LVLO"] = generic.print_as_hash;

exports["LVLI.LVSG"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ADDN, ALCH, AMMO, ARMO, ARTO, ASPC, BNDS, BOOK, CMPO, CONT, DOOR, ENCH, EXPL, FLOR, FURN, GRAS, HAZD, IDLM, INGR, KEYM, LIGH, LVLI, LVLN, MISC, MSTT, NOTE, NPC_, PKIN, PROJ, SCOL, SOUN, SPEL, STAT, TACT, TERM, TREE, TXST, WEAP
exports["LVLI.OBND"] = generic.print_as_hash;

// this field is potentially common among the following records: AMMO, ARMA, CONT, DOOR, INFO, LSCR, LVLI, RACE, REFR, SCEN, SCOL, SNCT, SNDR, SOPM, WRLD
exports["LVLI.ONAM"] = generic.print_as_hash;

