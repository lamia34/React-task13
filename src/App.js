import React from 'react';
import { Routes, Route } from 'react-router-dom';  
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Home from './Components/Home';
import './App.css';
import { Main } from './Components/Main';

function App() {
  return (
    <div className="App">
      <Main /> 
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
