const bcrypt = require("bcrypt");
const HttpCode = require("../../http-codes");
const UserModel = require("./users.model");
const authentication = require("../../service/authentication");

module.exports = {
  register,
  getById,
  login,
};

function isBodyEmpty(body) {
  return body == undefined;
}

async function existUser(email) {
  const count = await UserModel.countDocuments({ email: email });
  return count > 0;
}

async function register(request, response) {
  if (isBodyEmpty(request.body))
    return response
      .status(HttpCode.bad_request)
      .send("Contenido del body vacío");
  const user = request.body;
  if (await existUser(user.email))
    return response
      .status(HttpCode.conflict)
      .send("Ya existe un usuario con ese correo electrónico.");

  return UserModel.create({
    name: user.name,
    email: user.email,
    postcode: user.postcode,
    phone: user.phone,
    password: bcrypt.hashSync(user.password, 10),
  })
    .then((user) => response.status(HttpCode.created).json(getUserObject(user)))
    .catch((e) =>
      response.status(HttpCode.server_error).send(`Error U1 en servidor. ${e}`)
    );
}

function getById(request, response) {
  if (request.authorization.sub != request.params.id) {
    return response.status(HttpCode.forbidden).send("Acceso no autorizado!");
  }
  return UserModel.findById(request.params.id)
    .then((user) => {
      return response.status(HttpCode.ok).json(getUserObject(user));
    })
    .catch((e) =>
      response.status(HttpCode.server_error).send(`Error U2 en servidor. ${e}`)
    );
}

function getUserObject(user) {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    postcode: user.postcode,
    phone: user.phone,
  };
}

function login(request, response) {
  return UserModel.findOne({ email: request.body.email })
    .then((user) => {
      if (!user) {
        return response // en realidad es un error 404, pero no hay que dar pistas de eso
          .status(HttpCode.unauthorized)
          .json("Usuario o contraseña incorrectos.");
      }
      const isValid = bcrypt.compareSync(request.body.password, user.password);
      if (isValid) {
        const tokenObject = authentication.createToken(user);
        return response
          .status(HttpCode.ok)
          .json({ token: tokenObject.token, expiresIn: tokenObject.expires });
      }
      return response
        .status(HttpCode.unauthorized)
        .json("Usuario o contraseña incorrectos.");
    })
    .catch((e) => {
      return response
        .status(HttpCode.server_error)
        .send(`Error U3 en servidor.  ${e}`);
    });
}
