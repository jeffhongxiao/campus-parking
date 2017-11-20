import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap';
import '../styles/Body.css'

const Body = () => (
  <div>
    <Jumbotron>
      <h2>Existing User</h2>
      <Button className='loginButton' block>LOGIN</Button>
    </Jumbotron>
    <Jumbotron>
      <h2>New User</h2>
      <Button bsStyle="primary" bsSize="large" block>Register</Button>
    </Jumbotron>
  </div>
)

export default Body
