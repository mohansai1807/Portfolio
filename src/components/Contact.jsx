import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2, Loader2, Mail, MapPin, Send, Sparkles, Github, Linkedin, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const shouldReduceMotion = useReducedMotion()

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
    <motion.section
      id="contact"
      className="section-shell"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="section-label">
        <Sparkles size={13} />
        <span>Get in Touch</span>
      </div>
      <h2 className="section-title">Let's Build Something Together</h2>
      <p className="section-copy">
        I am actively open to full-stack developer roles, engineering opportunities, and technical collaborations. Send a message or reach out directly.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
        {/* Left Column: Direct Contact Info & Links */}
        <div className="panel flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50/60 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-950/40 dark:text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for new opportunities</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Whether you have an opportunity, a technical question, or simply want to connect, my inbox is always open.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              {/* Email */}
              <div className="flex items-start gap-3.5 rounded-xl border border-slate-200/60 bg-white/50 p-3.5 dark:border-white/[0.06] dark:bg-white/[0.02]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
                  <Mail size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Direct Email</div>
                  <a
                    href="mailto:saikmohan1@gmail.com"
                    className="mt-0.5 block break-all font-semibold text-slate-900 transition-colors hover:text-cyan-600 dark:text-slate-100 dark:hover:text-cyan-300"
                  >
                    saikmohan1@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5 rounded-xl border border-slate-200/60 bg-white/50 p-3.5 dark:border-white/[0.06] dark:bg-white/[0.02]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
                  <MapPin size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Location</div>
                  <div className="mt-0.5 font-semibold text-slate-900 dark:text-slate-100">
                    India (Open to Remote & Relocation)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="border-t border-slate-200/80 pt-4 dark:border-white/[0.08]">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Professional Profiles
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/mohansai1807"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary min-h-0 text-xs px-3.5 py-2"
              >
                <Github size={14} />
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href="https://www.linkedin.com/in/k-mohanasai-a846612b/"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary min-h-0 text-xs px-3.5 py-2"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="panel p-6 sm:p-7 md:p-8">
          {status === 'success' ? (
            <div className="py-10 text-center animate-in fade-in duration-300">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                Message Received!
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                Thank you for reaching out. Your message has been validated. You can also email me directly at{' '}
                <a href="mailto:saikmohan1@gmail.com" className="font-semibold text-cyan-600 dark:text-cyan-400 underline">
                  saikmohan1@gmail.com
                </a>.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="button-secondary mt-6 text-xs px-5 py-2.5"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {errors.form && (
                <div role="alert" className="rounded-xl border border-rose-400/30 bg-rose-500/10 p-3.5 text-xs font-semibold text-rose-500">
                  {errors.form}
                </div>
              )}

              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="field"
                  placeholder="Your name or company"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  disabled={status === 'loading'}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs font-medium text-rose-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address
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
                  <p className="mt-1.5 text-xs font-medium text-rose-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  className="field h-32 resize-none"
                  placeholder="Hello Mohan, I'd like to discuss an opportunity regarding..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  disabled={status === 'loading'}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs font-medium text-rose-500">{errors.message}</p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="button-primary w-full py-3 text-sm font-bold shadow-md"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Message...</span>
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
    </motion.section>
  )
}