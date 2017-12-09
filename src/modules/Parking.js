import React from 'react'

import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

import axios from 'axios'

class Parking extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(event) {
    event.preventDefault()

    console.log('location = ' + this.location.value)
    console.log('spaces = ' + this.spaces.value)

    axios.get('http://localhost:4000/')
      .then(function (response) {
        console.log(response);
      })

    const payload = {
      key: 'value'
    }

    axios.post('http://localhost:4000', payload)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <div><h1>Parking page</h1></div>

        <form onSubmit={this.submitForm}>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Location</ControlLabel>
            <FormControl componentClass="select" placeholder="select"
              inputRef={(ref) => this.location = ref}>
              <option value="notSelected">---</option>
              <option value="location1">location 1</option>
              <option value="location2">location 2</option>
            </FormControl>
          </FormGroup>

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Remaing spaces</ControlLabel>
            <FormControl componentClass="select" placeholder="select"
              inputRef={(ref) => this.spaces = ref}>
              <option value="notSelected">---</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="more">3 or more</option>
            </FormControl>
          </FormGroup>

          <Button block bsStyle="success" bsSize="large" type="submit">
            Submit
          </Button>
        </form>
      </div>
    )
  }
}

export default Parking
