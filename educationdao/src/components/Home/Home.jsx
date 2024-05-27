// src/components/Home.jsx
import React from 'react';
import logo from '../../assets/educationdaologoV2.png';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-purple font-myfont">
      <div className="flex-grow flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full px-6 md:px-12">
          <div className="text-center md:text-left md:max-w-xl mx-auto md:ml-0 md:mr-8">
            <h1 className="text-5xl font-bold text-white mb-4">
              From the community, for the world: driving web3 education together.
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Empowering collaborative learning on the blockchain.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-purple-700 text-white py-2 px-4 rounded">
                JOIN EDUCATION DAO
              </button>
              <button className="border border-purple-700 text-purple-700 py-2 px-4 rounded">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="flex justify-center md:justify-center mt-10 md:mt-0">
            <img src={logo} alt="Education DAO Logo" className="h-80 md:h-96" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
