const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
const generic = require("./generic");

// this field is potentially common among the following records: ACHR, ADDN, ALCH, AMMO, ARMO, ASTP, BOOK, CAMS, CELL, CLAS, CMPO, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, ECZN, EFSH, EQUP, EXPL, FACT, FSTP, FSTS, GDRY, GMST, GRAS, HDPT, IDLE, INGR, IPCT, KEYM, KYWD, LAND, LGTM, LIGH, MATO, MGEF, MISC, MSTT, NOCM, NOTE, NPC_, OMOD, OVIS, PERK, PGRE, PHZD, PMIS, PROJ, RACE, REFR, RELA, REVB, RFCT, SCEN, SCOL, SPGD, TRNS, WATR, WRLD, WTHR
exports["REFR.DATA"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
exports["REFR.EDID"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ARMO, BPTD, CLFM, CLMT, COBJ, COLL, DOOR, FLOR, FURN, GLOB, IPCT, LENS, LIGH, MATT, MSWP, MUSC, MUST, OMOD, PACK, PERK, QUST, RACE, REFR, SCEN, SNCT, SNDR, TACT, TERM, WATR, WEAP, WTHR
exports["REFR.FNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, AVIF, BOOK, CELL, CLAS, CLFM, CMPO, CONT, DIAL, DOOR, ENCH, EXPL, FACT, FLOR, FLST, FURN, HAZD, HDPT, INGR, KEYM, KYWD, LCTN, LIGH, MESG, MGEF, MISC, MSTT, NOTE, NPC_, OMOD, PERK, PROJ, QUST, RACE, REFR, SCOL, SNCT, SPEL, STAT, TACT, TERM, WATR, WEAP, WRLD
exports["REFR.FULL"] = generic.print_as_hash;

// this field is potentially common among the following records: BOOK, BPTD, INFO, MESG, MOVT, NPC_, OTFT, PACK, REFR, SCEN, WATR, WEAP
exports["REFR.INAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ADDN, FLST, LIGH, MOVT, MUST, OMOD, QUST, RACE, REFR, SCEN, SNDR, WEAP, WTHR
exports["REFR.LNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: CAMS, CMPO, COLL, EXPL, FURN, HAZD, LCTN, LTEX, MATT, MOVT, OMOD, RACE, REFR, SMQN, SNCT, SOPM, SPGD, STAT, TERM, TXST, WRLD, WTHR
exports["REFR.MNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PGRE, PHZD, PMIS, RACE, REFR
exports["REFR.NAME"] = generic.print_as_hash;

// this field is potentially common among the following records: AMMO, ARMA, CONT, DOOR, INFO, LSCR, LVLI, RACE, REFR, SCEN, SCOL, SNCT, SNDR, SOPM, WRLD
exports["REFR.ONAM"] = generic.print_as_hash;

// this field is potentially common among the following records: PACK, REFR
exports["REFR.PDTO"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, BNDS, CLMT, CONT, DLBR, HDPT, IMAD, IMGS, INFO, KSSM, KYWD, LCRT, LSCR, LTEX, MESG, MUSC, REFR, SCEN, STAG, TERM, TES4, WATR, WTHR
exports["REFR.TNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, ACTI, ARMO, BOOK, CONT, DOOR, FLOR, FURN, INFO, KEYM, LIGH, MGEF, MISC, MSTT, NOTE, NPC_, PACK, PERK, PGRE, QUST, REFR, SCEN, STAT, TACT, TERM, WEAP
exports["REFR.VMAD"] = generic.print_as_hash;

exports["REFR.XACT"] = generic.print_as_hash;

exports["REFR.XALP"] = generic.print_as_hash;

exports["REFR.XAMC"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, REFR
exports["REFR.XAPD"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, REFR
exports["REFR.XAPR"] = generic.print_as_hash;

exports["REFR.XASP"] = generic.print_as_hash;

exports["REFR.XATP"] = generic.print_as_hash;

exports["REFR.XATR"] = generic.print_as_hash;

exports["REFR.XBSD"] = generic.print_as_hash;

// this field is potentially common among the following records: FSTS, REFR
exports["REFR.XCNT"] = generic.print_as_hash;

exports["REFR.XCVL"] = generic.print_as_hash;

exports["REFR.XCVR"] = generic.print_as_hash;

exports["REFR.XCZA"] = generic.print_as_hash;

exports["REFR.XCZC"] = generic.print_as_hash;

exports["REFR.XEMI"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PGRE, PHZD, REFR
exports["REFR.XESP"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, CELL, PGRE, REFR
exports["REFR.XEZN"] = generic.print_as_hash;

exports["REFR.XFVC"] = generic.print_as_hash;

exports["REFR.XHLT"] = generic.print_as_hash;

exports["REFR.XHTW"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, REFR
exports["REFR.XIS2"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, REFR
exports["REFR.XLCM"] = generic.print_as_hash;

exports["REFR.XLIB"] = generic.print_as_hash;

exports["REFR.XLIG"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PHZD, REFR
exports["REFR.XLKR"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, REFR
exports["REFR.XLKT"] = generic.print_as_hash;

exports["REFR.XLOC"] = generic.print_as_hash;

exports["REFR.XLRM"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PHZD, REFR
exports["REFR.XLRT"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PGRE, PHZD, REFR
exports["REFR.XLYR"] = generic.print_as_hash;

exports["REFR.XMBO"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, REFR
exports["REFR.XMBR"] = generic.print_as_hash;

// this field is potentially common among the following records: FURN, REFR, TERM
exports["REFR.XMRK"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PGRE, REFR
exports["REFR.XMSP"] = generic.print_as_hash;

exports["REFR.XNDP"] = generic.print_as_hash;

exports["REFR.XOCP"] = generic.print_as_hash;

exports["REFR.XORD"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, CELL, PGRE, REFR
exports["REFR.XOWN"] = generic.print_as_hash;

exports["REFR.XPDD"] = generic.print_as_hash;

exports["REFR.XPLK"] = generic.print_as_hash;

exports["REFR.XPOD"] = generic.print_as_hash;

exports["REFR.XPPA"] = generic.print_as_hash;

exports["REFR.XPRD"] = generic.print_as_hash;

exports["REFR.XPRM"] = generic.print_as_hash;

exports["REFR.XRDO"] = generic.print_as_hash;

exports["REFR.XRDS"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PHZD, REFR
exports["REFR.XRFG"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, REFR
exports["REFR.XRGD"] = generic.print_as_hash;

exports["REFR.XRMR"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, CELL, PHZD, REFR
exports["REFR.XRNK"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, PHZD, REFR
exports["REFR.XSCL"] = generic.print_as_hash;

exports["REFR.XSPC"] = generic.print_as_hash;

exports["REFR.XTEL"] = generic.print_as_hash;

exports["REFR.XTNM"] = generic.print_as_hash;

// this field is potentially common among the following records: ASPC, REFR
exports["REFR.XTRI"] = generic.print_as_hash;

// this field is potentially common among the following records: CELL, REFR
exports["REFR.XWCN"] = generic.print_as_hash;

// this field is potentially common among the following records: CELL, REFR
exports["REFR.XWCU"] = generic.print_as_hash;

exports["REFR.XWPG"] = generic.print_as_hash;

exports["REFR.XWPN"] = generic.print_as_hash;

