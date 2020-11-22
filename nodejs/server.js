const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("./api/users/users.model");
const app = express();
const PUB_KEY = fs.readFileSync(".keys/id_rsa.pub", "utf8");
const PRIV_KEY = fs.readFileSync(".keys/id_rsa", "utf8");
const algorithm = "RS256";


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
        const tokenObject = createToken(user);
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

app.use("/protected", authenticateToken, (req, res, next) => {
  return res.status(200).json({
    success: true,
    msg: "You are successfully authenticated to this route!",
  });
});


function createToken(user) {
  const expiresIn = "1d";
  const payload = {
    sub: user._id,
    iat: Date.now(),
  };
  const signedToken = jwt.sign(payload, PRIV_KEY, {
    algorithm: algorithm,
  });
  return {
    token: "JWT " + signedToken,
    expires: expiresIn,
  };
}

function authenticateToken(request, response, next) {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return response.sendStatus(401);

  jwt.verify(token, PUB_KEY, { algorithm: [algorithm] }, (err, dataStored) => {
    if (err) {
      let message;
      if (err.name === "TokenExpiredError") {
        message = "Your token has expired!";
      } else if (err.name === "JsonWebTokenError") {
        message = "The JWT is malformed!";
      }
      return response.sendStatus(403).send(message);
    }
    request.user = dataStored;
    console.log({ ...dataStored });
    next();
  });
}

app.listen(3000);
