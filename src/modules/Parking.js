import React from 'react'

import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import axios from 'axios'

class Parking extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.submitForm = this.submitForm.bind(this)
    this.notSelected = this.notSelected.bind(this)
    this.getLocations = this.getLocations.bind(this)
    this.onChange = this.onChange.bind(this)
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

    if (this.notSelected()) {
      // TODO show warning message
      console.log(`values are not selected.`)
      return
    }

    const location = this.state.location.value
    const spaces = this.spaces.value

    const payload = {
      location,
      spaces
    }

    axios.post('http://localhost:4000', payload)
    .then(function (response) {
      // TODO show success message
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

        <ControlLabel>Location</ControlLabel>
        <Select.Async
          multi={false}
          value={this.state.location}
          onChange={this.onChange}
          valueKey="value"
          labelKey="label"
          loadOptions={this.getLocations}
        />

        <form onSubmit={this.submitForm}>
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
