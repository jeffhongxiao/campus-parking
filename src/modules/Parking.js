import React from 'react'

import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const Parking = () => (
  <div>
    <div><h1>Parking page</h1></div>

    <form>
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Location</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="select">---</option>
          <option value="location1">location 1</option>
          <option value="location2">location 2</option>
        </FormControl>
      </FormGroup>

      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Remaing spaces</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="select">---</option>
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

export default Parking
