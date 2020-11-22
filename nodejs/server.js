const cors = require("cors");
const bcrypt = require("bcrypt");
const express = require("express");
const mongoose = require("mongoose");
const authentication = require("./service/authentication");
const UserModel = require("./api/users/users.model");

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

app.post("/api/login", (request, response) => {
  return UserModel.findOne({ email: request.body.email })
    .then((user) => {
      if (!user) {
        return response.status(401).json("Usuario o contraseña incorrectos.");
      }
      const isValid = bcrypt.compareSync(request.body.password, user.password);
      if (isValid) {
        const tokenObject = authentication.createToken(user);
        return response
          .status(200)
          .json({ token: tokenObject.token, expiresIn: tokenObject.expires });
      }
      return response.status(401).json("Usuario o contraseña incorrectos.");
    })
    .catch((err) => {
      return response.status(500).send("Error L1 en el login.");
    });
});

app.listen(3000);
