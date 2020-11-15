const mongoose = require("mongoose");

const CarrierSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  working_postcodes: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("carrier", CarrierSchema);
