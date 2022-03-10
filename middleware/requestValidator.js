const isEmail = require("validator/lib/isEmail");

exports.validateCredentials = (req, res, next) => {
  const { username, email, password } = req.body;
  console.log(req.url);

  if (username?.length < 6)
    return res
      .status(400)
      .json({ errMsg: "username must be at least 6 characters long!" });

  if (email.length < 6)
    return res
      .status(400)
      .json({ errMsg: "email must be at least 6 characters long!" });
  if (!isEmail(email))
    return res.status(400).json({ errMsg: "email must be valid!" });

  if (req.url === "/register") {
    if (password.length < 8)
      return res
        .status(400)
        .json({ errMsg: "password must be at least 8 characters long!" });
  }

  next();
};
