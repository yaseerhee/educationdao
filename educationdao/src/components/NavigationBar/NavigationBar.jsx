// src/components/NavigationBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/educationdaologoV2.png';

const NavigationBar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-black">
      <img src={logo} alt="Education DAO Logo" className="h-10" />
      <div className="space-x-6">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/about" className="text-white">About Us</Link>
        <Link to="/contribute" className="text-white">Work With Us</Link>
        <Link to="/compendium" className="text-white">Compendium</Link>
        {/* <Link to="/governance" className="text-white">Governance</Link> */}
      </div>
      
    </nav>
  );
};

export default NavigationBar;
