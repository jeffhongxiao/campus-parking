import React from 'react'

import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import axios from 'axios'

class RequestParking extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.submitForm = this.submitForm.bind(this)
    this.getParkingSpot = this.getParkingSpot.bind(this)
  }


  submitForm(event) {
    event.preventDefault()
    this.getParkingSpot()
  }

  getParkingSpot() {
    return fetch('http://localhost:4000/service/requestParking')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
  }

  render() {
    return (
      <div>
        <div><h1>Request Parking Page</h1></div>

        <form onSubmit={this.submitForm}>
          <Button block bsStyle="success" bsSize="large" type="submit">
            Request a Parking spot
          </Button>
        </form>

        <ListGroup>
          <ListGroupItem>Parking lot 1</ListGroupItem>
          <ListGroupItem>Parking lot 2</ListGroupItem>
          <ListGroupItem>...</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

export default RequestParking
