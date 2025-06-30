"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

function Ecg() {
    return (
        <>
            <section className="bg-white px-6 md:px-28 hidden md:block">
                <div className="grid md:grid-cols-2 gap-12 items-center bg-emerald-50 p-4 md:p-8">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-gray-800 space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-amber-700">
                            Restitution de l'étude des étudiants de l'ECG d'Abidjan sur la "Marque KPANDJI "

                        </h3>
                        <div className="text-lg leading-relaxed text-justify font-light">
                        <strong className="font-semibold">KPANDJI Automobiles</strong> au cœur de la formation des futurs marketeurs
                            Dans le cadre de sa politique de Responsabilité Sociétale d’Entreprise (RSE), KPANDJI AUTOMOBILES a eu l’honneur d’accompagner les étudiants de 2ᵉ année de Marketing de l’École de Commerce et de Gestion (ECG) dans la réalisation de leur projet d’école, portant fièrement sur notre marque.<br/>
                            Ce partenariat éducatif marque notre volonté d’investir dans le développement des compétences locales et de valoriser la jeunesse ivoirienne. En permettant aux étudiants d'explorer les réalités d'une marque automobile 100 % ivoirienne, KPANDJI AUTOMOBILES s’affirme comme un acteur engagé dans le partage de savoirs, l’employabilité et l’innovation locale.<br/>
                            Bravo aux étudiants pour leur créativité, leur professionnalisme et leur engagement ! Nous croyons en cette jeunesse ambitieuse qui contribuera demain à bâtir une Côte d’Ivoire dynamique et compétitive.
                          
                        </div>



                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative h-[300px] md:h-[450px] overflow-hidden "
                    >
                        <Image
                            src="/apropos/ecg.png"
                            alt="Véhicules KPANDJI"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </motion.div>

                </div>
            </section>


            <section className="bg-white px-6 md:px-28 md:hidden block">
                <div className="grid md:grid-cols-2 gap-12 items-center bg-emerald-50 p-4 md:p-8">


                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative h-[300px] md:h-[450px] overflow-hidden "
                    >
                        <Image
                            src="/apropos/ecg.png"
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
                            Restitution de l'étude des étudiants de l'ECG d'Abidjan sur la "Marque KPANDJI "

                        </h3>


                        <p className="text-lg leading-relaxed text-justify font-light">
                            <strong className="font-semibold">KPANDJI Automobiles</strong> au cœur de la formation des futurs marketeurs
                            Dans le cadre de sa politique de Responsabilité Sociétale d’Entreprise (RSE), KPANDJI AUTOMOBILES a eu l’honneur d’accompagner les étudiants de 2ᵉ année de Marketing de l’École de Commerce et de Gestion (ECG) dans la réalisation de leur projet d’école, portant fièrement sur notre marque.<br/>
                            Ce partenariat éducatif marque notre volonté d’investir dans le développement des compétences locales et de valoriser la jeunesse ivoirienne. En permettant aux étudiants d'explorer les réalités d'une marque automobile 100 % ivoirienne, KPANDJI AUTOMOBILES s’affirme comme un acteur engagé dans le partage de savoirs, l’employabilité et l’innovation locale.<br/>
                            Bravo aux étudiants pour leur créativité, leur professionnalisme et leur engagement ! Nous croyons en cette jeunesse ambitieuse qui contribuera demain à bâtir une Côte d’Ivoire dynamique et compétitive.

                        </p>
                    </motion.div>

                </div>
            </section>

        </>
    )
}

export default Ecg