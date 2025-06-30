
import { Resend } from 'resend'
import { render } from '@react-email/render'

import React from 'react'
import { ContactEmail } from '../../../components/ContactEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, whatsapp, message, voiture } = body

    const html = await render(
      React.createElement(ContactEmail, { name, email, whatsapp, message, voiture })
    )

    await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified sender email
      to: 'guironext@gmail.com', // Replace with your destination email
      subject: 'Nouveau message de contact',
      html,
    })

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error('Email send error:', error)
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 })
  }
}
