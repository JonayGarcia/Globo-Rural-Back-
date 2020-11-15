const ProductModel = require('./products.model');

module.exports = {
    getProductsByShop
};


function getProductsByShop(request, response){
    const { shop_id } = request.params;
    return ProductModel.find({ shop_id })
    .then(products => {
        return response.json(products);
    })
    .catch((e) => response.status(500).send(`Error P1 en servidor. ${e}`));
}