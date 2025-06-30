'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dataNews = [
  {
    title: 'Assemblage du premier modèle: KPANDJI-DJETRAN',
    summary: "Lundi 10 février 2025, KAPNDJI AUTOMOBILES, commence le montage de son premier modèle de véhicule dénommé « Djetran ». ",
    date: '13 février 2025',
    image: '/actu/atelier.png',
    content: [
      { papra: "Le lundi 10 février 2025, KAPNDJI AUTOMOBILES, commence le montage de son premier modèle de véhicule dénommé « Djetran ». C'est un Pickup 4X4 de dernière génération. La Kpandji Djetran a un moteur turbo diesel de 2,5L, développe une puissance de 136 chevaux et une consommation de carburant de 8,1 L/100 km. Elle embarque une technologie ultra modern conçu pour votre confort et votre sécurité. " },
      { papra: "Notons que ce modèle a été monté dans les entrepôts de KPANDJI AUTOMOBILES en zone 4 par des jeunes ivoiriens issues de nos grandes écoles qui ont, en quelques jours, proccedé au montage des premiers véhicules de la marque KPANDJI." },
      { papra: "Le KPANDJI représente bien plus qu’un simple véhicule, il incarne une vision pour l’avenir de l’industrie automobile en Côte d’Ivoire. Avec ses caractéristiques adaptées aux besoins locaux, son impact économique positif et son engagement envers l’environnement, il pourrait bien révolutionner le secteur. Alors que le pays continue de se développer, le Kpandji pourrait devenir un symbole de fierté nationale et un moteur de croissance pour l’économie ivoirienne.  " },
    ]
  },
  {
    title: 'Les Autorités apportent ivoiriennes apportent leur soutien à KPANDJI',
    summary: "Après le montage de ses premiers véhicules, les autorités ivoiriennes apportent leur soutien à KPANDJI AUTOMOBILES.",
    date: '11 mars 2025',
    image: '/actu/autorites.png',
    content: [
      { papra: "Après le montage, avec succès, des premiers véhicules du premier modèle de KPANDJI dénommé « Djetran », plusieurs autorités ivoiriennes se sont succédées pour féliciter et soutenir l'entreprise KPANDJI AUTOMOBILES. Nous avons eu l'immense privilège d'accueillir plusieurs Ministres notamment, M. SOULEYMANNE DIARRASSOUBA, Ministre du Commerce et de L’Industrie, M. AMADOU KONE, Ministre des Transports, M. SIANDOU FOFANA, Ministre du Tourisme, M. EUGENE AKA AOULE,  Président du Conseil Economique, Social, Environnemental et Culturel, M. FAMAN TOURE,  Président de la Chambre de Commerce et de l’Industrie, le Commissaire Colonel-Major OLIVIER AKA et M. PAUL KOFFI KOFFI, Commissaire de l’UEMOA en Charge du Développement de l'Entreprise des Mines, de l’Energie et de l’Economie Numérique au sein de notre unité de montage. " },
      { papra: "Ces visites témoignent de leur intérêt et de leur engagement envers le développement des industries locales et l’innovation Made in Côte d’Ivoire. Durant ces rencontres, Ils a pris le temps de découvrir nos installations, d’évaluer nos processus et de tester nos véhicules avec enthousiasme. Ils ont salué la qualité de nos productions ainsi que notre engagement à répondre aux besoins des consommateurs ivoiriens. Leurs encouragements et leurs paroles inspirantes nous rappellent l’importance de notre mission qui est de propulser l’industrie automobile nationale vers de nouveaux sommets et faire briller le savoir-faire ivoirien." },
      { papra: "Ces soutiens résonnent comme une motivation pour toute notre équipe, déterminée à jouer un rôle clé dans la transformation industrielle de notre pays.  KPANDJI AUTOMOBILES est fier de contribuer à l’émergence d’une industrie locale compétitive et moderne.  Un grand merci aux autorités ivoiriennes pour leurs visites qui renforcent nos ambitions et notre foi en un avenir prometteur pour l’automobile ivoirienne." },
    ]
  },
  {
    title: 'Accueil triomphal de la population ivoirienne à la marque KPANDJI',
    summary: "C'est avec une très grande fierté que la population ivoirienne a accueilli KPANDJI le nouveau venu sur le marché industrie automobile en Côte d’Ivoire.  ",
    date: '5 mars 2025',
    image: '/actu/pop.png',
    content: [
      { papra: "Depuis le mois de mars 2025, la population observe un nouveau venu dans le trafique routier abidjanais ; les véhicules de la marque KAPNDJI. C'est avec une grande joie et même une très grande fierté que la population ivoirienne a manifesté un grand enthousiasme à la marque KPANDJI dont le premier modèle est dénommé « DJETRAN ». " },
      { papra: " C'est un Pickup 4X4 de dernière génération. La KPANDJI DJETRAN a un moteur turbo diesel de 2,5L, développe une puissance de 136 chevaux et une consommation de carburant de 8,1 L/100 km. Elle embarque une technologie ultra modern conçu pour votre confort et votre sécurité. " },
      { papra: "Au passage de la KPANDJI DJETRAN, ce sont les clameurs de joie qui éclatent dans les rues et bien des fois, c'est un attroupement de personnes qui désirent voir ou toucher la KPANDJI DJETRAN. Souhaitons que cet enthousiasme se concrétisera en commande pour l'entreprise. " },
     
    ]
  },
  {
    title: 'Homologation des véhicules de la marque KPANDJI',
    summary: "L'entreprise KPANDJI AUTOMOBILES reçoit l'Homologation de ses véhicules de la marque KPANDJI de la part des autorités ivoiriennes",
    date: '17 avril 2025',
    image: '/actu/homologation.png',
    content: [
      { papra: "Certifiés aux standards internationaux d’exigence en termes de sécurité et de sureté, les véhicules KPANDJI ont reçu l’homologation des mains de M. Amadou KONÉ, Ministre des Transports. L’obtention de ce certificat marque une étape décisive dans le processus de production et de commercialisation de nos véhicules « made in Côte d’Ivoire » et dans la zone CEDEAO." },
      { papra: "Nous exprimons notre profonde gratitude au Gouvernement avec à sa tête Monsieur Alassane OUATTARA, Président de la République de Côte d’Ivoire pour l’accompagnement  tout au long de ce processus. Cette reconnaissance permettra à KPANDJI Automobiles de poursuivre son engagement envers une industrialisation locale de qualité et de contribuer à l’essor économique de notre pays." },
      { papra: " Les véhicules KPANDJI sont désormais prêts à être commercialisés, offrant aux ivoiriens des moyens de locomotion robustes, fiables et adaptés aux besoins du marché." },
      
    ]
  },
  {
    title: "Visite du Ministre des Transports, M. Amadou Koné, à l’unité de montage de KPANDJI AUTOMOBILES",
    summary: 'Lundi 10 mars 2025, M. Amadou Koné a témoigné de l’intérêt et du soutien du gouvernement envers cette initiative 100 % ivoirienne.',
    date: '10 mars 2025',
    image: '/actu/amadou.png',
    content: [
      { papra: " C’est avec une immense fierté que nous partageons les moments forts de la visite du Ministre des Transports, M. Amadou Koné, à l’unité de montage de KPANDJI AUTOMOBILES. Ce lundi 10 mars 2025, M. Amadou Koné a honoré notre fondateur, M. N’Da Kouamé, de sa présence, témoignant ainsi de l’intérêt et du soutien du gouvernement envers cette initiative 100 % ivoirienne. Lors de cette visite, le Ministre a eu l’occasion de tester nos véhicules déjà montés et de saluer la qualité et la modernité de nos créations."},
      { papra: "Ses mots d’encouragement et ses conseils avisés pour accélérer la mise en circulation des automobiles KPANDJI résonnent comme un véritable appel à l’action pour tous ceux qui croient en l’avenir de l’industrie automobile ivoirienne. Cette rencontre s’inscrit dans la vision du Président de la République, SEM. Alassane Ouattara, qui aspire à voir émerger des champions nationaux capables de porter haut les couleurs de la Côte d’Ivoire. KPANDJI AUTOMOBILES est fier de contribuer à cette ambition en proposant des véhicules modernes, conçus avec passion et savoir-faire, pour répondre aux besoins des Ivoiriens et valoriser notre industrie locale.  "},
      { papra: " Nous remercions chaleureusement M. Amadou Koné pour son soutien indéfectible et sa reconnaissance envers notre travail. Cette visite renforce notre détermination à poursuivre notre mission et à faire de KPANDJI une fierté nationale. Découvrez les images exclusives de cette visite mémorable et rejoignez-nous dans cette aventure unique pour bâtir un avenir prometteur pour le secteur automobile ivoirienne "},
    ]
  },
  {
    title: 'Le Ministre du Commerce et de l’Industrie, au sein de notre unité de montage.',
    summary: "Nous avons eu l'immense privilège d'accueillir M. Souleymane Diarrassouba, Ministre du Commerce et de l’Industrie, au sein de notre unité de montage.",
    date: '21 mars 2025',
    image: '/actu/souleymane.png',
    content: [
      { papra: " Durant cette rencontre, le Ministre a pris le temps de découvrir nos installations, d’évaluer nos processus et de tester nos véhicules avec enthousiasme. Il a salué la qualité de nos productions ainsi que notre engagement à répondre aux besoins des consommateurs ivoiriens. "},
      { papra: " Ses encouragements et ses mots inspirants nous rappellent l’importance de notre mission : propulser l’industrie automobile nationale vers de nouveaux sommets et faire briller le savoir-faire ivoirien. Ce soutien résonne comme une motivation pour toute notre équipe, déterminée à jouer un rôle clé dans la transformation industrielle de notre pays. "},
      { papra: " KPANDJI AUTOMOBILES est fier de contribuer à l’émergence d’une industrie locale compétitive et moderne. Un grand merci au Ministre Souleymane Diarrassouba pour cette visite qui renforce nos ambitions et notre foi en un avenir prometteur pour le secteur automobile ivoirienne."},
    ]
  }
];

export default function NewsCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Responsive slidesToShow logic
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesToShow(1);
      } else if (width < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  // Auto-play
  useEffect(() => {
    if (showModal) return;
    const interval = setInterval(() => paginate(1), 10000);
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
    <div className="relative w-full mx-auto px-12 py-10">
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
              <img src={item.image} alt={item.title} className="w-full h-72 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">{item.title}</h2>
                <p className="text-gray-700 text-justify line-clamp-3">{item.summary}</p>
              </div>
              <div className="flex items-center justify-center my-4">
                <button
                  onClick={() => {
                    setSelectedItem(item);
                    setShowModal(true);
                  }}
                  className="bg-[#9a6023] text-white px-4 py-2 rounded-full cursor-pointer"
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
              <p className="text-sm text-gray-500 mb-6">{selectedItem.date}</p>

              {/* Desktop View */}
              <div className="sm:flex hidden items-center">
                <div className="w-full lg:w-1/2">
                  <img src={selectedItem.image} alt="" className="w-full h-auto rounded-xl" />
                </div>
                <div className="w-full lg:w-1/2 max-h-96 overflow-y-auto pr-2">
                  {selectedItem.content.map((section, i) => (
                    <div key={i} className="flex flex-col items-start px-4 pt-1.5">
                      <p className="text-gray-700 text-base text-justify">{section.papra}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile View */}
              <div className="sm:hidden flex flex-col items-center">
                <div className="w-full lg:w-1/2">
                  <img src={selectedItem.image} alt="" className="w-full h-auto rounded-xl" />
                </div>
                <div className="w-full lg:w-1/2 pr-2">
                  {selectedItem.content.map((section, i) => (
                    <div key={i} className="flex flex-col items-start px-4 pt-1.5">
                      <p className="text-gray-700 text-base text-justify">{section.papra}</p>
                    </div>
                  ))}
                </div>
                <div
                  onClick={() => {
                    setShowModal(false);
                    setSelectedItem(null);
                  }}
                  className="flex text-white hover:text-black text-sm bg-amber-700 rounded-xl px-3 py-1 cursor-pointer"
                >
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
