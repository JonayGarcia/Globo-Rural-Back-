const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.get("/", function (request, response) {
  return response.send("Hello World! " + process.env.MONGO_URL);
});

app.listen(8080);
