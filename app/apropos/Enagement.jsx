"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

function Enagement() {
    return (
        <section className="bg-white px-6 md:px-28 py-20">
            {/* Section Title */}


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
                        src="/apropos/kpandji3.png"
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
                        Notre engagement et  valeur
                    </h3>

                    <div className="text-lg leading-relaxed text-justify font-light">

                        Chez <strong className="font-semibold">KPANDJI Automobiles</strong>, nous sommes profondément engagés à respecter des standards de qualité internationaux tout en étant fidèles aux réalités et aux besoins locaux. Nos engagements incluent :
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-red-600 mt-1" size={22} />
                                <div>
                                    <strong className="font-semibold mr-2">
                                        Emploi local :
                                    </strong>
                                    En implantant des usines d'assemblage en Côte d'Ivoire, nous participons activement à la création d'emplois et au développement des compétences dans le secteur automobile.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-red-600 mt-1" size={22} />
                                <div>
                                    <strong className="font-semibold mr-2">
                                        Soutien à l'économie nationale :
                                    </strong>
                                    Nous privilégions les partenariats avec les fournisseurs locaux, contribuant ainsi à dynamiser l'économie ivoirienne et à renforcer la chaîne de valeur locale.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-red-600 mt-1" size={22} />
                                <div>
                                    <strong className="font-semibold mr-2">
                                        Innovation et technologie :
                                    </strong>
                                    Nous investissons continuellement dans la recherche et le développement pour offrir à nos clients des véhicules à la pointe de la technologie, avec un focus particulier sur les solutions de mobilité durable et l’électrification des transports.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-red-600 mt-1" size={22} />
                                <div>
                                    <strong className="font-semibold mr-2">
                                        Excellence :
                                    </strong>
                                    <strong className="font-semibold">KPANDJI Automobiles</strong> s'engage à fournir des produits et services de la plus haute qualité. Nous mettons un point d'honneur à respecter des processus de fabrication rigoureux pour garantir la sécurité, la performance et la fiabilité de nos véhicules.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-red-600 mt-1" size={22} />
                                <div>
                                    <strong className="font-semibold mr-2">
                                        Responsabilité sociale :
                                    </strong>
                                    En tant qu'entreprise citoyenne, nous prenons à cœur notre impact sur la communauté et l'environnement, en intégrant des pratiques responsables tout au long de notre chaîne de valeur.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-red-600 mt-1" size={22} />
                                <div>
                                    <strong className="font-semibold mr-2">
                                        Innovation continue :
                                    </strong>
                                    Nous croyons fermement en l'innovation pour améliorer constamment nos produits et services et répondre aux défis de mobilité du futur.
                                </div>
                            </li>
                        </ul>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}

export default Enagement