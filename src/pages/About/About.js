import React from 'react'
import './About.css'
import profileImage from '../../images/profile-pic.jpg'

const About = () => {
  return (
    <div className='container about-container'>
      <h1 className='mt-3'>About Me</h1>
      <img className='about-img' src={profileImage} alt='profile' />
      <h2 className='about-name'>Tushar Pramanik</h2>
      <p className='about-text'>
        My prime goal is to become a good web developer and work at the top
        class software engineering company as a software engineer. But to
        achieve this goal I have to work hard. For the phase one, I am learing
        the basics of web development tools like, HTML, CSS, JavaScript,
        ReactJS, Bootstrap, Tailwind, NodeJS, MongoDB, etc. Then I will make
        strong my programming problem solving ability by solving as much as
        problems from Leetcode. Then I will develop some professional
        full-fledged ReactJS websites, so that I can show my skill. I also have
        to develop my communication skills in order to get good job at big
        companies.{' '}
      </p>
    </div>
  )
}

export default About
