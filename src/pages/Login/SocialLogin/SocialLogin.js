import React from 'react'
import './SocialLogin.css'
import google from '../../../images/social/google.png'

const SocialLogin = () => {
  return (
    <>
      <button className='btn-social'>
        <img src={google} alt='google' /> Signin with google
      </button>

      <div className='horizontal-line-container'>
        <div className='horizontal-line'></div>
        <p>Or</p>
        <div className='horizontal-line'></div>
      </div>
    </>
  )
}

export default SocialLogin
