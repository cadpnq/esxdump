const generic = require("./generic");

// this field is potentially common among the following records: ACHR, ADDN, ALCH, AMMO, ARMO, ASTP, BOOK, CAMS, CELL, CLAS, CMPO, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, ECZN, EFSH, EQUP, EXPL, FACT, FSTP, FSTS, GDRY, GMST, GRAS, HDPT, IDLE, INGR, IPCT, KEYM, KYWD, LAND, LGTM, LIGH, MATO, MGEF, MISC, MSTT, NOCM, NOTE, NPC_, OMOD, OVIS, PERK, PGRE, PHZD, PMIS, PROJ, RACE, REFR, RELA, REVB, RFCT, SCEN, SCOL, SPGD, TRNS, WATR, WRLD, WTHR
module.exports["REFR.DATA"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
module.exports["REFR.EDID"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ARMO, BPTD, CLFM, CLMT, COBJ, COLL, DOOR, FLOR, FURN, GLOB, IPCT, LENS, LIGH, MATT, MSWP, MUSC, MUST, OMOD, PACK, PERK, QUST, RACE, REFR, SCEN, SNCT, SNDR, TACT, TERM, WATR, WEAP, WTHR
module.exports["REFR.FNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, AVIF, BOOK, CELL, CLAS, CLFM, CMPO, CONT, DIAL, DOOR, ENCH, EXPL, FACT, FLOR, FLST, FURN, HAZD, HDPT, INGR, KEYM, KYWD, LCTN, LIGH, MESG, MGEF, MISC, MSTT, NOTE, NPC_, OMOD, PERK, PROJ, QUST, RACE, REFR, SCOL, SNCT, SPEL, STAT, TACT, TERM, WATR, WEAP, WRLD
module.exports["REFR.FULL"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: BOOK, BPTD, INFO, MESG, MOVT, NPC_, OTFT, PACK, REFR, SCEN, WATR, WEAP
module.exports["REFR.INAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ADDN, FLST, LIGH, MOVT, MUST, OMOD, QUST, RACE, REFR, SCEN, SNDR, WEAP, WTHR
module.exports["REFR.LNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: CAMS, CMPO, COLL, EXPL, FURN, HAZD, LCTN, LTEX, MATT, MOVT, OMOD, RACE, REFR, SMQN, SNCT, SOPM, SPGD, STAT, TERM, TXST, WRLD, WTHR
module.exports["REFR.MNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, PGRE, PHZD, PMIS, RACE, REFR
module.exports["REFR.NAME"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AMMO, ARMA, CONT, DOOR, INFO, LSCR, LVLI, RACE, REFR, SCEN, SCOL, SNCT, SNDR, SOPM, WRLD
module.exports["REFR.ONAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: PACK, REFR
module.exports["REFR.PDTO"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: AACT, BNDS, CLMT, CONT, DLBR, HDPT, IMAD, IMGS, INFO, KSSM, KYWD, LCRT, LSCR, LTEX, MESG, MUSC, REFR, SCEN, STAG, TERM, TES4, WATR, WTHR
module.exports["REFR.TNAM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, ACTI, ARMO, BOOK, CONT, DOOR, FLOR, FURN, INFO, KEYM, LIGH, MGEF, MISC, MSTT, NOTE, NPC_, PACK, PERK, PGRE, QUST, REFR, SCEN, STAT, TACT, TERM, WEAP
module.exports["REFR.VMAD"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XACT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XALP"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XAMC"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, REFR
module.exports["REFR.XAPD"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, REFR
module.exports["REFR.XAPR"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XASP"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XATP"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XATR"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XBSD"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: FSTS, REFR
module.exports["REFR.XCNT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XCVL"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XCVR"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XCZA"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XCZC"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XEMI"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, PGRE, PHZD, REFR
module.exports["REFR.XESP"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, CELL, PGRE, REFR
module.exports["REFR.XEZN"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XFVC"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XHLT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XHTW"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, REFR
module.exports["REFR.XIS2"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, REFR
module.exports["REFR.XLCM"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XLIB"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XLIG"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, PHZD, REFR
module.exports["REFR.XLKR"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, REFR
module.exports["REFR.XLKT"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XLOC"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XLRM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, PHZD, REFR
module.exports["REFR.XLRT"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, PGRE, PHZD, REFR
module.exports["REFR.XLYR"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XMBO"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, REFR
module.exports["REFR.XMBR"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: FURN, REFR, TERM
module.exports["REFR.XMRK"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, PGRE, REFR
module.exports["REFR.XMSP"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XNDP"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XOCP"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XORD"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, CELL, PGRE, REFR
module.exports["REFR.XOWN"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XPDD"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XPLK"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XPOD"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XPPA"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XPRD"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XPRM"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XRDO"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XRDS"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, PHZD, REFR
module.exports["REFR.XRFG"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, REFR
module.exports["REFR.XRGD"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XRMR"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, CELL, PHZD, REFR
module.exports["REFR.XRNK"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ACHR, PHZD, REFR
module.exports["REFR.XSCL"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XSPC"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XTEL"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XTNM"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: ASPC, REFR
module.exports["REFR.XTRI"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: CELL, REFR
module.exports["REFR.XWCN"] = (data) => {
  return generic.print_as_hash(data);
}

// this field is potentially common among the following records: CELL, REFR
module.exports["REFR.XWCU"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XWPG"] = (data) => {
  return generic.print_as_hash(data);
}

module.exports["REFR.XWPN"] = (data) => {
  return generic.print_as_hash(data);
}

