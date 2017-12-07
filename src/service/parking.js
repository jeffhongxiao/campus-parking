const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(4000, () => {
  console.log('running on port 4000')
})
