import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import HomePage from './Components/HomePage/HomePage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Components/SignUpLogIn/login'
import SignUp from './Components/SignUpLogIn/signup'
import Forget from './Components/SignUpLogIn/forget'
import Verification from './Components/SignUpLogIn/verification'
import TouristAttractionsPage from './Components/TouristAttractionsPage/TouristAttractionsPage'

function App() {
  return (
    <Router>
      

 
           <Routes>
              <Route  exact path="/" element={<SignUp />} />
              <Route path="/sign-in" element={<Login />} />
              <Route  path="/sign-up" element={<SignUp />} />
              <Route path="/verification" element={<Verification />} />
              <Route path="/forget" element={<Forget />} />
              <Route path='/home' element={<HomePage/>} />
              <Route path='/tourist-attractions-page' element={<TouristAttractionsPage/>} />
              </Routes>
       
     
     
       
      
    </Router>
  )
  // return (
    
  //   <>
  //     <HomePage/>
  //   </>
  // );
}

export default App;
