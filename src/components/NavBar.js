

import React from 'react'
import {FaSignOutAlt} from 'react-icons/fa'
function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark   app-header " >
  <div class="container-fluid">
          <p class="navbar-brand" 
        >Gamson Damsel Hotel Booking App</p>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="/home">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/addhotel">Addhotel</a>
            <span class="visually-hidden">(current)</span>
          
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/about">Contact</a>
           <span class="visually-hidden">(current)</span>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/service">Services</a>
           <span class="visually-hidden">(current)</span>
        </li>
        <li class="nav-item">
                <a class="nav-link active" href="/contact">About</a>
                 <span class="visually-hidden">(current)</span>
        </li>
        <li class="nav-item">
                <a class="nav-link active" href="/login">Login</a>
                 <span class="visually-hidden">(current)</span>
        </li>
        <li class="nav-item">
                <a class="nav-link active" href="/register">Register</a>
                 <span class="visually-hidden">(current)</span>
        </li>
        
        <li class="nav-item">
                <a class="nav-link active" href="/">logout <FaSignOutAlt/></a>
                 <span class="visually-hidden">(current)</span>
        </li>
        
      </ul>
      
    </div>
  </div>
  
      </nav>
      <form class="d-flex">
        <input class="form-control me-sm-2 input" type="text" placeholder="Search"/>
        <button class="btn btn-secondary my-1 my-sm-0 ml-2" type="submit">Search</button>
      </form>
    </div>
  )
}

export default NavBar
