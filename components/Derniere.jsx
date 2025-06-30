"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
    {
        image: "/assets/accueil/sortie/pic1.png",
        model: "DJETRAN",
        units: [
            { id: 1, name: "Type de Moteur", unit: "Diesel", value: "Turbo" },
            { id: 2, name: "Puissance", unit: "Chevaux", value: "136" },
            { id: 3, name: "Consommation", unit: "L/100km", value: "8.1" },
        ],
    },
    {
        image: "/assets/accueil/sortie/pic2.png",
        model: "DJETRAN",
        units: [
            { id: 1, name: "Vitesse Max", unit: "km/h", value: "240" },
            { id: 2, name: "Accélération", unit: "0 à 100km/h", value: "10.5" },
            { id: 3, name: "Nombre de soupapes", unit: "Soupapes", value: "16" },
        ],
    },
    {
        image: "/assets/accueil/sortie/pic4.png",
        model: "DJETRAN",
        units: [
            { id: 1, name: "Longueur", unit: "mm", value: "5341" },
            { id: 2, name: "Largeur", unit: "mm", value: "1885" },
            { id: 3, name: "Hauteur", unit: "mm", value: "1815" },
        ],
    },
    {
        image: "/assets/accueil/sortie/pic3.png",
        model: "DJETRAN",
        units: [
            { id: 1, name: "Nombre de cylindres", unit: "Cylindres", value: "4" },
            { id: 2, name: "Volume", unit: "cm3", value: "2499" },
            { id: 3, name: "Poids", unit: "kg", value: "2000" },
        ],
    },
];

const imageVariants = {
    initial: { opacity: 0, x: 100, scale: 0.9 },
    animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 1 } },
    exit: { opacity: 0, x: -100, scale: 0.9, transition: { duration: 0.6 } },
};

const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

function Derniere() {

    const [index, setIndex] = useState(0);

    // Autoplay
    useEffect(() => {
        const timer = setTimeout(() => {
            handleNext();
        }, 7000);
        return () => clearTimeout(timer);
    }, [index]);

    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const handleDotClick = (idx) => {
        setIndex(idx);
    };

    const current = slides[index];


    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {/* Background */}
            <Image
                src="/assets/accueil/sortie/bg1.png"
                alt="Background"
                fill
                className="object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />

            <div
                className="relative flex mt-16 w-full min-h-[500px] items-center justify-center overflow-hidden shadow-lg bg-cover bg-center"
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-10 z-0" />

                <div className="relative z-10 w-full flex items-center justify-between px-6">
                    {/* Left Arrow */}
                    <button onClick={handlePrev} className="text-white hover:scale-110 transition">
                        <ChevronLeft size={40} />
                    </button>

                    {/* Main Content */}
                    <div className="w-full flex items-center justify-center gap-6">
                        <div className=" w-full sm:w-4/5 flex flex-col relative">
                            <motion.div
                                key={current.model + index}
                                variants={textVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="flex flex-col items-center mt-10 tracking-widest"
                            >
                                <div className="flex  items-center justify-between w-full">

                                    <div className="flex flex-col items-center">
                                        <p className="text-white text-7xl font-extralight italic">KPANDJI</p>
                                        <p className="text-white text-3xl font-semibold italic">{current.model}</p>
                                    </div>
                                    <div className="flex flex-col items-center">

                                    </div>
                                </div>
                            </motion.div>

                            <div className="w-full mx-auto sm:hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={"units-" + index}
                                        variants={textVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        className="flex  gap-x-4"
                                    >
                                        {current.units.map((unit) => (
                                            <div key={unit.id} className="flex flex-col p-2">
                                                <div className="flex items-end ">
                                                    <p className="text-white text-3xl font-semibold italic">
                                                        {
                                                            /^\d+(\.\d+)?$/.test(unit.value) ? (
                                                                <CountUp
                                                                    end={parseFloat(unit.value)}
                                                                    duration={1.5}
                                                                    decimals={unit.value.includes('.') ? 1 : 0}
                                                                    className="text-white text-xl font-semibold italic"
                                                                />
                                                            ) : (
                                                                <motion.span
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    transition={{ duration: 1 }}
                                                                    className="text-white text-xl font-semibold italic"
                                                                >
                                                                    {unit.value.split('').map((char, i) => (
                                                                        <motion.span
                                                                            key={i}
                                                                            initial={{ opacity: 0 }}
                                                                            animate={{ opacity: 1 }}
                                                                            transition={{ delay: i * 0.05 }}
                                                                        >
                                                                            {char}
                                                                        </motion.span>
                                                                    ))}
                                                                </motion.span>
                                                            )
                                                        }

                                                    </p>
                                                    <p className="text-white text-xs font-semibold italic border-b-2 border-white px-2">
                                                        {unit.unit}
                                                    </p>
                                                </div>
                                                <p className="text-white text-xs italic mt-1">{unit.name}</p>
                                            </div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="w-full mt-6">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={current.image + index}
                                        src={current.image}
                                        alt={current.model}
                                        variants={imageVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        className="w-full object-contain"
                                    />
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className=" hidden sm:block w-1/5">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={"units-" + index}
                                    variants={textVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="flex flex-col gap-y-4"
                                >
                                    {current.units.map((unit) => (
                                        <div key={unit.id} className="flex flex-col p-2">
                                            <div className="flex items-end gap-x-2">
                                                <p className="text-white text-3xl font-semibold italic">
                                                    {
                                                        /^\d+(\.\d+)?$/.test(unit.value) ? (
                                                            <CountUp
                                                                end={parseFloat(unit.value)}
                                                                duration={1.5}
                                                                decimals={unit.value.includes('.') ? 1 : 0}
                                                                className="text-white text-3xl font-semibold italic"
                                                            />
                                                        ) : (
                                                            <motion.span
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                transition={{ duration: 1 }}
                                                                className="text-white text-3xl font-semibold italic"
                                                            >
                                                                {unit.value.split('').map((char, i) => (
                                                                    <motion.span
                                                                        key={i}
                                                                        initial={{ opacity: 0 }}
                                                                        animate={{ opacity: 1 }}
                                                                        transition={{ delay: i * 0.05 }}
                                                                    >
                                                                        {char}
                                                                    </motion.span>
                                                                ))}
                                                            </motion.span>
                                                        )
                                                    }

                                                </p>
                                                <p className="text-white text-lg font-semibold italic border-b-2 border-white px-2">
                                                    {unit.unit}
                                                </p>
                                            </div>
                                            <p className="text-white text-lg italic mt-1">{unit.name}</p>
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button onClick={handleNext} className="text-white hover:scale-110 transition">
                        <ChevronRight size={40} />
                    </button>
                </div>

                {/* Dots */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleDotClick(idx)}
                            className={`w-3 h-3 rounded-full ${idx === index ? "bg-white scale-110" : "bg-white/50"
                                } transition duration-300`}
                        />
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Derniere