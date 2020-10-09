const router = require('express').Router();

const {catchErrors, mongoseErrors} = require("../handlers/errorHandlers");
const userController = require('../controllers/userController');
const webinars = require("../controllers/webinars");

router.post("/login", catchErrors(userController.login));
router.post("/register", catchErrors(userController.register));
router.post("/getwebinars", catchErrors(webinars.getWebinars));

module.exports = router;