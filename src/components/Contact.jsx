import React, { useState } from 'react'
import { CheckCircle2, Loader2, Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address'
    }
    if (!form.message.trim()) e.message = 'Message cannot be empty'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')
    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(async (response) => {
        const contentType = response.headers.get('content-type') || ''
        if (!contentType.includes('application/json')) {
          throw new Error('Email service is unavailable here. Run the site with Vercel or deploy it to Vercel.')
        }
        if (!response.ok) {
          const result = await response.json().catch(() => ({}))
          throw new Error(result.error || 'Unable to send your message')
        }
      })
      .then(() => {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setErrors({})
      })
      .catch((error) => {
        setStatus('error')
        setErrors({ form: error.message })
      })
  }

  return (
    <section className="section-shell">
      <div className="section-label">Connect</div>
      <h2 className="section-title">Let's Build Something Together</h2>
      <p className="section-copy">
        I am currently open to full-stack developer roles, freelance projects, and technical collaborations. Send a message or reach out directly.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-8">
        {/* Contact Info Card */}
        <div className="panel space-y-6">
          <h3 className="font-bold text-slate-900 dark:text-slate-50">
            Contact Information
          </h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-lg border border-slate-200 bg-slate-100 p-2 dark:border-white/10 dark:bg-white/5">
                <Mail size={18} className="text-slate-700 dark:text-slate-300" />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Email</div>
                <a href="mailto:saikmohan1@gmail.com" className="break-all font-medium text-slate-900 dark:text-slate-100 hover:underline">
                  saikmohan1@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="rounded-lg border border-slate-200 bg-slate-100 p-2 dark:border-white/10 dark:bg-white/5">
                <MapPin size={18} className="text-slate-700 dark:text-slate-300" />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Location</div>
                <div className="font-medium text-slate-900 dark:text-slate-100">
                  India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="panel">
          {status === 'success' ? (
            <div className="py-8 text-center animate-in fade-in duration-300">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                Message Received!
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Thank you for reaching out. Form inputs have been validated. You can also email me directly at{' '}
                <a href="mailto:saikmohan1@gmail.com" className="underline">
                  saikmohan1@gmail.com
                </a>.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="button-secondary mt-6 text-xs"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {errors.form && (
                <p role="alert" className="rounded-lg border border-rose-400/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-500">
                  {errors.form}
                </p>
              )}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="field"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  disabled={status === 'loading'}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-rose-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="field"
                  placeholder="your.email@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  disabled={status === 'loading'}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  className="field h-32 resize-none"
                  placeholder="Hello Mohan, I'd like to talk about..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  disabled={status === 'loading'}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-500">{errors.message}</p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="button-primary w-full py-3"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Validating & Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}