
import React from 'react'

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary   " >
  <div class="container-fluid">
          <p class="navbar-brand" >Gamson Damsel Hotel Booking App</p>
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
          <a class="nav-link active" href="/addhotel">Addhotel
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="service">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">contact</a>
        </li>
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="text" placeholder="Search"/>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar