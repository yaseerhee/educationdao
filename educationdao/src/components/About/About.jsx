// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="bg-dark-purple py-20 min-h-screen">
      <div className="max-w-7xl mx-auto text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-8">Why Education DAO?</h2>
        <div className="mt-12 flex justify-center">
          <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-3xl">
            <div className="text-justify space-y-4 text-lg">
              <p>
                The advent of public blockchain networks created a fundamental change in how information is generated and shared.
              </p>
              <p>
                The catalyst began with Bitcoin, evolved with Ethereum and now a multitude of chains, dapps and innovations exist on blockchain networks.
              </p>
              <p>
                Previous generations of information technology have often fallen into the pattern of people in silos: self-contained teams or entities building products for consumers.
              </p>
              <p>
                This means that if we want to gain information about a certain technology, we need to visit the company's documentation and resources.
              </p>
              <p>
                Open-source software projects attempt to provide access to technology tools outside of such silos. Because they often lack a funding model, this requires massive amounts of unpaid, invisible, and unappreciated labor.
              </p>
              <p>
                One of the core propositions of blockchain technology has been the creation of self-sustaining technology without an external profit motive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
