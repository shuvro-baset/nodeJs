const express = require('express')
const app = express()
const port = process.env.PORT || 3000 // this will come from env file when we added environment setup.

// get method. using default url.
app.get('/', (req, res) => {
    res.send('Hello World!')
  })


// get users using '/user' url
app.get('/users', (req, res) => {
  res.send('Here will come all users')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})