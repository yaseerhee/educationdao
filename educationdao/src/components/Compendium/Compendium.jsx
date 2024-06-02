// src/components/Compendium.jsx
import React, { useEffect, useState } from 'react';
import d from './education-dao.json'

const Compendium = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        // const response = d;
        // const response = await fetch('https://paragraph.xyz/_next/data/S549-WMcqphJ2IdkfsmND/@education-dao.json?blogname=%40education-dao',
        //   {
        //     "mode":"no-cors",
            
        //   }
        // );

        // const data = await response.json();        
        const data = d;        
        setPublications(data.pageProps.initialState.notes.allNotes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPublications();
  }, []);

  return (
    <div className="bg-dark-purple py-20 min-h-screen">
    <div className="max-w-7xl mx-auto text-white text-center px-6">
      <h2 className="text-4xl font-bold mb-8">Compendium</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {publications.map((publication) => (
          <div key={publication.id} className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">{publication.title}</h3>
            <p className="text-sm text-gray-600 mb-4">
              By {publication.authorDetails && publication.authorDetails[0]?.authorName} on {new Date(publication.publishedAt).toLocaleDateString()}
            </p>
            <p className="text-lg mb-4">{publication.subtitle}</p>
            {publication.cover_img && (
              <img src={publication.cover_img.img.src} alt={publication.title} className="mb-4 rounded" />
            )}
            <p className="text-lg mb-4">{publication.post_preview}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Compendium;
