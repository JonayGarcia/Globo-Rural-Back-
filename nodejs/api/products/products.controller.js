const ProductModel = require('./products.model');
const HttpCode = require("../../http-codes");
const escapeStringRegexp = require('escape-string-regexp');


module.exports = {
    getProductsByShop
};


function getProductsByShop(request, response){
    const { shop_id  }   = request.params;
    const { category, name }   = request.query; 
    const filter = {
        ...{ shop_id },
        ...( category && { category } ),
        ...(name && { name: { $regex: escapeStringRegexp(name), $options: 'i' }} ) 

    };
    return ProductModel.find(filter)
    .then(products => {
        return response.status(HttpCode.ok).json(products);
    })
    .catch((e) => response.status(HttpCode.server_error).send(`Error P1 en servidor. ${e}`));
}