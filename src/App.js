import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import HomePage from './Components/HomePage/HomePage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Components/SignUpLogIn/login'
import SignUp from './Components/SignUpLogIn/signup'
import Forget from './Components/SignUpLogIn/forget'
import Verification from './Components/SignUpLogIn/verification'
function App() {
  return (
    <Router>
      

      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
           <Routes>
              <Route className="App auth-wrapper auth-inner" exact path="/" element={<SignUp />} />
              <Route className="App auth-wrapper auth-inner" path="/sign-in" element={<Login />} />
              <Route className="App auth-wrapper auth-inner" path="/sign-up" element={<SignUp />} />
              <Route path="/verification" element={<Verification />} />
              <Route path="/forget" element={<Forget />} />
              </Routes>
          
          </div>
        </div>
       
      </div>
       
      
    </Router>
  )
  // return (
    
  //   <>
  //     <HomePage/>
  //   </>
  // );
}

export default App;
