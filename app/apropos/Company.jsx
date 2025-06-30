"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

function Company() {
    return (
        <section className="bg-white px-6 md:px-28 py-20">
            {/* Section Title */}
            <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-thin text-amber-600 border-l-8 border-amber-700 pl-4 mb-12"
            >
                Qui sommes-nous ?
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
                        src="/apropos/kpandji1.png"
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
                    <h3 className="text-2xl font-semibold text-amber-700">
                        L’Excellence Ivoirienne dans l’Industrie Automobile
                    </h3>

                    <p className="text-lg leading-relaxed text-justify font-light">
                        <strong className="font-semibold">KPANDJI Automobiles</strong> est une entreprise ivoirienne pionnière dans le domaine de la construction et de l'assemblage de véhicules. Fondée dans l'objectif de contribuer au développement économique de
                        la Côte d'Ivoire et de renforcer l'industrialisation du secteur automobile en Afrique,
                        <strong className="font-semibold"> KPANDJI Automobiles</strong> se positionne comme un acteur majeur de l'industrie automobile en Afrique de l’Ouest.
                    </p>
                    <p className="text-lg leading-relaxed text-justify font-light">
                    À travers la marque <strong className="font-semibold"> KPANDJI</strong>, nous visons à offrir des véhicules de qualité, alliant performance, innovation et durabilité, tout en répondant aux besoins de mobilité croissants sur le continent africain. <br/> Nous ambitionnons de faire de Kpandji Automobiles un leader régional, un symbole d'excellence dans la conception et l’assemblage de véhicules qui répondent aux exigences des consommateurs africains tout en étant respectueux des normes environnementales. 
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Company
