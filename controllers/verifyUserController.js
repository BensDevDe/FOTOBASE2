const User = require("../models/UserModel");

exports.verifyUser = async (req, res) => {
  try {
    const verifyUser = await User.findOne({
      confirmationCode: req.params.confirmationCode,
    });

    if (!verifyUser) {
      return res.status(404).send({ message: "User Not found." });
    }
    verifyUser.status = "Active";

    verifyUser.save((err) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
    });
  } catch (err) {
    return res.status(500).json({ msg: "we have an error", error });
  }
};
