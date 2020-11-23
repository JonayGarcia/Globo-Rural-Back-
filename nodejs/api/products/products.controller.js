const ProductModel = require('./products.model');
const HttpCode = require("../../http-codes");

module.exports = {
    getProductsByShop
};


function getProductsByShop(request, response){
    const { shop_id  }   = request.params;
    const { category }   = request.query; 
    const filter = {
        ...{ shop_id },
        ...( category? { category } : null )

    };
    return ProductModel.find(filter)
    .then(products => {
        return response.status(HttpCode.ok).json(products);
    })
    .catch((e) => response.status(HttpCode.server_error).send(`Error P1 en servidor. ${e}`));
}