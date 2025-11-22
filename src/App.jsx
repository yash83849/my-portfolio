import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import Mern from './Components/Mern';
import About from './Components/About';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
        <Navbar/>
      <section id='hero'>
        <Hero/>
      </section>
      <section id='mern'> 
        <Mern/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='experience'>
        <Experience/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
      <section id='footer'>
        <Footer/>
      </section>
      
      
    </>
  );
}

export default App;
