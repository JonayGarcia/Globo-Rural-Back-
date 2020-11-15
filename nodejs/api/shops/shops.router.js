const controller = require('./shops.controller');
const router = require('express').Router();

router.get("/", controller.getShopsByPostcode);

module.exports = router;