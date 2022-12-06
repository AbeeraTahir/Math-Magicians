import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  </>
);

export default App;
