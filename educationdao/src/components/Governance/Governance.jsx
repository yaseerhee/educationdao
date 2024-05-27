// src/components/Governance.jsx
import React from 'react';

const Governance = () => {
  return (
    <div className="bg-dark-purple py-20 min-h-screen">
      <div className="max-w-7xl mx-auto text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-8">DAO Governance</h2>
        <p className="text-lg mb-4">
          Proposals undertaken by Education DAO with a link attached which takes you to the Snapshot of the proposal when clicked.
        </p>
        <a href="https://snapshot.org" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">
          View Proposals on Snapshot
        </a>
      </div>
    </div>
  );
};

export default Governance;
