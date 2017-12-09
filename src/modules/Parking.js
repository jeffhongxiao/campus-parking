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

  componentWillMount() {
    axios.get('http://localhost:4000/service/location')
    .then((response) => {
      this.locations = response.data
      console.log(response.data)
    })
    .catch((error) => {console.log(error)})
  }

  onChange(value) {
    debugger
    this.setState({
      value: value
    })
  }

  getLocations(input) {
    if (!input) {
      return Promise.resolve({ options: [] })
    }

    const promise = axios.get('http://localhost:4000/service/location')
      .then((response) => response.json())
      .then((json) => {
        return { options: json.items}
      })

    return promise
  }

  notSelected() {
    return this.location.value === 'notSelected' ||
      this.spaces.value === 'notSelected'
  }

  submitForm(event) {
    const location = this.location.value
    const spaces = this.spaces.value

    if (this.notSelected()) {
      // TODO show warning message
      console.log(`values are not selected: ${location}, ${spaces}`)
      return
    }

    event.preventDefault()

    const payload = {
      location,
      spaces
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
    const locations = this.locations
    console.log(locations)
    return (
      <div>
        <div><h1>Parking page</h1></div>

        <Select id="location-select"
          ref="locationSelect"
          options={locations}
          searchable={true}
        />

        <Select.Async
          multi={false}
          value={this.state.value}
          onChange={this.onChange}
          valueKey="value"
          labelKey="label"
          loadOptions={this.getLocations}
        />


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
