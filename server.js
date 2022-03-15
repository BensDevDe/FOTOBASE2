const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
    // origin: "http://localhost:3000",
    origin: true,
  })
);
app.use(cookieParser());
app.use(express.json());
// 


mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,  { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log(`Database connected`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/user", require("./routes/User"));

app.use(express.static(path.join(__dirname, "client/build")));
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname + "/client/build/index.html"))
})

app.listen(process.env.PORT || 3001 , () => console.log(`server Up on ${process.env.PORT || 3001 }`));
