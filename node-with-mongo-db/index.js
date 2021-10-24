const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5000;

// database connection url
const uri = "mongodb+srv://shuvro-75:Shuvro7523@cluster0.oh18i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect(err => {
      const databaseName = client.db("crudDb") // database name
      const userCollection = databaseName.collection("users"); // passing database collection.
      console.log("hitting the database ......");

      // POST API
      app.post('/users', async (req, res) => {
        // const newUser = req.body;
        // const result = await usersCollection.insertOne(newUser);
        // console.log('got new user', req.body);
        // console.log('added user', result);
        // res.json(result);
        console.log("database connected successfully");
    });
    })
  }
  finally {
    client.close()
  
  }
}
run().catch(console.dir) // catch the error

app.get('/', (req, res) => {
    res.send("Running My CRUD server........ ")
})


app.listen(port, () => {
    console.log("Running server........ ", port);

})