console.log("welcome to backend  site by govind");
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome to Backend site by govind')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})