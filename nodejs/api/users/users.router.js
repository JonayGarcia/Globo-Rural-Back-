const controller = require('./users.controller');
const router = require('express').Router();

router.post("/", controller.register);

module.exports = router;