import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import Homepage from './components/Pages/Homepage';
import About from './components/Pages/About';
import Projects from './components/Pages/Projects';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
  )
}

export default App
