import { signOut } from 'firebase/auth'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import './MyNavbar.css'

const MyNavbar = () => {
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()
  const handleSignout = () => {
    signOut(auth)
  }
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand
          href=''
          onClick={() => {
            navigate('/')
          }}
          style={{ cursor: 'pointer' }}
        >
          Doctor Smile
        </Navbar.Brand>
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

            {/* Conditional rendering */}
            {/* If the use is present only signout button will be visible */}
            {user ? (
              <button onClick={handleSignout} className='btn-signout'>
                Signout
              </button>
            ) : (
              <Nav>
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
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
