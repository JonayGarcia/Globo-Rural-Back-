const controller = require('./users.controller');
const router = require('express').Router();

router.post("/", controller.register);
router.get("/:id", controller.getById);

module.exports = router;