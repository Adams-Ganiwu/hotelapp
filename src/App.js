import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomeScreen from './components/HomeScreen';
import RoyalCosyHills from './components/RoyalCosyHills';
import NuoyougEmpirefeatures from './components/NuoyougEmpirefeatures';
import GrandHyattfeatures from './components/GrandHyattfeatures';
import Delafeature from './components/Delafeature';
import Login from './screens/Login';
import Register from './screens/Register';
import AddHotel from './components/AddHotel';
import About from './components/About';
import Service from './components/Services';
import Contact from './components/Contact';
// import Bookhotel from './components/Bookhotel'


function App() {
  return (
    <div>
    
      <Routes>
      
      <Route path="/home" element={<HomeScreen/>}  />
      <Route path="/dubaifeatures" element={<RoyalCosyHills/>}/>
      <Route path="/nuoyong" element={<NuoyougEmpirefeatures/>}/>
      <Route path="/grandhyatt" element={<GrandHyattfeatures/>}/>
        <Route path="/dela" element={<Delafeature />} />
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/addhotel" element={<AddHotel/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/about" element={<About/>}/>
        
      
      
      </Routes>

    
    </div>
  )
}

export default App