import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
<<<<<<< HEAD
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
import TripPage from './Components/TripPage/TripPage';
import TripCardTourLeader from './Components/TripCard/TripCardTourLeader';
import ListofTrips from './Components/ListofTrips/ListOfTrips';
=======
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
>>>>>>> feature/v1.0.0/create-trip

import Login from "./Components/SignUpLogIn/login.jsx";
import SignUp from "./Components/SignUpLogIn/signup.jsx";
import Forget from "./Components/SignUpLogIn/forget.jsx";
import Verification from "./Components/SignUpLogIn/verification.jsx";

import Tour from "./Components/TouristAttractionsPage/Tour";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import PlacePage from "./Components/PlacePage/PlacePage";
import LandingPage from "./Components/LandingPage/LandingPage";
import Errornotfound from "./Components/404/notfound.jsx";
import CreateCard from "./Components/Create_Trip/TripCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/forget" element={<Forget />} />
<<<<<<< HEAD
        <Route path='/home' element={<HomePage />} />
        <Route path='/PlacesList' element={<Tour/>} />
        <Route path='/Profile' element={<ProfilePage/>} />
        <Route path='/Place/:id' element={<PlacePage/>} />
        <Route path='*' element={<Errornotfound/>}/>
        <Route path='/Trip/:id' element={<TripPage/>} />
        <Route path='/cardTest' element={<TripCardTourLeader/>}/>
        <Route path='/TripList' element={<ListofTrips/>}/>
=======
        <Route path="/home" element={<HomePage />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Place/:id" element={<PlacePage />} />
        <Route path="/create-trip" element={<CreateCard />} />
        <Route path="*" element={<Errornotfound />} />
>>>>>>> feature/v1.0.0/create-trip
      </Routes>
    </Router>
  );
}

export default App;
