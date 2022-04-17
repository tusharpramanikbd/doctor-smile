import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './MyNavbar.css'

const MyNavbar = () => {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Doctor Smile</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavLink
              className='navbar-links'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : '',
                }
              }}
              to='/'
            >
              Home
            </NavLink>

            <NavLink
              className='navbar-links'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : '',
                }
              }}
              to='/checkout'
            >
              Checkout
            </NavLink>

            <NavLink
              className='navbar-links'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : '',
                }
              }}
              to='/blogs'
            >
              Blogs
            </NavLink>

            <NavLink
              className='navbar-links'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : '',
                }
              }}
              to='/about'
            >
              About
            </NavLink>

            <NavLink
              className='navbar-links'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : '',
                }
              }}
              to='/login'
            >
              Patient Login
            </NavLink>

            <NavLink
              className='navbar-links'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : '',
                }
              }}
              to='/signup'
            >
              New Patient?
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
