const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
  title: { type: String, required: true, minLength: 4 },
  image: { type: String, trim: true },
  added_by: { type: Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  keywords: [String],
  comment: { type: String },
});

exports.ImageModel = model("Image", imageSchema);
