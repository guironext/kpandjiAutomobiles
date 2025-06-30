"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

function Injs() {
    return (
        <section className="bg-white px-6 md:px-28 py-20">
            {/* Section Title */}
            <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-thin text-amber-600 border-l-8 border-amber-700 pl-4 mb-12"
            >
                Notre engagement R.S.E.
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
                        src="/apropos/rse1.png"
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
                        Présentation des Communautés « 𝐊𝐏𝐀𝐍𝐃𝐉𝐈 » & « 𝐖𝐎𝐌𝐈𝐄𝐍𝐆𝐍𝐎𝐍 »
                    </h3>

                   
                    <p className="text-lg leading-relaxed text-justify font-light">
                        La cérémonie de présentation du projet des Communautés « 𝐊𝐏𝐀𝐍𝐃𝐉𝐈 » & « 𝐖𝐎𝐌𝐈𝐄𝐍𝐆𝐍𝐎𝐍 » dans le cadre de l’Unité d’Enseignement (UE) « Projet Communautaire » a eu lieu ce Lundi 17 Mars 2025 dans la cour de l’INJS à partir de 15h.<br/> En effet, au terme de leur cours de « Projet Communautaire », les é𝐭𝐮𝐝𝐢𝐚𝐧𝐭𝐬 𝐞𝐧 𝟐è𝐦𝐞 𝐚𝐧𝐧é𝐞 𝐝𝐞 𝐏𝐫𝐨𝐟𝐞𝐬𝐬𝐨𝐫𝐚𝐭 𝐝𝐞 𝐂𝐨𝐥𝐥è𝐠𝐞 𝐞𝐭 𝐏𝐫𝐨𝐟𝐞𝐬𝐬𝐨𝐫𝐚𝐭 𝐝𝐞 𝐋𝐲𝐜é𝐞 𝐝𝐞 𝐥𝐚 𝐩𝐫𝐨𝐦𝐨𝐭𝐢𝐨𝐧 𝟐𝟎𝟐𝟒-𝟐𝟎𝟐𝟕 𝐝𝐞 𝐥’𝐄𝐍𝐒𝐄𝐏𝐒 ont 𝐫é𝐡𝐚𝐛𝐢𝐥𝐢𝐭é 𝐥𝐞𝐬 𝟐 𝐭𝐞𝐫𝐫𝐚𝐢𝐧𝐬 𝐝𝐞 𝐯𝐨𝐥𝐥𝐞𝐲𝐛𝐚𝐥𝐥 et doté la 𝐬𝐚𝐥𝐥𝐞 𝟏𝟖 de l’Institut, de 𝐬𝐩𝐥𝐢𝐭𝐬 𝐭𝐨𝐮𝐭 𝐧𝐞𝐮𝐟𝐬.<br/>
                        En présence de M. Habib SANOGO, Directeur Général de l’INJS, les étudiants ont étalé les compétences acquises en termes de gestion communautaire. A la surprise générale et pour la 1ère fois, dans l’histoire de la présentation des projets communautaires, l’INJS a reçu une personne extérieure, un invité de marque en la personne du 𝐏𝐃𝐆 𝐝𝐞 𝐥𝐚 𝐦𝐚𝐫𝐪𝐮𝐞 𝐝’𝐚𝐮𝐭𝐨𝐦𝐨𝐛𝐢𝐥𝐞𝐬 « 𝐊𝐏𝐀𝐍𝐃𝐉𝐈 ». 
                       
                        Source, INJS Côte d'Ivoire officiel.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Injs