const generic = require("./generic");

// this field is potentially common among the following records: IAD, 
module.exports["IAD.undefined"] = (data) => {
  return generic.print_as_hash(data);
}

