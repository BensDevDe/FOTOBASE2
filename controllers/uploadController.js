const { ImageModel } = require("../models/ImageModel");
const { validateCookie } = require("../middleware/cookieValidator");

exports.uploadController = async (req, res) => {
  console.log(req.body);
  console.log(req.user);
  console.log(req.file.filename);
  const imagePath = "/uploads/" + req.file.filename;

  const img = await ImageModel.create({
    title: req.body.title,
    image: imagePath,
    added_by: req.user.userId,
  });

  return res
    .status(200)
    .json({ msg: "your image upload was successfull", image });
};
