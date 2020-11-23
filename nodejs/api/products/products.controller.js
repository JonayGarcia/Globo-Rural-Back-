const ProductModel = require('./products.model');

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
        return response.json(products);
    })
    .catch((e) => response.status(500).send(`Error P1 en servidor. ${e}`));
}