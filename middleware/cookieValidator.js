const jwt = require("jsonwebtoken");
// var cookieParser = require('cookie-parser')

// app.use(cookieParser())

exports.validateCookie = (req, res, next) => {
  
  const token = req.cookies.auth_token;
  if (!token) {
    return res
    .status(403)
    .json({ errMsg: "you are a not valid user, please login!" });
  }
  console.log(req.cookies.auth_token);
  
  // we could pass this payload to check if the user who sent the cookie is the same user that is authenticated
  const decodedUser = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  req.user = decodedUser;

  next();
};