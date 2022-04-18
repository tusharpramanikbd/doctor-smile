import React from 'react'
import './Footer.css'

const Footer = () => {
  // Getting current year
  const currentYear = new Date().getFullYear()
  return (
    <div className='footer-container'>
      <p>Copyright &copy; Doctor Smile {currentYear}</p>
    </div>
  )
}

export default Footer
