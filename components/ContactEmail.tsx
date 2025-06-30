import React from 'react'

interface ContactEmailProps {
  name: string
  email: string
  whatsapp: string
  message: string
  voiture: string
}

export function ContactEmail({ name, email, whatsapp, message, voiture }: ContactEmailProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5' }}>
      <h1>Nouveau message de contact</h1>
      <p><strong>Nom complet:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>WhatsApp:</strong> {whatsapp}</p>
      <p><strong>Voiture:</strong> {voiture}</p>
      <p><strong>Message:</strong></p>
      <p>{message}</p>
    </div>
  )
}
