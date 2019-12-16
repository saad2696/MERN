const express = require('express');
const app = express();
const mongoose = require('mongoose');
require ('dotenv/config');
const bodyParser = require("body-parser");
const cors = require('cors');


//middlewares 
app.use(cors());

app.use(bodyParser.json());

const postsRoute = require('./routes/post');
app.use('/post',postsRoute);

//home route
app.get('/',(req,res)=>{
res.send('We are at home for now');
});

//connect to db 
mongoose.connect(process.env.DB_CONNECTION,
{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },()=>
console.log('connected to db'));

//listning my server
app.listen(4000,()=>console.log(`listening at 4000`));

