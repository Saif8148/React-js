import React from 'react'
import {  Link } from "react-router-dom";


function Navbar() {
  return (
    <>
    <nav class="navbar nav1 navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={'/React-js'}  class="nav-link active" aria-current="page">Home</Link>
        </li>
   
        <li class="nav-item">
          <Link to={'/about'} class="nav-link">About</Link>
        </li>
        <li class="nav-item">
          <Link to={'/contact'} class="nav-link" >Contact</Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar