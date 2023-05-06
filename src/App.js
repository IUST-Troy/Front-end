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


function App() {
  return (
    <Router>

      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/forget" element={<Forget />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/tour' element={<Tour/>} />
        <Route path='/Profile' element={<ProfilePage/>} />
        <Route path='/Place/:id' element={<PlacePage/>} />
      </Routes>

    </Router>
  )
}

export default App;
