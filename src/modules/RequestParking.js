import React from 'react'

import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import axios from 'axios'

class RequestParking extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.submitForm = this.submitForm.bind(this)
    this.notSelected = this.notSelected.bind(this)
    this.getLocations = this.getLocations.bind(this)
    this.onChange = this.onChange.bind(this)
    this.getParkingSpot = this.getParkingSpot.bind(this)
  }

  onChange(value) {
    this.setState({
      location: value
    })
  }

  getLocations(input) {
    return fetch('http://localhost:4000/service/location')
		.then((response) => response.json())
		.then((json) => {
			return { options: json };
		});

  }

  notSelected() {
    return this.state.location === undefined ||
      this.spaces.value === 'notSelected'
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
      </div>
    )
  }
}

export default RequestParking
