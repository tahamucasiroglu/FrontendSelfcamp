import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate()
  return (
    <>
    <div>Home</div>
    <button onClick={()=> navigate('/mission')}>Missiona git</button>
    </>
  )
}
