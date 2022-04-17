import React from 'react'
import { Button, Form } from 'react-bootstrap'
import SocialLogin from '../SocialLogin/SocialLogin'
import './Login.css'

const Login = () => {
  return (
    <div className='container login-container'>
      <SocialLogin />
      <div className='login-form'>
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
            Login
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Login
