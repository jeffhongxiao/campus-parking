const express = require('express')
const app = express()
const cors = require('cors')

const bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(cors())

app.get('/', (req, res) => {
  res.send('hello')
})

app.post('/', (req, res) => {
  console.log(req.body.key)
  res.send('response from POST')
})

app.listen(4000, () => {
  console.log('running on port 4000')
})
