import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Services from './components/pages/Services'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/' exact element={<Products />}/>
        <Route path='/' exact element={<Services />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
