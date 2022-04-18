import React from 'react'
import './SocialLogin.css'
import google from '../../../images/social/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import { useLocation, useNavigate } from 'react-router-dom'

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  let errorElement
  if (error) {
    errorElement = <p className='text-danger'>Error: {error.message}</p>
  }

  if (user) {
    navigate(from, { replace: true })
  }

  return (
    <>
      <button onClick={() => signInWithGoogle()} className='btn-social'>
        <img src={google} alt='google' /> Signin with google
      </button>
      {errorElement}
      <div className='horizontal-line-container'>
        <div className='horizontal-line'></div>
        <p>Or</p>
        <div className='horizontal-line'></div>
      </div>
    </>
  )
}

export default SocialLogin
