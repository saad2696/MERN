var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  var courseSchema = new mangoose.Schema({
      name: string,
      author : string, 
      tags : [string],
      date : {type : Date  , default : Date.now},
      isPublished : Boolean
  });

  dbo.collection("customers").insertOne(courseSchema, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});