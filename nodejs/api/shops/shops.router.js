const controller = require('./shops.controller');
const router = require('express').Router();

router.get("/", controller.getAllShops);
router.get("/:id", controller.getOneShop);

module.exports = router;