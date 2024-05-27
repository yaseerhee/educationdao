// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contribute from './components/Contribute/Contribute';
import Compendium from './components/Compendium/Compendium';
import Governance from './components/Governance/Governance';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/compendium" element={<Compendium />} />
          <Route path="/governance" element={<Governance />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
