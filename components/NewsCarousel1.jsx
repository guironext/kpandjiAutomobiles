'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dataNews = [
  {
    title: 'Assemblage du premier modèle: KPANDJI-DJETRAN',
    summary: 'A brand new state-of-the-art showroom is now open in Abidjan to serve you better.',
    date: 'May 12, 2025',
    image: '/actu/atelier.png',
    content: [
      { papra: 'Full content of the article jbkbkb goes here...' },
      { papra: 'Second paragraph here...' },
    ]
  },
  {
    title: 'Les Autorités apportent leur soutien à KPANDJI',
    summary: 'We’ve secured exclusive rights to distribute luxury car brands throughout West Africa.',
    date: 'May 5, 2025',
    image: '/actu/autorites.png',
    content: [
      { papra: 'Supportive message from officials...' },
      { papra: 'More about the partnership...' },
    ]
  },
  {
    title: 'Homologation des véhicules de KPANDJI AUTOMOBILES',
    summary: 'We are excited to unveil our latest eco-friendly vehicle, combining power and efficiency.',
    date: '28 Mai 2025',
    image: '/actu/homologation.png',
    content: [
      { papra: 'Vehicle homologation is an essential process...' },
      { papra: 'Details about compliance standards...' },
    ]
  },
  {
    title: 'Nouveau centre technique à Yopougon',
    summary: 'Ouverture d’un centre de maintenance moderne à Yopougon pour améliorer nos services.',
    date: 'June 10, 2025',
    image: '/actu/yopougon.png',
    content: [
      { papra: 'Le nouveau centre est équipé de technologies avancées...' },
    ]
  },
  {
    title: 'Partenariat avec le Ministère des Transports',
    summary: 'KPANDJI signe un protocole d’accord pour la sécurité routière.',
    date: 'June 20, 2025',
    image: '/actu/transport.png',
    content: [
      { papra: 'Un partenariat stratégique pour renforcer la sécurité...' },
    ]
  },
];

export default function NewsCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const slidesToShow = 3;
  const endIndex = (startIndex + slidesToShow) % dataNews.length;

  const visibleItems =
    dataNews.length <= slidesToShow
      ? dataNews
      : startIndex + slidesToShow <= dataNews.length
        ? dataNews.slice(startIndex, startIndex + slidesToShow)
        : [...dataNews.slice(startIndex), ...dataNews.slice(0, slidesToShow - (dataNews.length - startIndex))];

  const paginate = (newDirection) => {
    setDirection(newDirection);
    const newIndex = (startIndex + newDirection + dataNews.length) % dataNews.length;
    setStartIndex(newIndex);
  };

  return (
    <div className="relative w-full mx-auto px-10 py-10">
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
            <motion.div
              key={item.title + i}
              layout
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
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

      {/* Navigation */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 ">
        <button
          onClick={() => paginate(-1)}
          className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
        >
          ←
        </button>
      </div>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
        <button
          onClick={() => paginate(1)}
          className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
        >
          →
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedItem(null);
                }}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedItem.title}</h2>
              <p className="text-sm text-gray-500 mb-6">{selectedItem.date}</p>
              {selectedItem.content.map((section, i) => (
                <p key={i} className="mb-4 text-gray-700 leading-relaxed">
                  {section.papra}
                </p>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
