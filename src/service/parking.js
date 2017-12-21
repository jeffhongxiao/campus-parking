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
  console.log(req.body)
  res.send('response from POST')
})

app.get('/service/location', (req, res) => {
  const locations = [
    {value: 'location1', label: 'Location 1'},
    {value: 'location2', label: 'Location 2'},
    {value: 'location3', label: 'Location 3'}
  ]

  res.json(locations)
})

app.get('/service/requestParking', (req, res) => {
  const spots = [
    'parking lot 1',
    'parking lot 2',
    'parking lot 3'
  ]

  res.json(spots)
})

app.listen(4000, () => {
  console.log('running on port 4000')
})
