const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  auth: { authSource: "admin" },
  user: process.env.MONGO_INITDB_ROOT_USERNAME,
  pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
});

app.use("/api/user", require("./api/users/users.router"));
app.use("/api/shops", require("./api/shops/shops.router"));
app.use("/api/products", require("./api/products/products.router"));

app.listen(3000);
