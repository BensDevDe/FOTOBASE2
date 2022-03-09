const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();
const app = express();


app.use(cors());

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`)
.then( ()=>{
    console.log(`Database connected :) `.underline.green.bold);
})
.catch(err =>{
    console.log(err);
});

app.listen(3000, () => {
    console.log(`server started on port 4000 :) `.underline.yellow.bold);
});