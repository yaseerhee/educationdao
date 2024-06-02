import React, { useState } from 'react';
import logo from '../../assets/educationdaologoV2.png';
import communityAvatar from '../../assets/avatars/community.webp';
import sponsorAvatar from '../../assets/avatars/partner.webp';
import participantAvatar from '../../assets/avatars/participant.png';
import socialAvatar from '../../assets/avatars/socialmedia.webp';
import QRFarcaster from '../../assets/socialmedia/QRFarcaster.png'
import QRTwitter from '../../assets/socialmedia/QRTwitter.png'
import QRLinkedin from '../../assets/socialmedia/QRLinkedin.png'
import { Link } from 'react-router-dom';

const Home = () => {
  const [isCommunityModalOpen, setCommunityModalOpen] = useState(false);
  const [isSponsorModalOpen, setSponsorModalOpen] = useState(false);
  const [isParticipantModalOpen, setParticipantModalOpen] = useState(false);
  const [isSocialModalOpen, setSocialModalOpen] = useState(false);

  const openCommunityModal = () => setCommunityModalOpen(true);
  const openSponsorModal = () => setSponsorModalOpen(true);
  const openParticipantModal = () => setParticipantModalOpen(true);
  const openSocialModal = () => setSocialModalOpen(true);

  const closeModals = () => {
    setCommunityModalOpen(false);
    setSponsorModalOpen(false);
    setParticipantModalOpen(false);
    setSocialModalOpen(false);
  };

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
              <button 
                className="bg-purple-700 text-white py-2 px-4 rounded"
                onClick={openCommunityModal}
              >
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

      {isCommunityModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-lg w-full max-w-5xl max-h-[80vh] mx-auto shadow-lg">
            <button 
              className="absolute top-2 left-2 text-gray-700 text-3xl font-bold"
              onClick={closeModals}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Join Education DAO</h2>
            <div className="flex justify-around items-center">
              <div className="text-center bg-white p-4 rounded-lg shadow-md h-64 w-64">
                <img src={communityAvatar} alt="Community" className="h-40 w-40 mx-auto mb-2"/>
                <a href="https://discord.gg/a2sG33hn" target="_blank" rel="noopener noreferrer">
                  <button className="text-purple-700 py-2 px-4 rounded hover:bg-purple-700 hover:text-white transition duration-300">Community</button>
                </a>
              </div>
              <div className="text-center bg-white p-4 rounded-lg shadow-md h-64 w-64">
                <img src={sponsorAvatar} alt="Sponsor/Partner" className="h-40 w-40 mx-auto mb-2"/>
                <button onClick={openSponsorModal} className="text-purple-700 py-2 px-4 rounded hover:bg-purple-700 hover:text-white transition duration-300">Sponsor/Partner</button>
              </div>
              <div className="text-center bg-white p-4 rounded-lg shadow-md h-64 w-64">
                <img src={participantAvatar} alt="Participant" className="h-40 w-40 mx-auto mb-2"/>
                <Link to="/contribute" className="text-white">
                  <button className="text-purple-700 py-2 px-4 rounded hover:bg-purple-700 hover:text-white transition duration-300">Participant</button>
                </Link>
              </div>
              <div className="text-center bg-white p-4 rounded-lg shadow-md h-64 w-64">
                <img src={socialAvatar} alt="Follow us on Social Media" className="h-40 w-40 mx-auto mb-2"/>
                <button onClick={openSocialModal} className="text-purple-700 py-2 px-4 rounded hover:bg-purple-700 hover:text-white transition duration-300">Follow us on Social Media</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isSponsorModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-lg w-full max-w-lg max-h-[80vh] mx-auto shadow-lg">
            <button 
              className="absolute top-2 left-2 text-gray-700 text-3xl font-bold"
              onClick={closeModals}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Sponsor/Partner Form</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-2 border rounded"/>
              <input type="text" placeholder="Company" className="w-full p-2 border rounded"/>
              <input type="email" placeholder="Email" className="w-full p-2 border rounded"/>
              <textarea placeholder="Message" className="w-full p-2 border rounded"></textarea>
              <button type="submit" className="bg-purple-700 text-white py-2 px-4 rounded w-full hover:bg-purple-800 transition duration-300">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* {isParticipantModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-lg w-full max-w-lg max-h-[80vh] mx-auto shadow-lg">
            <button 
              className="absolute top-2 left-2 text-gray-700 text-3xl font-bold"
              onClick={closeModals}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Participant Form</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-2 border rounded"/>
              <input type="email" placeholder="Email" className="w-full p-2 border rounded"/>
              <textarea placeholder="Participation Details" className="w-full p-2 border rounded"></textarea>
              <button type="submit" className="bg-purple-700 text-white py-2 px-4 rounded w-full hover:bg-purple-800 transition duration-300">Submit</button>
            </form>
          </div>
        </div>
      )} */}

      {isSocialModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-lg w-full max-w-lg max-h-[80vh] mx-auto shadow-lg">
            <button 
              className="absolute top-2 left-2 text-gray-700 text-3xl font-bold"
              onClick={closeModals}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Follow us on Social Media</h2>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <img src={QRTwitter} alt="Twitter QR" className="h-32 w-32"/>
                <p>Twitter</p>
              </div>
              <div className="text-center">
                <img src={QRFarcaster} alt="Farcaster QR" className="h-32 w-32"/>
                <p>Farcaster</p>
              </div>
              <div className="text-center">
                <img src={QRLinkedin} alt="Linkedin QR" className="h-32 w-32"/>
                <p>Linkedin</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
