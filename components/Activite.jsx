"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import Title from './Title'

function Activite() {
    return (
        <>
            <Title title="Nos Faits" />

            <div className="bg-gradient-to-br from-emerald-50 to-white text-gray-900">
                <section className="py-20 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">

                        {/* Left: Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="w-full md:w-1/2 relative h-[300px] md:h-[450px] overflow-hidden rounded-2xl shadow-xl"
                        >
                            <Image
                                src="/actu/students.png"
                                alt="Véhicules KPANDJI"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                        </motion.div>

                        {/* Right: Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="w-full md:w-1/2 text-gray-800"
                        >
                            <h2 className="text-xl md:text-2xl font-extrabold leading-snug mb-6 text-black">
                                <span className="text-red-600">KPANDJI AUTOMOBILES</span> au cœur de la formation des futurs marketeurs
                            </h2>

                            <p className="text-lg text-justify font-light leading-relaxed space-y-4">

                                Dans le cadre de sa politique de Responsabilité Sociétale d’Entreprise (RSE), <strong className="font-semibold"> KPANDJI AUTOMOBILES </strong> a eu l’honneur d’accompagner les étudiants de 2ᵉ année de Marketing de l’École de Commerce et de Gestion (ECG) dans la réalisation de leur projet d’école, portant fièrement sur notre marque.<br />
                                Ce partenariat éducatif marque notre volonté d’investir dans le développement des compétences locales et de valoriser la jeunesse ivoirienne.
                                En permettant aux étudiants d'explorer les réalités d'une marque automobile 100 % ivoirienne, <strong className="font-semibold"> KPANDJI AUTOMOBILES </strong> s’affirme comme un acteur engagé dans le partage de savoirs, l’employabilité et l’innovation locale.<br />
                                Bravo aux étudiants pour leur créativité, leur professionnalisme et leur engagement ! Nous croyons en cette jeunesse ambitieuse qui contribuera demain à bâtir une Côte d’Ivoire dynamique et compétitive.

                            </p>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Activite
