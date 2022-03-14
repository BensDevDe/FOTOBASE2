const express = require("express");
const router = express.Router();
const { registerController } = require("../controllers/registerController");
const { loginController } = require("../controllers/loginController");
const { logoutController } = require("../controllers/logoutController");
const {
  uploadController,
 
} = require("../controllers/uploadController");
const {fotoController, sortController} = require("../controllers/fotoController")
// const { verifyUserController } = require("../controllers/verifyUserController");

const { validateCredentials } = require("../middleware/requestValidator");
const { uploadFile } = require("../middleware/uploadFile");
const { validateCookie } = require("../middleware/cookieValidator");

router.post("/register", validateCredentials, registerController);
router.post("/login", loginController);
router.get("/logout", logoutController);

router.post(
  "/upload",
  validateCookie,
  uploadFile.single("avatar"),
  uploadController
);
router.get("/fotos", fotoController);
router.get("/sort", sortController);

// router.get("/register/confirm/:confirmationCode", verifyUserController);

module.exports = router;
