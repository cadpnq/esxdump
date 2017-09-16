const Parser = require("binary-parser").Parser;
const sprintf = require("sprintf-js").sprintf;
const hasha = require("hasha");
const generic = require("./generic");

exports["NAVI.NVER"] = generic.print_as_hash;

exports["NAVI.NVMI"] = generic.print_as_hash;

exports["NAVI.NVPP"] = generic.print_as_hash;

