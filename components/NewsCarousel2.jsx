'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dataNews = [
  {
    title: 'Assemblage du premier modèle: KPANDJI-DJETRAN',
    summary: "Lundi 10 février 2025, KAPNDJI AUTOMOBILES, commence le montage de son premier modèle de véhicule dénommé « Djetran ».",
    date: '13 février 2025',
    image: '/actu/atelier.png',
    content: [
      { papra: "Lundi 10 février 2025, KAPNDJI AUTOMOBILES, commence le montage de son premier modèle de véhicule dénommé « Djetran » c'est une Pickup 4X4 qui fait la fierté de l'entreprise" },
      { papra: "Lundi 10 février 2025, KAPNDJI AUTOMOBILES, commence le montage de son premier modèle de véhicule dénommé « Djetran » c'est une Pickup 4X4 qui fait la fierté de l'entreprise" },
      { papra: "Lundi 10 février 2025, KAPNDJI AUTOMOBILES, commence le montage de son premier modèle de véhicule dénommé « Djetran » c'est une Pickup 4X4 qui fait la fierté de l'entreprise" },
      { papra: "Lundi 10 février 2025, KAPNDJI AUTOMOBILES, commence le montage de son premier modèle de véhicule dénommé « Djetran » c'est une Pickup 4X4 qui fait la fierté de l'entreprise" },
      { papra: "Lundi 10 février 2025, KAPNDJI AUTOMOBILES, commence le montage de son premier modèle de véhicule dénommé « Djetran » c'est une Pickup 4X4 qui fait la fierté de l'entreprise" },
      { papra: "Lundi 10 février 2025, KAPNDJI AUTOMOBILES, commence le montage de son premier modèle de véhicule dénommé « Djetran » c'est une Pickup 4X4 qui fait la fierté de l'entreprise" },

    ]
  },
  {
    title: 'Les Autorités apportent leur soutien à KPANDJI',
    summary: 'We’ve secured exclusive rights to distribute luxury car brands throughout West Africa.',
    date: 'May 5, 2025',
    image: '/actu/autorites.png',
    content: [
      { papra: 'Supportive message...', image: '/actu/autorites.png' }
    ]
  },
  {
    title: 'Homologation des véhicules de KPANDJI AUTOMOBILES',
    summary: 'We are excited to unveil our latest eco-friendly vehicle.',
    date: '28 Mai 2025',
    image: '/actu/homologation.png',
    content: [
      { papra: 'Homologation process explained...' }
    ]
  },
  {
    title: 'Nouveau centre technique à Yopougon',
    summary: 'Centre de maintenance moderne à Yopougon.',
    date: 'June 10, 2025',
    image: '/actu/yopougon.png',
    content: [
      { papra: 'Centre équipé de technologies avancées...' }
    ]
  },
  {
    title: 'Partenariat avec le Ministère des Transports',
    summary: 'Protocole d’accord pour la sécurité routière.',
    date: 'June 20, 2025',
    image: '/actu/transport.png',
    content: [
      { papra: 'Partenariat stratégique pour la sécurité...' }
    ]
  }
];

export default function NewsCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const slidesToShow = 3;

  // Auto-play
  useEffect(() => {
    if (showModal) return; // pause if modal is open
    const interval = setInterval(() => paginate(1), 10000); // change every 5 sec
    return () => clearInterval(interval);
  }, [startIndex, showModal]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    const newIndex = (startIndex + newDirection + dataNews.length) % dataNews.length;
    setStartIndex(newIndex);
  };

  const visibleItems =
    dataNews.length <= slidesToShow
      ? dataNews
      : startIndex + slidesToShow <= dataNews.length
        ? dataNews.slice(startIndex, startIndex + slidesToShow)
        : [...dataNews.slice(startIndex), ...dataNews.slice(0, slidesToShow - (dataNews.length - startIndex))];

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-10">
      {/* Carousel */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={startIndex}
          initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleItems.map((item, i) => (
            <motion.div key={item.title + i} layout className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">{item.title}</h2>
                <p className="text-gray-700 line-clamp-3">{item.summary}</p>
              </div>
              <div className="flex items-center justify-center my-4">
                <button
                  onClick={() => {
                    setSelectedItem(item);
                    setShowModal(true);
                  }}
                  className="bg-[#9a6023] text-white px-4 py-2 rounded-full"
                >
                  Voir Plus
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <div className="absolute top-1/2 left-2 -translate-y-1/2 z-10">
        <button onClick={() => paginate(-1)} className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100">
          ←
        </button>
      </div>
      <div className="absolute top-1/2 right-2 -translate-y-1/2 z-10">
        <button onClick={() => paginate(1)} className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100">
          →
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className='hidden sm:flex justify-between items-center'>
                <div></div>
                <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedItem(null);
                }}
                className="absolute top-4 right-4 text-white hover:text-black text-sm bg-amber-700 rounded-xl px-3 py-1 cursor-pointer"
              >
                Fermer
              </button>
              </div>

              <h2 className="text-2xl font-bold mb-2">{selectedItem.title}</h2>
              <p className="text-sm text-gray-500 mb-6">
                {selectedItem.date}
              </p>

              <div className="sm:flex hidden items-center">
                {/* Media Left */}
                <div className="w-full lg:w-1/2">

                  <img
                    src={selectedItem.image}
                    alt=""
                    className="w-full h-auto rounded-xl"
                  />


                </div>

                {/* Scrollable Text Right */}
                <div className="w-full lg:w-1/2 max-h-96 overflow-y-auto pr-2">
                  {selectedItem.content.map((section, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-start  p-4"
                    >
                      {/* Scrollable Text Right */}

                      <p className="text-gray-700 text-base ">
                        {section.papra}
                      </p>

                    </div>
                  ))}

                  
                </div>
                
              </div>

              <div className="sm:hidden flex flex-col items-center">
                {/* Media Left */}
                <div className="w-full lg:w-1/2">

                  <img
                    src={selectedItem.image}
                    alt=""
                    className="w-full h-auto rounded-xl"
                  />


                </div>

                {/* Scrollable Text Right */}
                <div className="w-full lg:w-1/2  pr-2">
                  {selectedItem.content.map((section, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-start  p-4"
                    >
                      {/* Scrollable Text Right */}

                      <p className="text-gray-700 text-base ">
                        {section.papra}
                      </p>

                    </div>
                  ))}

                  
                </div>
                <div onClick={() => {
                  setShowModal(false);
                  setSelectedItem(null);
                }} 
                className="flex text-white hover:text-black text-sm bg-amber-700 rounded-xl px-3 py-1 cursor-pointer">
                  Fermer
                  </div>
              </div>
            </motion.div>
            
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
