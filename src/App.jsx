import React from 'react';
import './index.css'
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Project from './Routes/Project';
import {Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Routes>
      
      <Route path="/"element={<Home />} />
      <Route path="/Project"element={<Project />} />
      <Route path="/About"element={<About />} />
      <Route path="/Contact"element={<Contact />} />
      
      </Routes>
  )
}

export default App


