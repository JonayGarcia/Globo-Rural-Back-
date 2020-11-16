const controller = require('./products.controller');
const router = require('express').Router();

router.get("/shop/:shop_id", controller.getProductsByShop);

module.exports = router;