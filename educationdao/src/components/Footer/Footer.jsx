// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-10">
      <div className="max-w-7xl mx-auto text-white text-center">
        <p className="mb-4">Follow us on our socials:</p>
        <div className="space-x-6">
          <a href="https://x.com/Education__DAO" className="text-white">Twitter</a>
          <a href="https://www.linkedin.com/company/educationdao" className="text-white">LinkedIn</a>
          <a href="https://github.com/Education-DAO-Organization" className="text-white">GitHub</a>
          <a href="https://hey.xyz/u/educationdao" className="text-white">Lens</a>
        </div>
        <p className="mt-8">&copy; 2024 Education DAO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
