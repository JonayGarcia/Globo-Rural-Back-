const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  shop_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "shop",
  },
});

module.exports = mongoose.model("product", ProductSchema);
