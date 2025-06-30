'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import DOMPurify from 'dompurify'
import IntroPropos from '../../components/IntroPropos'


const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)


  const sanitizeInput = (input) => DOMPurify.sanitize(input);

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: sanitizeInput(value) }))
  }

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^\+?\d{9,15}$/

    if (!form.name || !form.email || !form.whatsapp || !form.message) {
      alert('Veuillez remplir tous les champs.')
      return false
    }

    if (!emailRegex.test(form.email)) {
      alert('Adresse email invalide.')
      return false
    }

    if (!phoneRegex.test(form.whatsapp)) {
      alert('Numéro WhatsApp invalide.')
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        alert('Message envoyé avec succès !')
        setForm({ name: '', email: '', whatsapp: '', message: '' })
      } else {
        alert("Erreur lors de l'envoi du message.")
      }
    } catch (err) {
      alert('Erreur réseau, veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <IntroPropos />
      <section className="container mx-auto bg-gray-100 py-16 px-4" id="contact">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-thin text-amber-600 border-l-8 border-amber-700 pl-4 mb-12"
          >
            Contactez-nous
          </motion.h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8">
              Laissez nous un message ici
            </h2>
            <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
              Vous avez une question sur nos véhicules, nos accessoires ou nos services après-vente ? Nous sommes là pour vous répondre.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              className="bg-white shadow-lg rounded-xl p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Informations de contact</h3>
              <p className="text-gray-600 mb-2"><strong>Adresse:</strong> Cocody Palmeraie, Abidjan, Côte d’Ivoire</p>
              <p className="text-gray-600 mb-2"><strong>Téléphone:</strong> +225 01 44 10 00 00 / 25 22 01 86 72</p>
              <p className="text-gray-600 mb-2"><strong>Email:</strong> contact@kpandji.com / kpandjiautomobiles@gmail.com</p>
              <p className="text-gray-600 mt-4">Notre service client est disponible du lundi au vendredi de 8h à 17h.</p>
              <div className="mt-6">
                <h4 className="font-bold mb-2 text-gray-700">Suivez-nous :</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:underline">Facebook</a>
                  <a href="#" className="text-blue-400 hover:underline">Twitter</a>
                  <a href="#" className="text-pink-600 hover:underline">Instagram</a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              className="bg-white shadow-lg rounded-xl p-8 space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Envoyer un message</h3>

              <input
                type="text"
                name="name"
                placeholder="Nom complet"
                value={form.name}
                onChange={handleChange}
                maxLength={100}
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Adresse email"
                value={form.email}
                onChange={handleChange}
                maxLength={100}
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />

              <input
                type="tel"
                name="whatsapp"
                placeholder="Numéro WhatsApp"
                value={form.whatsapp}
                onChange={handleChange}
                pattern="^\+?\d{9,15}$"
                title="Veuillez entrer un numéro valide (ex: +225 01 23 45 67 89)"
                maxLength={15}
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />

              <textarea
                name="message"
                placeholder="Votre message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                maxLength={1000}
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                required
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className={`w-full font-semibold py-3 rounded transition bg-amber-600 ${loading
                  ? 'bg-gray-500 cursor-not-allowed text-white'
                  : 'bg-gold hover:bg-black text-white'
                  }`}
              >
                {loading ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </motion.form>
          </div>

          {/* Optional Map */}
          <div className="mt-10">
            <iframe
              title="KPANDJI AUTOMOBILES"
              src="https://maps.google.com/maps?q=KPANDJI%20AUTOMOBILES%20927Q%2BW5%2C%20Abidjan&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-96 rounded-lg border"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
