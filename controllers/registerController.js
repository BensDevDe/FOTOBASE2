const bcrypt = require("bcrypt");
const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.registerController = async (req, res) => {
  const {
    firstName,
    lastName,
    street,
    city,
    postcode,
    country,
    birthday,
    email,
    password,
  } = req.body;
  if (!email || !password)
    return res.status(400).json({ msg: "Email and password are required" });
  try {
    //encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //store the new user
    const newUser = {
      name: {
        firstName,
        lastName,
      },
      address: {
        city,
        postcode,
        street,
        country,
      },
      birthday,
      email,
      password: hashedPassword,
    };

    const createdUser = await User.create(newUser);

    const payload = { userId: createdUser._Id, email };
    const token = jwt.sign(payload, "secret");
    res
      .status(201)
      .cookie("token_cookie", token, { httpOnly: true, secure: false })
      .json(newUser);
    res.status(200).json({ msg: " User created", createdUser });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
