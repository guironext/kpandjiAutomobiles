'use client'
import { motion } from 'framer-motion'

export default function Parallaxvideo() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video2.mp4" type="video/mp4" />
     
      </video>

      {/* Overlay (optional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10" />

      {/* Foreground Content */}
      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-7xl font-bold mb-4 drop-shadow-lg text-amber-700 ">Chez Kpandji Automobile</h1>
        <p className="text-5xl max-w-2xl drop-shadow-md text-amber-300">
          Nous repoussons les limites de l'innovation pour chaque trajet
        </p>
      </motion.div>
    </div>
  )
}
