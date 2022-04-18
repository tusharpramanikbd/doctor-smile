import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import Loading from '../../../components/Loading/Loading'
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin'
import './Login.css'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  // if location has pathname then go to there otherwise home
  const from = location.state?.from?.pathname || '/'
  let errorElement
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)

  const handleLogin = (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value

    signInWithEmailAndPassword(email, password)
  }

  const navigateToSignup = () => {
    navigate('/signup')
  }

  const navigateToForgotPassword = () => {
    navigate('/forgotpassword')
  }

  if (loading) {
    return <Loading />
  }

  if (user) {
    navigate(from, { replace: true })
  }

  if (error) {
    errorElement = <p className='text-danger'>Error: {error.message}</p>
  }

  return (
    <div className='container login-container'>
      <SocialLogin />
      <div className='login-form'>
        <Form onSubmit={handleLogin}>
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
          {errorElement}
          <Button variant='primary' type='submit'>
            Login
          </Button>
        </Form>
        <p className='signup-toggle'>
          Don't have an account?{' '}
          <span onClick={navigateToSignup}>Please Signup</span>
        </p>
        <p className='reset-password'>
          Forgot Password?{' '}
          <span onClick={navigateToForgotPassword}>Reset Password</span>
        </p>
      </div>
    </div>
  )
}

export default Login
