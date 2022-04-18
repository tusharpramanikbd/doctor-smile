import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import MyModal from '../../components/MyModal/MyModal'
import './Checkout.css'

const Checkout = () => {
  const [modalShow, setModalShow] = useState(false)
  const handleCheckout = (event) => {
    event.preventDefault()
    setModalShow(true)
  }
  return (
    <div className='container checkout-container'>
      <h1 className='text-center my-3'>Book Now</h1>
      <div className='checkout-form'>
        <Form onSubmit={handleCheckout}>
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type='name'
              name='name'
              placeholder='Enter Name'
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              name='email'
              placeholder='Enter email'
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='address'
              name='address'
              placeholder='Address'
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type='phone'
              name='phone'
              placeholder='Phone Number'
              required
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Book Now
          </Button>
        </Form>
      </div>
      <MyModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

export default Checkout
