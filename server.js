const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();
const app = express();


app.use(cors({origin: true, credentials: true}));
app.use(express.json())

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`)
.then( ()=>{

    console.log(`Database connected :)`);

})
.catch(err =>{
    console.log(err);
});


app.use("/user", require("./routes/User"))

app.listen(3001, () => {
    console.log(`server started on port 3001 :) `);
});