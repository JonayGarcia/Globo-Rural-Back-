const ShopModel = require("./shops.model");
const CarrierModel = require("../carriers/carriers.model");
const HttpCode = require("../http-codes");

module.exports = {
  getAllShops,
  getOneShop,
};

function getOneShop(request, response) {
  const _id = request.params.id;
  return ShopModel.findOne({ _id })
    .then((shop) => {
      return response.status(HttpCode.ok).json(shop);
    })
    .catch((e) => response.status(HttpCode.server_error).send(`Error S1 en servidor. ${e}`));
}

function getAllShops(request, response) {
  if (request.query.postcode) return getShopsByPostcode(request, response);
  return ShopModel.find()
    .then((shops) => {
      return response.status(HttpCode.ok).json(shops);
    })
    .catch((e) => response.status(HttpCode.server_error).send(`Error S1 en servidor. ${e}`));
}

function getShopsByPostcode(request, response) {
  const { postcode } = request.query;
  return ShopModel.find({ postcode })
    .then((shops) => {
      return CarrierModel.count({ working_postcodes: postcode }).then(
        (count) => {
          if (count > 0) return response.json(shops);
          return response
            .status(HttpCode.not_found)
            .send("No hay repartidores en ese código postal.");
        }
      );
    })
    .catch((e) => response.status(HttpCode.server_error).send(`Error S2 en servidor. ${e}`));
}
