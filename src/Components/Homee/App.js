import Navbar from '../NavigationBar/Navbar.js';
import Header from '../NavigationBar/Header.js';
import Hero from './Hero.jsx';
import Offers from './Offers.jsx';
import Plan from './Plan.jsx';
import Orga from './orga.jsx'

import FooterV2 from '../HomePage/FooterV2.js';

function Home() {
  return (
    <div>
       
      <Hero />
      
      <Plan />
      <div></div>
      <Orga />
     
   <Offers  />
      
      <FooterV2 />
    </div>
  );
}

export default Home;
