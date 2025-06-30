import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-amber-600 mb-4">KPANDJI AUTOMOBILES</h2>
          <p className="text-gray-400 text-sm">
            Assemblage de véhicules & vente d’accessoires en Côte d’Ivoire. 
            Qualité, innovation et service client au cœur de nos engagements.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-amber-600 mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Accueil</Link></li>
            <li><Link href="/offres" className="hover:underline">A Propos</Link></li>
            <li><Link href="/accessoires" className="hover:underline">Nos Modèles</Link></li>
            <li><Link href="/aftersales" className="hover:underline">R.S.E</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-amber-600 mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2"><IoLocationSharp className="mt-1" /> Cocody Palmerais, Abidjan</li>
            <li className="flex items-center gap-2"><FaPhoneAlt />  +225 01 44 10 00 00 / 25 22 01 86 72</li>
            <li className="flex items-center gap-2"><FaEnvelope /> contact@kpandji.com / kpandjiautomobiles@gmail.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-amber-600 mb-3">Suivez-nous</h3>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-amber-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-amber-600"><FaInstagram /></a>
            <a href="#" className="hover:text-amber-600"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} KPANDJI AUTOMOBILES. Tous droits réservés.
      </div>
    </footer>
  )
}

export default Footer
