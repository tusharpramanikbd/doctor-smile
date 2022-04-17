import React from 'react'
import Banner from '../../components/Banner/Banner'
import Reviews from '../../components/Reviews/Reviews'
import Services from '../../components/Services/Services'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Reviews />
    </div>
  )
}

export default Home
