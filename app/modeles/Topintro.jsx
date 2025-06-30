'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

function Topintro() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/modeles/bg.jpg"
        alt="Véhicules KPANDJI"
        fill
        className="object-cover z-0 "
        priority
      />

      {/* Overlay with content */}
      <div className="absolute inset-0 mt-6  z-10 flex items-center justify-center px-6">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center md:text-left bg-amber-900/70 px-3.5 py-2"
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-white bg-amber-600 px-2.5 py-1.5">KPANDJI AUTOMOBILES</span> met à votre dispositions des modèles de véhicules Assemblés avec précision et passion.
            </h1>
            <p className="text-lg md:text-xl mb-1 max-w-md text-shadow-cyan-600 bg-amber-900/70 px-1.5 py-2">
               Le futur de l’automobile Made in Côte d'Ivoire.
            </p>
           
          </motion.div>

          {/* Image section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full  md:w-[1050px] h-[900px] md:h-[900px]" // Increased size here
          >
            <Image
              src="/modeles/djet1.png"
              alt="Véhicule KPANDJI DJET"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Topintro
