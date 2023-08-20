const express = require('express')
var morgan = require('morgan')
const app = express()

app.use(morgan('combined'))
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)