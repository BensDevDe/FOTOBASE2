const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const getToken = require("../helpers/jwtIssuer")

exports.loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const db_user = await UserModel.findOne({ email });
    if (!db_user) {
      return res
        .status(404)
        .json({ errMsg: "Account not found, please register" });
    }
    // if (user.status != "Active") {
    //   return res.status(401).send({
    //     message: "Pending Account. Please Verify Your Email!",
    //   });
    // }
    console.log(UserModel);
    const validUser = await UserModel.comparePass(password, db_user.password);
    if (!validUser) {
      return res.status(500).json({ msg: "password incorrect" });
    }

    const token = await getToken(db_user);
    console.log(token)
    
    return res
      .status(200)
      .cookie("auth_token", token, { httpOnly: true, secure: false })
      .json({ msg: " user logged in successfully", db_user });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
