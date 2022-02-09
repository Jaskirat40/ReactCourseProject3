import React from 'react'
import './Navbar.css'
import logo from '../images/airbnb-logo.png' 

export default function Navbar() {
  return (
    <div className='navbar--wrapper'>
    <img className='navbar--logo' src={logo} />
    </div>
  )
}
