const ProductModel = require('./products.model');
const HttpCode = require("../http-codes");

module.exports = {
    getProductsByShop
};


function getProductsByShop(request, response){
    const { shop_id } = request.params;
    return ProductModel.find({ shop_id })
    .then(products => {
        return response.status(HttpCode.ok).json(products);
    })
    .catch((e) => response.status(HttpCode.server_error).send(`Error P1 en servidor. ${e}`));
}