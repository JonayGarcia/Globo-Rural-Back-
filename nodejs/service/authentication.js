const fs = require("fs");
const jwt = require("jsonwebtoken");

const PUB_KEY = fs.readFileSync(`${__dirname}/.keys/id_rsa.pub`, "utf8");
const PRIV_KEY = fs.readFileSync(`${__dirname}/.keys/id_rsa`, "utf8");
const algorithm = "RS256";

module.exports = {
  createToken: (user) => {
    const expiresIn = "1d";
    const payload = {
      sub: user._id,
      iat: Date.now(),
      expiresIn: expiresIn,
    };
    const token = jwt.sign(payload, PRIV_KEY, {
      algorithm: algorithm,
    });
    return {
      token: "JWT " + token,
      expires: expiresIn,
    };
  },
  middleware: (request, response, next) => {
    const authHeader = request.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return response.sendStatus(401);

    jwt.verify(token, PUB_KEY, { algorithm: [algorithm] }, (error, data) => {
      if (error) {
        let message;
        if (error.name === "TokenExpiredError") {
          message = "Your token has expired!";
        } else if (error.name === "JsonWebTokenError") {
          message = "The JWT is malformed!";
        }
        return response.sendStatus(403).send(message);
      }
      request.authorization = data;
      console.log({ ...data });
      next();
    });
  },
};
