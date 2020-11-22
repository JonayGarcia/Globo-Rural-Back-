const bcrypt = require('bcrypt');
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
    return response.status(400).send("Contenido del body vacío");
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
  }).then((user) => {
      return response.status(201).json({
        id: user._id,
        name: user.name,
        email: user.email,
        postcode: user.postcode,
        phone: user.phone
      });
    })
    .catch((e) => response.status(500).send(`Error U1 en servidor. ${e}`));
}

function getById(request, response) {
  return UserModel.findById(request.params.id)
    .then((user) => {
      return response.status(200).json(user);
    })
    .catch((e) => response.status(500).send(`Error U1 en servidor. ${e}`));
}
