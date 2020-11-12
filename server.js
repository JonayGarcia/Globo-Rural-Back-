const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect("mongodb://mongo_database/globo_rural", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.get("/", function (request, response) {
    return response.send("Hello World!");
  });

app.listen(8080);
