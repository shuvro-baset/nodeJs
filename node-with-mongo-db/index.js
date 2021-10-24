const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 5000;

// use cors into my app 
app.use(cors());
app.use(express.json());


// database connection url
const uri = "mongodb+srv://shuvro-75:Shuvro7523@cluster0.oh18i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("hitting the database");
  const user = { name: "test", email: "test@example.com"}
  collection.insertOne(user)
    .then(() =>{
      console.log("insert success...")
    })
  // perform actions on the collection object
  // client.close();
});

app.get('/', (req, res) => {
    res.send("Running My CRUD server........ ")
})


app.listen(port, () => {
    console.log("Running server........ ", port);

})