const fs = require("fs");
const jwt = require("jsonwebtoken");
const HttpCode = require("../http-codes");

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
    if (token == null)
      return response.status(HttpCode.unauthorized).send("Unauthorized!");

    jwt.verify(token, PUB_KEY, { algorithm: [algorithm] }, (error, data) => {
      if (error) {
        if (error.name === "TokenExpiredError") {
          return response
            .status(HttpCode.unauthorized)
            .send("Your token has expired!");
        } else if (error.name === "JsonWebTokenError") {
          return response
            .status(HttpCode.bad_request)
            .send("The JWT is malformed!");
        }
        return response.status(HttpCode.forbidden).send("Forbidden!");
      }
      request.authorization = data;
      console.log({ ...data });
      next();
    });
  },
};
