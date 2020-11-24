const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  shop_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "shop",
  },
  delivery_address: {
    type: String,
    required: true,
  },
  products: [{
    name: {
      type: String,
      required: true,
    },
    units: {
      type: Number,
      required: true,
    },
    unit_price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  }],
  totalPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("order", OrderSchema);
