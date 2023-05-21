import React from 'react'
import Header from '../NavigationBar/Header'
import Navbar from '../NavigationBar/Navbar'
import Hero from './Hero'
import Footer from '../HomePage/FooterV2'
import Wallpaper1 from '../../Static/bgR.jpg'
import Features from './Features';
import NewItems from './NewItems';

const App = () => {
  return (
    <div   style={{
        background: `url(${Wallpaper1}) no-repeat center center fixed`,
    }}>
    <Header />
    <Navbar />
    <Hero />
    <Features />
    <NewItems />
    <Footer />
      
    </div>
  )
}

export default App
