import React from 'react'
import {useSearchParams} from 'react-router-dom'

export default function Members() {
    const [searchParams, setSearchParams] = useSearchParams()
    const isActive = searchParams.get('filter') === 'active'
  return (
    <>
    <div>Members</div>
    <button onClick={() => setSearchParams({filter:'active'})}> aktifleri getir</button>
    <button onClick={() => setSearchParams()}> resetle</button>
    {isActive ? <div> aktifleri getirdim </div> : <div> pasif alayı </div>}
    </>
  )
}
