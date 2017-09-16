const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
const generic = require("./generic");

exports["QUST.ALCA"] = generic.print_as_hash;

exports["QUST.ALCC"] = generic.print_as_hash;

exports["QUST.ALCL"] = generic.print_as_hash;

exports["QUST.ALCO"] = generic.print_as_hash;

exports["QUST.ALCS"] = generic.print_as_hash;

exports["QUST.ALDN"] = generic.print_as_hash;

exports["QUST.ALEA"] = generic.print_as_hash;

exports["QUST.ALED"] = generic.print_as_hash;

exports["QUST.ALEQ"] = generic.print_as_hash;

// this field is potentially common among the following records: INFO, QUST
exports["QUST.ALFA"] = generic.print_as_hash;

exports["QUST.ALFC"] = generic.print_as_hash;

exports["QUST.ALFD"] = generic.print_as_hash;

exports["QUST.ALFE"] = generic.print_as_hash;

exports["QUST.ALFI"] = generic.print_as_hash;

exports["QUST.ALFL"] = generic.print_as_hash;

exports["QUST.ALFR"] = generic.print_as_hash;

exports["QUST.ALFV"] = generic.print_as_hash;

// this field is potentially common among the following records: QUST, SCEN
exports["QUST.ALID"] = generic.print_as_hash;

exports["QUST.ALLA"] = generic.print_as_hash;

exports["QUST.ALLS"] = generic.print_as_hash;

exports["QUST.ALMI"] = generic.print_as_hash;

exports["QUST.ALNA"] = generic.print_as_hash;

exports["QUST.ALNT"] = generic.print_as_hash;

exports["QUST.ALPC"] = generic.print_as_hash;

exports["QUST.ALRT"] = generic.print_as_hash;

exports["QUST.ALSP"] = generic.print_as_hash;

exports["QUST.ALST"] = generic.print_as_hash;

exports["QUST.ALUA"] = generic.print_as_hash;

// this field is potentially common among the following records: AVIF, COBJ, CPTH, DOOR, EQUP, FSTP, IDLE, INFO, LCTN, MATT, MUST, NPC_, PACK, QUST, RACE, REGN, REVB, SCEN, SNDR, TERM, WATR
exports["QUST.ANAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, IDLE, INFO, PACK, PERK, QUST, SCEN, SMQN, TERM
exports["QUST.CIS1"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, IDLE, INFO, LSCR, MESG, MUST, PACK, QUST, SCEN, SMBN, SMQN, SPEL, TERM
exports["QUST.CIS2"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, BOOK, BPTD, CLFM, COBJ, COLL, DOOR, IMGS, KYWD, LCRT, LCTN, LENS, MATT, MSWP, MUST, NPC_, PACK, PKIN, QUST, RACE, SCEN, SCSN, SNCT, SNDR, TES4, TREE, WRLD
exports["QUST.CNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: CONT, FURN, NPC_, QUST, TERM
exports["QUST.CNTO"] = generic.print_as_hash;

// this field is potentially common among the following records: CONT, FURN, NPC_, QUST, TERM
exports["QUST.COCT"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ALCH, CAMS, CLFM, COBJ, CPTH, ENCH, FACT, FURN, HDPT, IDLE, INFO, LSCR, MESG, MGEF, MUST, PACK, PERK, QUST, RACE, SCEN, SMBN, SMEN, SMQN, SNDR, SPEL, TERM
exports["QUST.CTDA"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, ADDN, AECH, ALCH, AMDL, AMMO, ARMA, ARTO, BNDS, BOOK, BPTD, DLBR, DLVW, DMGT, DOBJ, EFSH, HAZD, IDLE, IMAD, IMGS, INFO, IPCT, KSSM, KYWD, LENS, MATO, MESG, MGEF, MUST, NOTE, NPC_, PROJ, QUST, SCEN, SMBN, SMEN, SMQN, SNDR, STAT, TXST, VTYP, WATR, WEAP, WRLD
exports["QUST.DNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: NPC_, QUST
exports["QUST.ECOR"] = generic.print_as_hash;

// this field is potentially common among the following records: AACT, ACHR, ACTI, ADDN, AECH, ALCH, AMDL, AMMO, ANIO, AORU, ARMA, ARMO, ARTO, ASPC, ASTP, AVIF, BNDS, BOOK, BPTD, CAMS, CELL, CLAS, CLFM, CLMT, CMPO, COBJ, COLL, CONT, CPTH, CSTY, DEBR, DFOB, DIAL, DLBR, DLVW, DMGT, DOOR, ECZN, EFSH, ENCH, EQUP, EXPL, FACT, FLOR, FLST, FSTP, FSTS, FURN, GDRY, GLOB, GMST, GRAS, HAZD, HDPT, IDLE, IDLM, IMAD, IMGS, INFO, INGR, INNR, IPCT, IPDS, KEYM, KSSM, KYWD, LAYR, LCRT, LCTN, LENS, LGTM, LIGH, LSCR, LTEX, LVLI, LVLN, MATO, MATT, MESG, MGEF, MISC, MOVT, MSTT, MSWP, MUSC, MUST, NOTE, NPC_, OMOD, OTFT, PACK, PERK, PHZD, PKIN, PROJ, QUST, RACE, REFR, REGN, RELA, REVB, RFCT, SCCO, SCEN, SCOL, SCSN, SMBN, SMEN, SMQN, SNCT, SNDR, SOPM, SOUN, SPEL, SPGD, STAG, STAT, TACT, TERM, TREE, TRNS, TXST, VTYP, WATR, WEAP, WRLD, WTHR, ZOOM
exports["QUST.EDID"] = generic.print_as_hash;

// this field is potentially common among the following records: BPTD, DLVW, FURN, IDLE, IMGS, INFO, IPCT, KSSM, QUST, SCEN, SMEN, SOPM
exports["QUST.ENAM"] = generic.print_as_hash;

// this field is potentially common among the following records: OMOD, PKIN, QUST, SCOL
exports["QUST.FLTR"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ARMO, BPTD, CLFM, CLMT, COBJ, COLL, DOOR, FLOR, FURN, GLOB, IPCT, LENS, LIGH, MATT, MSWP, MUSC, MUST, OMOD, PACK, PERK, QUST, RACE, REFR, SCEN, SNCT, SNDR, TACT, TERM, WATR, WEAP, WTHR
exports["QUST.FNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, AVIF, BOOK, CELL, CLAS, CLFM, CMPO, CONT, DIAL, DOOR, ENCH, EXPL, FACT, FLOR, FLST, FURN, HAZD, HDPT, INGR, KEYM, KYWD, LCTN, LIGH, MESG, MGEF, MISC, MSTT, NOTE, NPC_, OMOD, PERK, PROJ, QUST, RACE, REFR, SCOL, SNCT, SPEL, STAT, TACT, TERM, WATR, WEAP, WRLD
exports["QUST.FULL"] = generic.print_as_hash;

// this field is potentially common among the following records: CLMT, CMPO, COLL, IDLE, INFO, LTEX, QUST, RACE, SNDR, WATR, WTHR, ZOOM
exports["QUST.GNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ARMO, NOCM, OVIS, QUST, RACE
exports["QUST.INDX"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, IDLM, INNR, KEYM, LCTN, LIGH, MGEF, MISC, MSTT, NPC_, QUST, RACE, SCEN, TERM, WEAP
exports["QUST.KSIZ"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ALCH, AMMO, ARMO, ARTO, BOOK, CONT, DOOR, FLOR, FURN, IDLM, INNR, KEYM, LCTN, LIGH, MGEF, MISC, MSTT, NPC_, QUST, RACE, SCEN, TERM, WEAP
exports["QUST.KWDA"] = generic.print_as_hash;

// this field is potentially common among the following records: ADDN, FLST, LIGH, MOVT, MUST, OMOD, QUST, RACE, REFR, SCEN, SNDR, WEAP, WTHR
exports["QUST.LNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: AMMO, ARMA, COBJ, IMAD, INFO, IPCT, PROJ, QUST, RACE, WATR, WRLD
exports["QUST.NAM2"] = generic.print_as_hash;

// this field is potentially common among the following records: QUST, SCEN
exports["QUST.NEXT"] = generic.print_as_hash;

// this field is potentially common among the following records: KYWD, LSCR, MESG, PERK, QUST, RACE, RFGP, SCEN, SMQN, WEAP, WTHR
exports["QUST.NNAM"] = generic.print_as_hash;

exports["QUST.QOBJ"] = generic.print_as_hash;

exports["QUST.QSDT"] = generic.print_as_hash;

exports["QUST.QSTA"] = generic.print_as_hash;

exports["QUST.QTGL"] = generic.print_as_hash;

// this field is potentially common among the following records: ACTI, ADDN, ASPC, CONT, CPTH, DIAL, DLBR, DOOR, FLOR, FURN, IMAD, INFO, IPCT, LTEX, MESG, MSTT, MSWP, MUST, NOTE, NPC_, PERK, QUST, SCCO, SCEN, SMBN, SMEN, SMQN, SNDR, TERM, WATR, WTHR
exports["QUST.SNAM"] = generic.print_as_hash;

// this field is potentially common among the following records: ACHR, ACTI, ARMO, BOOK, CONT, DOOR, FLOR, FURN, INFO, KEYM, LIGH, MGEF, MISC, MSTT, NOTE, NPC_, PACK, PERK, PGRE, QUST, REFR, SCEN, STAT, TACT, TERM, WEAP
exports["QUST.VMAD"] = generic.print_as_hash;

// this field is potentially common among the following records: NPC_, QUST, RACE
exports["QUST.VTCK"] = generic.print_as_hash;

// this field is potentially common among the following records: FACT, IMAD, PACK, QUST, SCCO, SCEN, SMBN, SMEN, SMQN, WATR
exports["QUST.XNAM"] = generic.print_as_hash;

