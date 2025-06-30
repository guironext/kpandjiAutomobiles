'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Title from './Title'

const Marque = () => {
    return (
       <>
       <Title title="Notre Marque" />

        <div className=" bg-gray-100 text-gray-900 left-0 ">

            <section className="bg-emerald-50 py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    {/* Left: Image */}
                    <div className="w-full md:w-1/2 relative h-[300px] md:h-[450px]">
                        <Image
                            src="/actu/pic41.png" // Replace with your image path
                            alt="Véhicules KPANDJI"
                            fill
                            className="object-contain "
                        />
                    </div>

                    {/* Right: Text */}
                    <motion.div
                        className="w-full md:w-1/2 text-gray-800"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                            La Marque <span className="text-red-600">KPANDJI</span>
                        </h2>

                        <p className="text-lg leading-relaxed mb-6 text-justify">
                            <strong>KPANDJI</strong>, c'est un mot tiré des nos racines Baoulés. Ce nom, est le nom donné à un arbre qui est tellement solide que, en tentant de le couper avec une machette, la machette peut de brisé en plusieurs morceaux. <br />
                            Sous la marque <strong>KPANDJI</strong>, l’entreprise <strong>KPANDJI AUTOMOBILES</strong>  propose une large gamme de véhicules SOLIDES, conçus pour
                            répondre aux besoins diversifiés du marché ivoirien et africain.<br/> Nos produits incluent :
                        </p>

                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-red-600 mt-1" size={22} />
                                <div>
                                    <h4 className="font-semibold text-lg">Voitures particulières</h4>
                                    <p>Conçues pour le confort et la performance, elles sont adaptées aux conditions routières locales.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-red-600 mt-1" size={22} />
                                <div>
                                    <h4 className="font-semibold text-lg">Véhicules utilitaires et professionnels</h4>
                                    <p>Pour les entreprises et les professionnels, nous assemblons des véhicules robustes, performants et économiques.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-red-600 mt-1" size={22} />
                                <div>
                                    <h4 className="font-semibold text-lg">Véhicules de transport et de tourisme</h4>
                                    <p>Offrant des solutions de mobilité pour le transport de passagers et de marchandises à grande échelle.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>
        </div>
       </>
    )
}

export default Marque