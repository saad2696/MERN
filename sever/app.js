const express = require('express');
const app = express();
const mongoose = require('mongoose');
require ('dotenv/config');

const postsRoute = require('./routes/post');
app.use('/post',postsRoute);

//connect to db 
mongoose.connect(process.env.DB_CONNECTION,
{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },()=>
console.log('connected to db'));

app.listen(4000,()=>console.log(`listening at 4000`));

//listning my server