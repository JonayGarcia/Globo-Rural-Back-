const ShopModel = require('./shops.model');

module.exports = {
    getShopsByPostcode
};


function getShopsByPostcode(request, response){
    const { postcode } = request.query;
    return ShopModel.find({ postcode })
    .then(shops => {
        return response.json(shops);
    });
}