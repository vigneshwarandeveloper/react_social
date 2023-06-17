import React from 'react'

const Footer = () => {
    const today=new Date().getFullYear()
  return (
    <footer className='Footer'>
        <h3>copyrights @ {today}</h3>
    </footer>
  )
}

export default Footer