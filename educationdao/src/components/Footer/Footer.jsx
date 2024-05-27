// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-10">
      <div className="max-w-7xl mx-auto text-white text-center">
        <p className="mb-4">Follow us on our socials:</p>
        <div className="space-x-6">
          <a href="#" className="text-white">Twitter</a>
          <a href="#" className="text-white">LinkedIn</a>
          <a href="#" className="text-white">GitHub</a>
        </div>
        <p className="mt-8">&copy; 2024 Education DAO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
