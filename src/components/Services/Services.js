import React from 'react'
import useServices from '../../hooks/useServices'
import Service from '../Service/Service'
import './Services.css'

const Services = () => {
  const [services] = useServices()
  return (
    <div id='services'>
      <h2 className='text-center my-3'>Our Services</h2>
      <section className='container section-services'>
        {services.map((service) => {
          return <Service key={service.id} service={service} />
        })}
      </section>
    </div>
  )
}

export default Services
