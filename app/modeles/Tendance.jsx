'use client'

import React, { useState } from 'react'
import DOMPurify from 'dompurify'
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import Button from './Button';
import { getVehiculeById } from '../../lib/vehicules';



const carData = [
  {
    id: 1,
    image: "/assets/accueil/tendence/Djet.png",
    imgInt1: "/assets/accueil/tendence/DjetInt1.png",
    imgInt2: "/assets/accueil/tendence/DjetInt6.png",
    name: "KPANDJI DJETRAN",
    description:
      "Avec un moteur turbo diesel de 2,5L, elle développe une puissance de 136 chevaux et une consommation de carburant de 8,1 L/100 km. Prenez la route en toute confiance avec un moteur de 16 soupapes qui combine économie de carburant,faible bruit et performances exceptionnelles à haute vitesse,dans un habitacle qui embarque une technologie ultra modern conçu pour votre confort et votre sécurité.",
  },
  {
    id: 2,
    image: "/assets/accueil/tendence/Lag.png",
    imgInt1: "/assets/accueil/tendence/Lag3.png",
    imgInt2: "/assets/accueil/tendence/Lag9.png",
    name: "KPANDJI Lagare ",
    description:
      "KPANDJI Lagare, SUV moderne avec un design élégant et une motorisation hybride. La voiture dispose d'une autonomie électrique pure de 150 km (conditions CLTC), d'une autonomie complète de 1,172 km et d'une consommation de carburant globale de seulement 0,7 L aux 100 km.",
  },
  {
    id: 3,
    image: "/assets/accueil/tendence/Sou.png",
    imgInt1: "/assets/accueil/tendence/Sou6.png",
    imgInt2: "/assets/accueil/tendence/Sou7.png",
    name: "KPANDJI Souralai",
    description:
      "Ses lignes audacieuses sur le capot et les flancs lui confèrent une allure robuste. L'avant se distingue par sa calandre agressive, qui équilibre la silhouette grâce à des phares modernes et bien coordonnés. Les jantes en aluminium et les détails chromés à l'extérieur rappellent l'allure robuste et élégante de ce véhicule.",
  },

  {
    id: 4,
    image: "/assets/accueil/tendence/Lat.png",
    imgInt1: "/assets/accueil/tendence/Lat3.png",
    imgInt2: "/assets/accueil/tendence/Lat4.png",
    name: "KPANDJI LATHAYE",
    description:
      "La S.U.V. KPANDJI Lathaye s'impose comme un concurrent redoutable sur la route. Équipé d'un ingénieux moteur 2.0 T GDI turbo-compressé associé à une transmission CVT à 8 vitesses, il atteint des vitesses impressionnantes de 210 km/h. Délivrant un couple maximal de 380 Nm, c'est un véritable bolide qui redéfinit la performance à chaque voyage",
  },
  {
    id: 5,
    image: "/assets/accueil/tendence/Yen.png",
    imgInt1: "/assets/accueil/tendence/Yen4.png",
    imgInt2: "/assets/accueil/tendence/Yen5.png",
    name: "KPANDJI Yenin",
    description:
      "En termes de puissance, la Kpandji Yenin sera équipée d'un moteur atmosphérique de 1,6 L avec une puissance maximale de 93 kW, un couple maximal de 168 N·m et une consommation de carburant déclarée de 5,6 L/100 km. La Kpandji Yenin est équipée d'un nouveau système de connexion intelligent.",
  },
  {
    id: 6,
    image: "/assets/accueil/tendence/Cav.png",
    imgInt1: "/assets/accueil/tendence/Cav1.png",
    imgInt2: "/assets/accueil/tendence/Cav5.png",
    name: "KPANDJI CAVALLY",
    description:
      "Avec ses lignes aérodynamiques la KPANDJI CAVALLY allie ses capacités tout-terrain et son esthétique robuste. L'ensemble du véhicule est doté de matériaux doux au toucher, augmentant considérablement le luxe et le confort. En termes de système d'alimentation, le système de transmission intégrale à temps partiel peut passer à un mode de transmission intégrale à basse vitesse, offrant un support robuste pour la conduite hors route.",
  },
  {
    id: 14,
    name: "KPANDJI Laigoh",
    image: "/assets/accueil/tendence/Laig.png",
    imgInt1: "/assets/accueil/tendence/LaigInt1.png",
    imgInt2: "/assets/accueil/tendence/LaigInt2.png",
    description:
      "La Kpandji Laigoh est un véhicule utilitaire de 5 à 7 places, équipée d'un moteurs 1,5 litre et développe une puissance de 113 chévaux. La boîte de vitesses est une boîte manuelle de 5 vitesse et elle un reservoir de 50 litres avec une Suspension indépendante McPherson en avant et une suspension à ressort de lames 5 ressorts hélicoïdaux de bielle en arrière.",
  },
  {
    id: 8,
    name: "KPANDJI farima Mini-Bus",
    image: "/assets/accueil/tendence/Far.png",
    imgInt1: "/assets/accueil/tendence/FarInt2.png",
    imgInt2: "/assets/accueil/tendence/FarInt1.png",
    description:
      "La KPANDJI FARIMA Mini-Bus est un Mini-Bus de 15 places à vitre coulissante, large et performant, équipé d'un moteur essence de 2693 cm³ et d'un moteur diesel CUMMINS 2,8 L. La KPANDJI FARIMA Mini-Bus est un modèle très connue et populaire, il est également très prisé dans le millieu du transport.",
  },
  {
    id: 16,
    name: "KPANDJI farima Mini-Van",
    image: "/assets/accueil/tendence/Farvan.png",
    imgInt1: "/assets/accueil/tendence/Farvan2.png",
    imgInt2: "/assets/accueil/tendence/Farvan1.png",
    description:
      "La KPANDJI FARIMA MINI-VAN à toit plat adoptent tous un design 4 portes et 10 places avec un axe court inspiré du Hiace. Elles sont adaptés à la distribution urbaine de marchandises dans divers secteurs tels que le e-commerce, les supermarchés, la distribution d'eau, la distribution logistique, les fruits et légumes, les matériaux de construction et les chaudières domestiques.",
  },

  {
    id: 9,
    name: "KPANDJI kass Gbaka",
    image: "/assets/accueil/tendence/Kac.png",
    imgInt1: "/assets/accueil/tendence/KacInt1.png",
    imgInt2: "/assets/accueil/tendence/KacInt2.png",
    description:
      "La KPANDJI KASS GBAKA est une voiture qui n’est pas seulement un moyen de transport, mais aussi une fusion de pragmatisme et d’esthétique industrielle. C'est un véhicules de 21 sièges utilitaire produit par KPANDJI AUTOMOBILES. C'est un autobus léger à large fuselage supérieur et polyvalent, conçu pour le transport urbain et la logistique, il offre une combinaison de performance, d'efficacité énergétique et de confort.",
  },
  {
    id: 13,
    name: "KPANDJI kass Fourgon",
    image: "/assets/accueil/tendence/Kacvan.png",
    imgInt1: "/assets/accueil/tendence/Kacvan1.png",
    imgIint2: "/assets/accueil/tendence/Kacvan2.png",
    description:
      "La KPANDJI KASS FOURGON est un modèle à toit mi-haut à essieu moyen présente des dimensions de 5 492 x 2 069 x 2 319 mm (longueur, largeur et hauteur) et un volume de 8,8 m³, offrant un espace de chargement et de rangement spacieux et modulable. Elle est dotée de 3 sièges confortables. ",
  },
  {
    id: 20,
    name: "KPANDJI kass VIP",
    image: "/assets/accueil/tendence/Kacvip.png",
    imgInt1: "/assets/accueil/tendence/Kacvip1.png",
    imgInt2: "/assets/accueil/tendence/Kacvip2.png",
    description:
      "La KPANDJI KASS VIP,  est  un « château ou bureau mobile » pouvant offrir tout le confort dont vous auriez besoin sur les routes. Elle est Très pratique pour le transport des personnes et adéquat pour tout type de terrain. Elle peut emabrquer 9 à 10 sièges et être aménagée en espaces de rangement conviviaux, machine à café, ordinateurs ou matériel de camping.",
  },
  {
    id: 12,
    name: "KPANDJI farima Mini-Truck",
    image: "/assets/accueil/tendence/Farpic.png",
    imgInt1: "/assets/accueil/tendence/Farpic2.png",
    imgInt2: "/assets/accueil/tendence/Farpic1.png",
    description:
      "La KPANDJI farima Mini-Truck est connu pour sa fiabilité, sa durabilité et son rapport coût-efficacité, ce qui en fait un choix populaire pour les entreprises qui ont besoin d'une solution de transport fiable. Transport de marchandises générales: Convient pour le transport d'une variété de marchandises, y compris des matériaux de construction, des produits agricoles et des marchandises générales. ",
  },
  {
    id: 10,
    name: "KPANDJI Swatro",
    image: "/assets/accueil/tendence/Swa.png",
    imgInt1: "/assets/accueil/tendence/SwaInt1.png",
    imgInt2: "/assets/accueil/tendence/SwaInt2.png",
    description:
      "La KPANDJI SWATRO Cargo Truck est un camion utilitaire léger produit par KPANDJI AUTOMOBILES, sous la marque SWATRO. Conçu pour le transport de marchandises en milieu urbain et rural, il offre une capacité de charge utile allant de 3 à 8 tonnes, selon la configuration choisie.",
  },

  // Add more car objects here
];

const fancyImageVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.9, rotate: -2 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    rotate: 1,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

function Tendance() {
    
  const [form, setForm] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
    voiture: ''
  })

  const [loading, setLoading] = useState(false)

  
  const sanitizeInput = (input) => DOMPurify.sanitize(input);

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: sanitizeInput(value), voiture: selectedCar.name }))
  }


  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^\+?\d{9,15}$/

    if (!form.name || !form.email || !form.whatsapp || !form.message) {
      alert('Veuillez remplir tous les champs.')
      return false
    }

    if (!emailRegex.test(form.email)) {
      alert('Adresse email invalide.')
      return false
    }

    if (!phoneRegex.test(form.whatsapp)) {
      alert('Numéro WhatsApp invalide.')
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        alert('Message envoyé avec succès !')
        setForm({ name: '', email: '', whatsapp: '', message: '', voiture: '' })
      } else {
        alert("Erreur lors de l'envoi du message.")
      }
    } catch (err) {
      alert('Erreur réseau, veuillez réessayer.')
    } finally {
      setLoading(false)
      setShowQuotationModal(!showQuotationModal)
      setShowDetailsModal(!showDetailsModal)
    }
  }


  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const [selectedId, setSelectedId] = useState(null);

  const [showQuotationModal, setShowQuotationModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const selectedCar = selectedId ? getVehiculeById(selectedId) : null;

  const voirDetails = (id) => {
    setSelectedId(id)
    setShowDetailsModal(true)

  }

  const closeCotation = (id) => {
    setShowQuotationModal(!showQuotationModal)
    setSelectedId(id)
    setShowDetailsModal(!showDetailsModal)

  }

  return (
    <>
      <div className=' hidden sm:flex sm:flex-col gap-8 px-4 mb-22 ' id='tendance'>
        {carData.map((car, index) => (
          <motion.div
            key={car.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fancyImageVariant}
          >
            <div className='flex items-center w-full h-full bg-slate-50 rounded-lg border-t-1 border-t-amber-600 border-b border-b-black pb-1 gap-y-16'>
              <div className="w-1/2 relative">
                {/* Background Layer */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }} // 👈 animates every time it's 50% in view
                  variants={fadeUp}
                  className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-600 to-amber-900 rounded-t-xl z-0 w-1/2 mt-10 ml-4" />
                <div className='h-44' />

                {/* Car Image */}
                <motion.img
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }} // 👈 animates every time it's 50% in view
                  variants={fadeUp}
                  src={car.image}
                  alt="car"
                  className="w-full h-full object-cover relative z-10 rounded-xl"
                />
              </div>
              <div className="w-1/2 relative flex flex-col  justify-between gap-y-4">
                {/* Top Section: Text */}

                <h2 className="text-4xl italic font-extralight uppercase text-gray-950 py-4">{car.name}</h2>
                <div className="text-gray-600 my-1  line-clamdiv-6  italic text-justify text-lg p-4">
                  {car.description}
                </div>

                <div className='flex  gap-x-4 px-4'>

                  {/* Middle Section: Image 1 */}
                  <div className="relative w-full">
                    <img
                      src={car.imgInt1}
                      alt="Image 1"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  {/* Bottom Section: Image 2 */}
                  <div className="relative  w-full">
                    <img
                      src={car.imgInt2}
                      alt="Image 2"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                </div>
                <div className="p-4 w-full flex justify-end items-center bg-black">
                  <div onClick={() => voirDetails(car.id)}>
                    <Button text="Details" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

      </div>


      <div className='flex flex-col sm:hidden gap-8 px-4 '>
        {carData.map((car, index) => (
          <motion.div
            key={car.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fancyImageVariant}
          >
            <div className='flex flex-col items-center w-full bg-slate-200 rounded-lg border-t-4 border-t-amber-600 border-b-2 border-b-black pb-1'>
              <div className="w-full relative">
                {/* Background Layer */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }} // 👈 animates every time it's 50% in view
                  variants={fadeUp}
                  className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-600 to-amber-900 rounded-t-xl z-0 w-1/2 mt-10 ml-4" />
                <div className='h-44' />

                {/* Car Image */}
                <motion.img
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }} // 👈 animates every time it's 50% in view
                  variants={fadeUp}
                  src={car.image}
                  alt="car"
                  className="w-full h-full object-cover relative z-10 rounded-xl"
                />
              </div>
              <div className="w-full relative flex flex-col  justify-between gap-y-4">
                {/* Top Section: Text */}

                <h2 className="text-4xl italic font-extralight uppercase text-gray-950 py-4">{car.name}</h2>
                <div className="text-gray-600 my-1  line-clamdiv-6  italic text-justify text-lg p-4">
                  {car.description}
                </div>

                <div className='flex  gap-x-4 px-4'>

                  {/* Middle Section: Image 1 */}
                  <div className="relative w-full">
                    <img
                      src={car.imgInt1}
                      alt="Image 1"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  {/* Bottom Section: Image 2 */}
                  <div className="relative  w-full">
                    <img
                      src={car.imgInt2}
                      alt="Image 2"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                </div>
                <div className="p-4 w-full flex justify-end items-center bg-black">
                  <div onClick={() => setSelectedId(car.id)}>
                    <Button text="Details" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

      </div>


      {/* Modal */}

      <AnimatePresence>
        {showDetailsModal && selectedCar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDetailsModal(false)}
            className="fixed inset-0 bg-black bg-opacity-50 hidden sm:flex items-center justify-center z-50 px-4 "
          >
            <div className="bg-white rounded-lg w-11/12 h-5/6 flex shadow-xl justify-between relative overflow-hidden  ">
              <div className='flex flex-col gap-y-2 w-3/5 bg-emerald-50 p-4'>
                <motion.div
                  layoutId={`card-${selectedCar.id}`}
                  className='relative w-full h-full'
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={selectedCar.image}
                    alt={selectedCar.name}
                    width={550}
                    height={400}
                    objectFit="cover"
                    className="mx-auto"
                  />
                </motion.div>
                <div>
                  <div className="flex gap-4 overflow-x-auto">
                    {selectedCar.thumbsImages.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Car ${index + 1}`}
                        className={`h-36 w-48 object-cover  cursor-pointer  transition-all rounded-2xl border   : 'border-transparent'
                      }`}

                      />
                    ))}
                  </div>
                </div>
              </div>


              <div className='w-2/5  p-4 flex flex-col gap-y-4'>

                <h2 className="text-2xl font-bold my-4 uppercase text-blue-700 text-start">{selectedCar.name}</h2>

                <div className="mb-3 text-gray-600 h-full overflow-y-auto">{
                  selectedCar.description && selectedCar.description.map((item, key) => (
                    <div key={key}>
                      <h3 className="text-lg font-bold mt-6">{item.title}</h3>
                      <div className="text-gray-600">{
                        item.description.map((item, key) => (
                          <div key={key} className="flex items-center gap-y-3 gap-x-5">
                            <p className="text-gray-800 font-semibold flex-nowrap text-sm">{item.label}:</p>
                            <p className="text-gray-700 text-sm">{item.value}</p>
                          </div>
                        ))
                      }</div>
                    </div>
                  ))
                }</div>


                <div className="flex items-center justify-between">

                    <button
                      className="mt-4 px-4 py-2 bg-amber-600 text-white rounded border-x-4 border-x-black "
                      onClick={() => setSelectedId(null)}
                    >
                      Fermez
                    </button>

                 
                  <button
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded border-x-4 border-x-amber-600 "
                    onClick={() => setShowQuotationModal(true)}
                  >
                    Cotation
                  </button>



                </div>

              </div>


            </div>

          </motion.div>
        )}
      </AnimatePresence>


      <AnimatePresence>
        {selectedCar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 bg-black bg-opacity-50 flex  sm:hidden items-center justify-center z-50 px-4 "
          >
            <div className="bg-white rounded-lg w-full h-5/6  flex flex-col shadow-xl justify-between relative  overflow-scroll ">
              <div className='flex flex-col gap-y-2 w--full bg-emerald-50 p-4'>
                <motion.div
                  layoutId={`card-${selectedCar.id}`}
                  className='relative w-full h-full'
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={selectedCar.image}
                    alt={selectedCar.name}
                    width={550}
                    height={400}
                    objectFit="cover"
                    className="mx-auto"
                  />
                </motion.div>
                <div>
                  <div className="flex gap-4 overflow-x-auto">
                    {selectedCar.thumbsImages.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Car ${index + 1}`}
                        className={`h-36 w-48 object-cover  cursor-pointer  transition-all rounded-2xl border   : 'border-transparent'
                      }`}

                      />
                    ))}
                  </div>
                </div>
              </div>


              <div className='w-full  p-4 flex flex-col gap-y-4'>

                <h2 className="text-2xl font-bold my-4 uppercase text-blue-700 text-start">{selectedCar.name}</h2>

                <div className="mb-3 text-gray-600 h-full overflow-y-auto">{
                  selectedCar.description && selectedCar.description.map((item, key) => (
                    <div key={key}>
                      <h3 className="text-lg font-bold mt-6">{item.title}</h3>
                      <div className="text-gray-600">{
                        item.description.map((item, key) => (
                          <div key={key} className="flex items-center gap-y-3 gap-x-5">
                            <p className="text-gray-800 font-semibold flex-nowrap text-sm">{item.label}:</p>
                            <p className="text-gray-700 text-sm">{item.value}</p>
                          </div>
                        ))
                      }</div>
                    </div>
                  ))
                }</div>


                <div className="flex items-center justify-between">
                  
                    <button
                      className="mt-4 px-4 py-2 bg-amber-600 text-white rounded border-x-4 border-x-black "
                      onClick={() => setSelectedId(null)}
                    >
                      Fermez
                    </button>


                  <button
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded border-x-4 border-x-amber-600 "
                    onClick={() => setShowQuotationModal(true)}
                  >
                    Cotation
                  </button>

                </div>

              </div>


            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/****************************************************Cotation +++++++++++++++++++++++++++++++++++++++++++++++++*/}

      <AnimatePresence>
        {showQuotationModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center z-[100]"
          >

            <section className="container mx-auto bg-transparent   h-5/6 " >


              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >

                </motion.div>
                {/*================================================cotaion variables start================================*/}
                {/* Contact Form */}
                <motion.form
                  className="bg-white shadow-lg rounded-xl p-8 space-y-2"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  onSubmit={handleSubmit}
                >
                  {selectedCar && (
                    <div className="grid md:grid-cols-2 gap-12">
                      {/* Contact Info */}
                      <motion.div
                        className="bg-white shadow-lg rounded-xl p-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex justify-center text-center border border-black/30">Demande de Cotation</h3>

                        <div className='flex flex-col items-start gap-y-4 '>
                          <p className='text-black '>Je me nomme :</p>
                          <input
                            type="text"
                            name="name"
                            placeholder="Nom complet"
                            value={form.name}
                            onChange={handleChange}
                            maxLength={100}
                            autoComplete="off"
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600"
                            required
                          />

                          <input
                            type="text"
                            name="voiture"
                            placeholder="Nom modèle voiture "
                            value={selectedCar.name}
                            onChange={handleChange}
                            maxLength={100}
                            autoComplete="off"
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600 hidden"
                            required
                          />


                        </div>

                        Je souhaiterais avoir une cotation pour le modèle:
                        <div className="mt-6">
                          <Image
                            src={selectedCar.image}
                            alt={selectedCar.name}
                            width={550}
                            height={400}
                            objectFit="cover"
                            className="mx-auto"
                          />
                          <p className=' text-center text-2xl font-bold text-black uppercase '>

                            {selectedCar.name}
                          </p>
                        </div>
                      </motion.div>

                      <div className=' flex flex-col gap-y-4'>

                        <input
                          type="email"
                          name="email"
                          placeholder="Adresse email"
                          value={form.email}
                          onChange={handleChange}
                          maxLength={100}
                          autoComplete="off"
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600"
                          required
                        />

                        <input
                          type="tel"
                          name="whatsapp"
                          placeholder="Numéro WhatsApp"
                          value={form.whatsapp}
                          onChange={handleChange}
                          pattern="^\+?\d{9,15}$"
                          title="Veuillez entrer un numéro valide (ex: +2250123456789)"
                          maxLength={15}
                          autoComplete="off"
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600"
                          required
                        />

                        <textarea
                          name="message"
                          placeholder="Laissez nous votre message si vous voulez des informations particulières"
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          maxLength={1000}
                          autoComplete="off"
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600"

                        ></textarea>

                        <div className='flex flex-col gap-y-8'>
                          <button
                            type="submit"
                            disabled={loading}
                            className={`w-full font-semibold py-3 rounded transition ${loading
                              ? 'bg-gray-400 cursor-not-allowed text-white'
                              : 'bg-amber-600 hover:bg-black text-white'
                              }`}
                          >
                            {loading ? 'Envoi en cours...' : 'Envoyer'}
                          </button>

                          
                            <button
                              className="mt-4 px-4 py-2 bg-amber-600 text-white rounded w-full border-x-4 border-x-black "
                              onClick={closeCotation}
                            >
                              Fermez
                            </button>

                        
                        </div>
                      </div>
                    </div>
                  )}
                </motion.form>

                {/* Optional Map */}

              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>


    </>
  )
}

export default Tendance