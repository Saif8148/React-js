import { useState, useEffect } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
      AOS.init();
    }, [])

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <div className="container-fluid home main">     
      <Routes>
        <Route path='/' index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </div>
     
      </BrowserRouter>
    </>
  )
}

export default App
