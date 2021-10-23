const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5000;

// database connection 
const uri = "mongodb+srv://shuvro-75:Shuvro7523@cluster0.oh18i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("hitting the database ......");
  // perform actions on the collection object
  client.close();
});


app.get('/', (req, res) => {
    res.send("Running My CRUD server........ ")
})


app.listen(port, () => {
    console.log("Running server........ ", port);

})