import React, { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './home'
//import AboutUs from './aboutUs'
import Navbar from './navbar'
import Mission from './mission'
import NorFound from './notFound'
import History from './history'
import Company from './company'
import Team from './team'
import Members from './members'
import MemberDetail from './memberDetail'
const LazyAboutUs = React.lazy(() => import('./aboutUs')) 

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/aboutus' element={<AboutUs />} /> */}
        <Route path='/aboutus' element={<React.Suspense><LazyAboutUs /></React.Suspense> } />
        <Route path='/mission' element={<Mission />} />
        <Route path='/history' element={<History />}> 
        <Route path='company' element={<Company />}/>
        <Route path='team' element={<Team />}/>
        </ Route>
        <Route path='/members' element={<Members />} />
        <Route path='/members/:memberId' element={<MemberDetail />} />
        <Route path='*' element={<NorFound />} />
      </Routes>
    </div>
  )
}

export default App
