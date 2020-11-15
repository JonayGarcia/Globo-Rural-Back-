const mongoose = require("mongoose");

const ShopSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("shop", ShopSchema);
