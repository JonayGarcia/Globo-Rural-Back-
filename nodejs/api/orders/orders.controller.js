const OrderModel = require("./orders.model");
const ProductModel = require("../products/products.model");
const HttpCode = require("../../http-codes");

module.exports = {
  createOrder,
};

function isBodyEmpty(body) {
  return body == undefined;
}

async function createOrder(request, response) {
  if (isBodyEmpty(request.body)) {
    return response
      .status(HttpCode.bad_request)
      .send("Contenido del body vacío");
  }
  const newOrder = buildOrder(request);
  const result = await updateStock(newOrder);
  if (result.error) {
    return response.status(HttpCode.conflict).send({
      message: "No se ha podido hacer el pedido por falta de stock.",
      insufficientStock: result.products,
    });
  }
  return OrderModel.create(newOrder)
    .then((order) => {
      return response.status(HttpCode.ok).json(order);
    })
    .catch((e) =>
      response.status(HttpCode.server_error).send(`Error O1 en servidor. ${e}`)
    );
}

async function updateStock(order) {
  return ProductModel.find({
    _id: { $in: order.products.map((p) => p._id) }
  }).select(["stock", "name"])
    .then(async (products) => {
      const insufficientStock = products.filter((product) => {
        const _product = order.products.find((p) => p._id == product._id);
        return product.stock - parseInt(_product.units) < 0;
      });
      if (insufficientStock.length > 0) {
        return { error: true, products: insufficientStock };
      }
      await Promise.all(
        order.products.map((product) => {
          return ProductModel.updateOne(
            { _id: product._id },
            { $inc: { stock: -parseInt(product.units) } }
          );
        })
      );
      return { error: false };
    });
}

function buildOrder(request) {
  const cart = request.body;
  const products = cart.products.map((product) => ({
    _id: product._id,
    name: product.name,
    units: product.units,
    unit_price: product.unit_price,
    image: product.image,
  }));
  return {
    user_id: request.authorization.sub,
    shop_id: cart.products[0].shop_id,
    delivery_address: cart.delivery_address,
    products: products,
    totalPrice: cart.totalPrice,
  };
}
