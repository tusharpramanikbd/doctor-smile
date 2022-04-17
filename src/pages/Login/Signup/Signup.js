import React from 'react'
import { Button, Form } from 'react-bootstrap'
import SocialLogin from '../SocialLogin/SocialLogin'
import './Signup.css'

const Signup = () => {
  return (
    <div className='container signup-container'>
      <SocialLogin />
      <div className='signup-form'>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' required />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' required />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Signup
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Signup
