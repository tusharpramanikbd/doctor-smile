import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Service.css'

const Service = (props) => {
  const navigate = useNavigate()
  const handleBookNow = () => {
    navigate('/checkout')
  }
  const { name, image, price, desc } = props.service
  return (
    <div className='service-container'>
      <img src={image} alt={name} className='service-image' />
      <h3 className='my-3'>{name}</h3>
      <h4>Cost: ${price}</h4>
      <p className='service-text'>{desc}</p>
      <button onClick={handleBookNow} className='service-btn'>
        Book Now
      </button>
    </div>
  )
}

export default Service
