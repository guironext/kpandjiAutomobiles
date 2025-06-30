'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    const [showScrolledHeader, setShowScrolledHeader] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrolledHeader(window.scrollY > 90)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
         <>
      {/* Transparent Header (Always visible) */}
      <header className="fixed top-0 left-0 w-full z-40 px-6  py-4 text-white transition duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Image src="/logo.png" alt="logo" width={80} height={80} />
          
          <nav className="space-x-6 hidden md:block text-2xl uppercase">
            <Link href="/" className="relative group">
            Accueil
            <div className="absolute left-0 -bottom-1 h-[3px] w-0 bg-white transition-all duration-200 group-hover:w-full group-hover:ease-out" />
            </Link>
            <Link href="apropos" className="relative group uppercase">
            A Propos
            <div className="absolute left-0 -bottom-1 h-[3px] w-0 bg-white transition-all duration-200 group-hover:w-full group-hover:ease-out" />
            </Link>
            <Link href="modeles" className="relative group uppercase">
            Nos Modèles
            <div className="absolute left-0 -bottom-1 h-[3px] w-0 bg-white transition-all duration-200 group-hover:w-full group-hover:ease-out" />
            </Link>
            <Link href="rse" className="relative group">
            R.S.E.
            <div className="absolute left-0 -bottom-1 h-[3px] w-0 bg-white transition-all duration-200 group-hover:w-full group-hover:ease-out" />
            </Link>
            <Link href="contact" className="relative group uppercase">
            CONTACT
            <div className="absolute left-0 -bottom-1 h-[3px] w-0 bg-white transition-all duration-200 group-hover:w-full group-hover:ease-out" />
            </Link>
            
           
          </nav>
        </div>
      </header>

      {/* Animated Black Header (Appears after scroll) */}
      <AnimatePresence>
        {showScrolledHeader && (
          <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 px-6 py-4 text-white shadow-md"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Image src="/logo2.png" alt="logo" width={80} height={80} />
              <nav className="space-x-6 hidden md:block text-xl uppercase">
            <Link href="/" className="relative group">
            Accueil
            <div className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gray-600 transition-all duration-200 group-hover:w-full group-hover:ease-out" />
            </Link>
            <Link href="apropos" className="relative group uppercase">
            A Propos
            <div className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gray-600 transition-all duration-200 group-hover:w-full group-hover:ease-out" />
            </Link>
            <Link href="modeles" className="relative group uppercase">
            Nos Modèles
            <div className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gray-600 transition-all duration-200 group-hover:w-full group-hover:ease-out" />
            </Link>
            <Link href="rse" className="relative group">
            R.S.E.
            <div className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gray-600 transition-all duration-200 group-hover:w-full group-hover:ease-out" />
            </Link>
            <Link href="contact" className="relative group uppercase">
            CONTACT
            <div className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gray-600 transition-all duration-200 group-hover:w-full group-hover:ease-out" />
            </Link>
            
           
          </nav>
            </div>
          </motion.header>
        )}
      </AnimatePresence>
     
    </>
    </div>
  )
}

export default Header