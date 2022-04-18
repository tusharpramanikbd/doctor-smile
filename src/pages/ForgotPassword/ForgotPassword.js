import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import './ForgotPassword.css'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const ForgotPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth)

  let errorElement

  if (error) {
    errorElement = <p className='text-danger'>Error: {error.message}</p>
  }

  const handleForgotPassword = async (event) => {
    event.preventDefault()
    const email = event.target.email.value
    if (email) {
      await sendPasswordResetEmail(email)
      toast('Sent email')
    } else {
      toast('Please enter your email address')
    }
  }
  return (
    <div className='container forgotpassword-container'>
      <div className='forgotpassword-form'>
        <Form onSubmit={handleForgotPassword}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' name='email' placeholder='Enter email' />
          </Form.Group>
          {errorElement}
          <Button variant='primary' type='submit'>
            Reset Password
          </Button>
        </Form>
        <ToastContainer />
      </div>
    </div>
  )
}

export default ForgotPassword
