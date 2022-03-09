const { Schema, model } = require("mongoose");
const requiredString = { type: String, required: true };

const userSchema = new Schema({
  name: {
    firstName: requiredString,
    lastName: requiredString,
  },
  address: {
    street: requiredString,
    city: requiredString,
    postcode: requiredString,
    country: requiredString,
  },
  birthday: { type: Date },
  email: requiredString,
  password: requiredString,
});
const UserModel = model("User", userSchema);

module.exports = UserModel;
