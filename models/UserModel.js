const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');
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
    country: {
      type: String,
      required: true,
    },
  },
  birthday: { type: Date },
  email: { type: String, lowercase: true },
  image: { type: String },
  password: requiredString,
  // status: {
  //   type: String, 
  //   enum: ['Pending', 'Active'],
  //   default: 'Pending'
  // },
  // confirmationCode: { 
  //   type: String, 
  //   unique: true },
});
const UserModel = model("User", userSchema);

UserModel.comparePass = async function(givenPassword, userPassword){
  const validPassword = await bcrypt.compare(givenPassword, userPassword);
  return validPassword;

}

module.exports = UserModel;
