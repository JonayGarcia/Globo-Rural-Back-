const controller = require('./products.controller');
const router = require('express').Router();

router.get("/", controller.getProductsByShop);

module.exports = router;