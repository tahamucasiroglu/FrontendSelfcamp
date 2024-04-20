import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Mission() {
    const navigate = useNavigate()
  return (
    <>
    <div>Home</div>
    <button onClick={()=> navigate('/')}>Geri git</button>
    </>
  )
}
