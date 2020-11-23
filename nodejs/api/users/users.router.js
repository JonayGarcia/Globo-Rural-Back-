const controller = require("./users.controller");
const router = require("express").Router();
const authentication = require("../../service/authentication");

router.post("/", controller.register);
router.post("/login", controller.login);
router.get("/:id", authentication.middleware, controller.getById);

module.exports = router;
