import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap';
import '../styles/Body.css'

const Body = () => (
  <div>
    <Jumbotron>
      <h2>Already found your parking</h2>
      <Button href='#/parking/' bsStyle="info" bsSize="large" block>Parking</Button>
    </Jumbotron>
    <Jumbotron>
      <h2>I need a parking spot</h2>
      <Button href='#/requestParking/' bsStyle="info" bsSize="large" block>Request a Parking</Button>
    </Jumbotron>
    <Jumbotron>
      <h2>New User</h2>
      <Button href='#/register/' bsStyle="primary" bsSize="large" block>Register</Button>
    </Jumbotron>
  </div>
)

export default Body
