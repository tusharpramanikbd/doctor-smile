import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const MyNavbar = () => {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Doctor Smile</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#checkout'>Checkout</Nav.Link>
            <Nav.Link href='#blogs'>Blogs</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#patient_login'>Patient Login</Nav.Link>
            <Nav.Link href='#new_patient'>New Patient?</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
