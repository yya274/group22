import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Backstory from './components/Backstory';
import Gallery from './components/Gallery';
import Rule from './components/Rule';
import Analyses from './components/Analyses';
import Meeting from './components/Meeting';
import Contributions from './components/Contributions';
import References from './components/References';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Backstory />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rule" element={<Rule />} />
        <Route path="/analyses" element={<Analyses />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/contributions" element={<Contributions />} />
        <Route path="/references" element={<References />} />
      </Routes>
    </Router>
  );
}
export default App;
