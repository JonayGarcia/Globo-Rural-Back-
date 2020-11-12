const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect("mongodb://mongo_database/globo_rural");

app.listen(8080);
