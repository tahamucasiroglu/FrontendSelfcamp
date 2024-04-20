import React from 'react'
import {Link, Outlet} from 'react-router-dom'


export default function History() {
  return (
    <>
    <div>History</div>
    <nav>
    <Link to='company'>Company</Link>
    <Link to='team'>Team</Link>
    </nav>
    <Outlet/>
    </>
  )
}
