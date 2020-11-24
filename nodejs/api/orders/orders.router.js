const controller = require('./orders.controller');
const router = require('express').Router();
const authentication = require("../../service/authentication");

router.post("/", authentication.middleware, controller.createOrder);

module.exports = router;