const mongoose = require("mongoose");
const pictureSchema = new mongoose.Schema({
  title: String,
  image: String,
  added_by : { type : Schema.Types.ObjectId , ref : 'User'},
  keywords : [String]
});
const PictureModel = mongoose.model("Picture", pictureSchema);
module.exports = PictureModel;



