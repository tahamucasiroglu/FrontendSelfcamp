import React from 'react'
import {NavLink} from 'react-router-dom' 

export default function Navbar() {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/aboutus'>Aboutus</NavLink>
        <NavLink to='/history'>History</NavLink>
    </nav>
  )
}
