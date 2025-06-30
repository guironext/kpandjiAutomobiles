'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const texts = [
    "Découvrez des voitures robustes", 
    "fiables, élégantes et innovantes", 
    "adaptées à nos réalités africaines"]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-4/5 object-cover z-0 border-0"
        src="/header.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute left-0   bottom-0   h-4/5 bg-black/10 z-30 " /> 

      <div className="absolute left-0   bottom-0 top-3/5  md:gap-y-4 px-2 py-3 rounded-3xl z-20 flex flex-col  bg-black/25 ml-2.5 items-start w-fit h-fit">
      
        <div className="text-amber-900 font-bold text-2xl md:text-4xl  text-center px-4"
        >
          KPANDJI AUTOMOBILES
        </div>

      {/* Centered Animated Text */}
      <div className="absolute inset-0 flex left-0 top-3/6 h-4/5 z-20 ">
      
      </div>
        <motion.div
          key={index} // triggers re-animation on text change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-amber-600 text-2xl md:text-4xl font-medium text-center px-4"
        >
          {texts[index]}
        </motion.div>
      </div>
    </div>
  )
}
