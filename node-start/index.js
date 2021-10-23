const express = require('express')
const cors = require('cors'); // call cors origin.
const app = express();
app.use(cors()); // use cors origin for this app.
app.use(express.json()); // receive stringify data and convert it json
const port = process.env.PORT || 5000 // this will come from env file when we added environment setup.

// get method. using default url.
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

// hard code data
const users = [
  { id: 0, name: 'a', email: 'a@gmail.com', phone: '01788888888' },
  { id: 1, name: 'v', email: 'v@gmail.com', phone: '01788888888' },
  { id: 2, name: 'd', email: 'd@gmail.com', phone: '01788888888' },
  { id: 3, name: 'e', email: 'e@gmail.com', phone: '01788888888' },
  { id: 4, name: 's', email: 's@gmail.com', phone: '01788888888' },
  { id: 5, name: 'f', email: 'f@gmail.com', phone: '01788888888' },
]
// get users using '/user' url
app.get('/users', (req, res) => {
  const search = req.query.search; // getting search text
  // use query parameter
  if (search) {
      const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search)); // search query
      res.send(searchResult); // send the search results
  }
  else {
      res.send(users)
  }
});

// dynamic api/ getting specific users data using id params.
app.get('/users/:id', (req, res) => {
  const id = req.params.id; // getting requested id
  const user = users[id]
  console.log(user)
  res.send(user);
})

app.post('/users', (req, res) =>{
  console.log("yes post method hitting....")
  res.send("ok post method hit.")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})