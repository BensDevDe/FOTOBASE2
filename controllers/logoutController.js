

exports.logoutController = async (req, res) => {
    res.clearCookie("auth_token").json({ msg: "logged out successfully!" });
  };