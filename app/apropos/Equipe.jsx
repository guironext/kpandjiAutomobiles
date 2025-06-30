"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

function Equipe() {
  return (
    <section className="bg-white px-6 md:px-28 py-20">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-thin text-amber-600 border-l-8 border-amber-700 pl-4 mb-12"
      >
        Notre équipe
      </motion.h2>

      {/* Content Layout */}
      <div className="grid md:grid-cols-2 gap-12 items-center bg-emerald-50 p-4 md:p-8">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative h-[300px] md:h-[450px] overflow-hidden "
        >
          <Image
            src="/apropos/kpandji4.png"
            alt="Véhicules KPANDJI"
            fill
            className="object-cover rounded-xl"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-800 space-y-6"
        >
                  
          <p className="text-lg leading-relaxed text-justify font-light">
            <strong className="font-semibold">KPANDJI Automobiles</strong> est dirigée par une équipe passionnée et expérimentée, composée de profils pluridisciplinaires. Notre équipe est déterminée à conduire l’entreprise vers de nouveaux horizons tout en favorisant un environnement de travail inclusif, collaboratif et propice à l'innovation.<br/>
            Avec <strong className="font-semibold">KPANDJI Automobiles</strong>, l'avenir de l'automobile en Afrique se dessine. Nous sommes fiers de contribuer au développement de l’industrie automobile en Côte d'Ivoire, en apportant des solutions locales aux défis de la mobilité et de la croissance économique. Nous croyons que l'automobile peut jouer un rôle clé dans la transformation des infrastructures et dans la création d’opportunités pour les populations africaines.

          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Equipe