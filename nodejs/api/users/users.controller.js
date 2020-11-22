const bcrypt = require("bcrypt");
const HttpCode = require("../../http-codes");
const UserModel = require("./users.model");

module.exports = {
  register,
  getById,
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
    return response.status(HttpCode.bad_request).send("Contenido del body vacío");
  const user = request.body;
  if (await existUser(user.email))
    return response
      .status(409)
      .send("Ya existe un usuario con ese correo electrónico.");

  return UserModel.create({
    name: user.name,
    email: user.email,
    postcode: user.postcode,
    phone: user.phone,
    password: bcrypt.hashSync(user.password, 10),
  })
    .then((user) => response.status(HttpCode.created).json(getUserObject(user)))
    .catch((e) => response.status(HttpCode.server_error).send(`Error U1 en servidor. ${e}`));
}

function getById(request, response) {
  if (request.authorization.sub != request.params.id) {
    return response.status(HttpCode.forbidden).send("Acceso no autorizado!");
  }
  return UserModel.findById(request.params.id)
    .then((user) => {
      return response.status(HttpCode.ok).json(getUserObject(user));
    })
    .catch((e) => response.status(HttpCode.server_error).send(`Error U2 en servidor. ${e}`));
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
