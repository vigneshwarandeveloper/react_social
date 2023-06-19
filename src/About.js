import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <main className='About'>
      <h1>About</h1>
      <p style={{marginTop:"2rem"}}> 
      We are Kickinsta team we develope this app for sharing your knowledge to others,
      if you face any querie,contact use Email:<Link to="https://mail.google.com/mail/u/0/?tab=rm&ogbl">kickinsta@gmail.com</Link>
      </p>
    </main>
  )
}

export default About