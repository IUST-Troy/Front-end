import React from 'react'
import TripCard from '../Create_Trip/TripCard'
import Header from '../NavigationBar/Header'
import Navbar from '../NavigationBar/Navbar'
import FooterV2 from '../HomePage/FooterV2'
const App = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <TripCard/>
        <FooterV2/>
      
    </div>
  )
}

export default App
