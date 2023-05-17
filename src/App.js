import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import HomePage from './Components/HomePage/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './Components/SignUpLogIn/login.jsx'
import SignUp from './Components/SignUpLogIn/signup.jsx'
import Forget from './Components/SignUpLogIn/forget.jsx'
import Verification from './Components/SignUpLogIn/verification.jsx'
import Tour from'./Components/TouristAttractionsPage/Tour'
import ProfilePage from './Components/ProfilePage/ProfilePage';
import PlacePage from './Components/PlacePage/PlacePage';
import LandingPage from './Components/LandingPage/LandingPage';
import Errornotfound from './Components/404/notfound.jsx'
import CreateCard from './Components/Create_Trip/TripCard';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/forget" element={<Forget />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/tour' element={<Tour/>} />
        <Route path='/Profile' element={<ProfilePage/>} />
        <Route path='/ctrip' element={<CreateCard/>} />
        <Route path='/Place/:id' element={<PlacePage/>} />
        <Route path='*' element={<Errornotfound/>}/>
      </Routes>
    </Router>
  )
}

export default App;
