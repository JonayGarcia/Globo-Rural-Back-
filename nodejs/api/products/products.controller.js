const ProductModel = require('./products.model');

module.exports = {
    getProductsByShop
};


function getProductsByShop(request, response){
    const { shop_id } = request.query;
    return ProductModel.find({ shop_id })
    .then(products => {
        return response.json(products);
    })
    .catch(info => response.status(500).send(info));
}