const express = require("express");
const router = express.Router();
const { registerController } = require("../controllers/registerController");
const { loginController } = require("../controllers/loginController");
const { logoutController } = require("../controllers/logoutController");

const { validateCredentials } = require("../middleware/requestValidator");
const { uploadFile } = require("../middleware/uploadFile");

router.post("/register",validateCredentials, registerController);
router.post("/login",validateCredentials, loginController);
router.post("/logout", logoutController);

module.exports = router;
