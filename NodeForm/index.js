var express = require('express');
var app = express();
const path = require('path');
const router = express.Router;
var bodyparser = require('body-parser');
var urlencodedParser = bodyparser.urlencoded({extended : false});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

app.set('view engine','ejs');

app.use(express.json());

var Humans = [
{
FirstName : 'ali' , LastName : 'khan'
},
{
FirstName : 'usama' , LastName : 'butt'
},
{
FirstName : 'nimra' , LastName : 'khan'
}
];

app.get('/home' , (req,res)=>{
res.sendFile(path.join(__dirname+'/home.html'))
});

app.post('/show', urlencodedParser ,(req,res)=>{
console.log("kia masla"+req.body.firstname)
var human = {
FirstName : req.body.firstname,
LastName : req.body.lastname
};

MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("mydb");

dbo.collection("customers").insertOne(human, function(err, res) {
if (err) throw err;
console.log("1 document inserted");
db.close();
});
});
//res.send(human);
// Humans.push(human);
res.render('OutPut', {data : {dt : human}})
});

app.listen(9090,()=>{console.log("listning at 8080")});