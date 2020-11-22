const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
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

const PUB_KEY = fs.readFileSync(
  path.join(__dirname, ".keys", "id_rsa.pub"),
  "utf8"
);
const PRIV_KEY = fs.readFileSync(
  path.join(__dirname, ".keys", "id_rsa"),
  "utf8"
);
const ALGORITHM = "RS256";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: [ALGORITHM],
};

passport.use(
  new JwtStrategy(options, (jwt_payload, done) => {
    UserModel.findOne({ _id: jwt_payload.sub }, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

app.use(passport.initialize());
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


function createToken(user) {
  const expiresIn = "1d";
  const payload = {
    sub: user._id,
    iat: Date.now(),
  };
  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn: expiresIn,
    algorithm: ALGORITHM,
  });
  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
}

app.listen(3000);
