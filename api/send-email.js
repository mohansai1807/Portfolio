import { Resend } from 'resend'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = request.body || {}

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !emailPattern.test(email.trim()) ||
    !message.trim()
  ) {
    return response.status(400).json({ error: 'Please provide a valid name, email, and message.' })
  }

  if (name.length > 120 || email.length > 254 || message.length > 5000) {
    return response.status(400).json({ error: 'Your message is too long.' })
  }

  if (!process.env.RESEND_API_KEY) {
    return response.status(500).json({ error: 'Email service is not configured.' })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: [process.env.CONTACT_TO_EMAIL || 'saikmohan1@gmail.com'],
      replyTo: email.trim(),
      subject: `Portfolio contact from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    })

    if (error) {
      const errorMessage = error.message || 'Email service could not deliver your message.'
      if (/api key|unauthorized|invalid/i.test(errorMessage)) {
        return response.status(502).json({ error: 'Resend API key is invalid or revoked.' })
      }
      return response.status(502).json({ error: errorMessage })
    }

    return response.status(200).json({ success: true })
  } catch {
    return response.status(500).json({ error: 'Unable to connect to the email service.' })
  }
}
