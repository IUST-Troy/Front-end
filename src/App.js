import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import HomePage from './Components/HomePage/HomePage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
<<<<<<< HEAD
import Login from './Components/SignUpLogIn/login'
import SignUp from './Components/SignUpLogIn/signup'
import Forget from './Components/SignUpLogIn/forget'
import Verification from './Components/SignUpLogIn/verification'
// import TouristAttractionsPage from './Components/TouristAttractionsPage/TouristAttractionsPage'
import ProfilePage from './Components/ProfilePage/ProfilePage';
=======

import Login from './Components/SignUpLogIn/login.jsx'
import SignUp from './Components/SignUpLogIn/signup.jsx'
import Forget from './Components/SignUpLogIn/forget.jsx'
import Verification from './Components/SignUpLogIn/verification.jsx'

import Tour from'./Components/TouristAttractionsPage/Tour'

>>>>>>> feature/v1.0.0/Tourist_Attractions_Page

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/forget" element={<Forget />} />
        <Route path='/home' element={<HomePage />} />
        {/* <Route path='/tourist-attractions-page' element={<TouristAttractionsPage />} /> */}
        <Route path='/Profile' element={<ProfilePage/>} />
      </Routes>
=======
      

 
           <Routes>
              <Route  exact path="/" element={<SignUp />} />
              <Route path="/sign-in" element={<Login />} />
              <Route  path="/sign-up" element={<SignUp />} />
              <Route path="/verification" element={<Verification />} />
              <Route path="/forget" element={<Forget />} />
              <Route path='/home' element={<HomePage/>} />
              <Route path='/tour' element={<Tour/>} />
          
              </Routes>
       
     
     
       
      
>>>>>>> feature/v1.0.0/Tourist_Attractions_Page
    </Router>
  )
}

export default App;
