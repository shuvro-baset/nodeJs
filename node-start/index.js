const express = require('express')
const app = express()
const port = process.env.PORT || 3000 // this will come from env file when we added environment setup.

// get method. using default url.
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })