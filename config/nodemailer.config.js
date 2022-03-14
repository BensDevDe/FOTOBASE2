const nodemailer = require("nodemailer");
const dotenv = require('dotenv');


dotenv.config();


const transport = nodemailer.createTransport({
    service: "Gmx",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    },
  });


  module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
    console.log("Check");
    transport.sendMail({
      from: user,
      to: email,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
          <h2>Hello ${name}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href=http://localhost:3001/register/confirm/${confirmationCode}> Click here</a>
          </div>`,
    }).catch(err => console.log(err));
  };