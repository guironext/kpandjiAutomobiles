"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

function Mission() {
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
                            Notre mission
                        </h3>
                        <div className="text-lg leading-relaxed text-justify font-light">
                            <strong className="font-semibold">KPANDJI Automobiles</strong> est déterminée à faire émerger une industrie automobile nationale en Côte d'Ivoire, en offrant des produits fiables, accessibles et adaptés aux réalités locales.
                            Notre mission consiste à :
                            <ul className="space-y-5">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-red-600 mt-1" size={22} />
                                    <div>
                                        <p>Construire des véhicules de qualité : Nous concevons et assemblons des voitures, des utilitaires et des véhicules de transport , des SUV et berlines ainsi que des pick-up qui répondent aux standards internationaux tout en prenant en compte les spécificités du marché africain.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-red-600 mt-1" size={22} />
                                    <div>
                                        <p>Promouvoir l’industrialisation locale : En encourageant la production locale, nous participons activement à la réduction de la dépendance de la Côte d'Ivoire aux importations automobiles et à la création d'emplois qualifiés.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-red-600 mt-1" size={22} />
                                    <div>
                                        <p>Soutenir la mobilité durable : Nous œuvrons à intégrer des technologies propres et innovantes dans la production de nos véhicules pour un avenir plus respectueux de l’environnement.</p>
                                    </div>
                                </li>
                            </ul>
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
                            src="/apropos/kpandji2.png"
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
                            src="/apropos/kpandji2.png"
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
                            Notre mission
                        </h3>

                        <p className="text-lg leading-relaxed text-justify font-light">
                            <strong className="font-semibold">KPANDJI Automobiles</strong> est une entreprise ivoirienne pionnière dans le domaine de la construction et de l'assemblage de véhicules. Fondée dans l'objectif de contribuer au développement économique de
                            la Côte d'Ivoire et de renforcer l'industrialisation du secteur automobile en Afrique,
                            <strong className="font-semibold"> KPANDJI Automobiles</strong> se positionne comme un acteur majeur de l'industrie automobile en Afrique de l’Ouest.
                        </p>
                        <p className="text-lg leading-relaxed text-justify font-light">
                            À travers la marque <strong className="font-semibold"> KPANDJI</strong>, nous visons à offrir des véhicules de qualité, alliant performance, innovation et durabilité, tout en répondant aux besoins de mobilité croissants sur le continent africain. <br /> Nous ambitionnons de faire de Kpandji Automobiles un leader régional, un symbole d'excellence dans la conception et l’assemblage de véhicules qui répondent aux exigences des consommateurs africains tout en étant respectueux des normes environnementales.
                        </p>
                    </motion.div>

                </div>
            </section>
        </>
    )
}

export default Mission