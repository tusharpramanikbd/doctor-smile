import { async } from '@firebase/util'
import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import Loading from '../../../components/Loading/Loading'
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin'
import './Signup.css'

const Signup = () => {
  let errorElement
  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

  const [updateProfile, updating, updateError] = useUpdateProfile(auth)

  const [agree, setAgree] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async (event) => {
    event.preventDefault()
    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value

    // first create user with email and password and wait for return
    await createUserWithEmailAndPassword(email, password)
    // Then update profile with name and wait for return
    await updateProfile({ displayName: name })
    // Then sign out so that after signup user does not get automatically signed in.
    signOut(auth)
    navigate('/login')
  }

  const navigateToLogin = () => {
    navigate('/login')
  }

  if (loading || updating) {
    return <Loading />
  }

  if (userError || updateError) {
    errorElement = (
      <p className='text-danger'>
        Error: {userError?.message} {updateError?.message}
      </p>
    )
  }

  return (
    <div className='container signup-container'>
      <SocialLogin />
      <div className='signup-form'>
        <Form onSubmit={handleRegister}>
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              name='name'
              placeholder='Enter Name'
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              name='email'
              placeholder='Enter email'
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              name='password'
              placeholder='Password'
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check
              onClick={() => setAgree(!agree)}
              type='checkbox'
              name='terms'
              label='Accept Terms and Conditions'
            />
          </Form.Group>
          {errorElement}
          <Button disabled={!agree} variant='primary' type='submit'>
            Signup
          </Button>
        </Form>
        <p className='login-toggle'>
          Already have an account?{' '}
          <span onClick={navigateToLogin}>Please Login</span>
        </p>
      </div>
    </div>
  )
}

export default Signup
