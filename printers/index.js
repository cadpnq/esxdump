const Parser = require("binary-parser").Parser;

function make_map(vals) {
  let m = new Map();
  for (var printer in vals) {
    if (vals.hasOwnProperty(printer)) {
      m.set(printer, vals[printer]);
    }
  }
  return m;
}

let printers = {};
Object.assign(printers,
  require("./common"),
  require("./AACT"),
  require("./ACHR"),
  require("./ACTI"),
  require("./ADDN"),
  require("./AECH"),
  require("./ALCH"),
  require("./AMDL"),
  require("./AMMO"),
  require("./ANIO"),
  require("./AORU"),
  require("./ARMA"),
  require("./ARMO"),
  require("./ARTO"),
  require("./ASPC"),
  require("./ASTP"),
  require("./AVIF"),
  require("./BNDS"),
  require("./BOOK"),
  require("./BPTD"),
  require("./CAMS"),
  require("./CELL"),
  require("./CLAS"),
  require("./CLFM"),
  require("./CLMT"),
  require("./CMPO"),
  require("./COBJ"),
  require("./COLL"),
  require("./CONT"),
  require("./CPTH"),
  require("./CSTY"),
  require("./DEBR"),
  require("./DFOB"),
  require("./DIAL"),
  require("./DLBR"),
  require("./DLVW"),
  require("./DMGT"),
  require("./DOBJ"),
  require("./DOOR"),
  require("./ECZN"),
  require("./EFSH"),
  require("./ENCH"),
  require("./EQUP"),
  require("./EXPL"),
  require("./FACT"),
  require("./FLOR"),
  require("./FLST"),
  require("./FSTP"),
  require("./FSTS"),
  require("./FURN"),
  require("./GDRY"),
  require("./GLOB"),
  require("./GMST"),
  require("./GRAS"),
  require("./HAZD"),
  require("./HDPT"),
  require("./IDLE"),
  require("./IDLM"),
  require("./IMAD"),
  require("./IAD"),
  require("./IMGS"),
  require("./INFO"),
  require("./INGR"),
  require("./INNR"),
  require("./IPCT"),
  require("./IPDS"),
  require("./KEYM"),
  require("./KSSM"),
  require("./KYWD"),
  require("./LAND"),
  require("./LAYR"),
  require("./LCRT"),
  require("./LCTN"),
  require("./LENS"),
  require("./LGTM"),
  require("./LIGH"),
  require("./LSCR"),
  require("./LTEX"),
  require("./LVLI"),
  require("./LVLN"),
  require("./MATO"),
  require("./MATT"),
  require("./MESG"),
  require("./MGEF"),
  require("./MISC"),
  require("./MOVT"),
  require("./MSTT"),
  require("./MSWP"),
  require("./MUSC"),
  require("./MUST"),
  require("./NAVI"),
  require("./NOCM"),
  require("./NOTE"),
  require("./NPC_"),
  require("./OMOD"),
  require("./OTFT"),
  require("./OVIS"),
  require("./PACK"),
  require("./PERK"),
  require("./PGRE"),
  require("./PHZD"),
  require("./PKIN"),
  require("./PMIS"),
  require("./PROJ"),
  require("./QUST"),
  require("./RACE"),
  require("./REFR"),
  require("./REGN"),
  require("./RELA"),
  require("./REVB"),
  require("./RFCT"),
  require("./RFGP"),
  require("./SCCO"),
  require("./SCEN"),
  require("./SCOL"),
  require("./SCSN"),
  require("./SMBN"),
  require("./SMEN"),
  require("./SMQN"),
  require("./SNCT"),
  require("./SNDR"),
  require("./SOPM"),
  require("./SOUN"),
  require("./SPEL"),
  require("./SPGD"),
  require("./STAG"),
  require("./STAT"),
  require("./TACT"),
  require("./TERM"),
  require("./TES4"),
  require("./TREE"),
  require("./TRNS"),
  require("./TXST"),
  require("./VTYP"),
  require("./WATR"),
  require("./WEAP"),
  require("./WRLD"),
  require("./WTHR"),
  require("./ZOOM"));

module.exports = make_map(printers);
