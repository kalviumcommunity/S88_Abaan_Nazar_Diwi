import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import MakeDesign from './pages/MakeDesign';

function App() {


  return (
    <Home/>
  )
}

export default App
