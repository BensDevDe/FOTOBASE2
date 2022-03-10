const jwt = require("jsonwebtoken");

exports.loginController = async (req, res) => {
  try {
    const db_user = await UserModel.findOne({ email: req.body.email });
    if (!db_user)
      return res
        .status(404)
        .json({ errMsg: "Account not found, please register" });

    const payload = { userId: db_user._id, email: req.body.email };
    const token = jwt.sign(payload, "secret");
    res
      .status(200)
      .cookie("auth_token", token, { httpOnly: true, secure: false })
      .json(db_user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
