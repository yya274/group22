import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Backstory from './components/Backstory';
import Gallery from './components/Gallery';
import Rule from './components/Rule';
import Meeting from './components/Meeting';
import Testing from './components/Testing';
import Flowchart from './components/Flowchart';
import Analysis from './components/Analysis';
import Descriptions from './components/Description';
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
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/flowchart" element={<Flowchart />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/descriptions" element={<Descriptions />} />
        <Route path="/contributions" element={<Contributions />} />
        <Route path="/references" element={<References />} />
      </Routes>
    </Router>
  );
}
export default App;
