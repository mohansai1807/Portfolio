import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, FileText, Github, Linkedin, Mail, Sparkles, MapPin } from 'lucide-react'

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative grid items-center gap-10 pt-28 pb-16 sm:gap-12 sm:pt-32 sm:pb-24 md:min-h-[92vh] md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-14 lg:gap-16">
      {/* Left Column: Information & Hierarchy */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="min-w-0"
      >
        {/* Status Badge */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="tracking-wide">Available for Full Stack Roles</span>
        </motion.div>

        {/* Main Headline */}
        <div className="mt-6">
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400"
          >
            Software Engineer & Developer
          </motion.p>
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.15]"
          >
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-100 dark:to-cyan-200">
              Mohanasai
            </span>
            .
          </motion.h1>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-lg font-medium text-slate-700 dark:text-slate-200 sm:text-xl lg:text-2xl"
          >
            Building performant full-stack web applications and scalable digital solutions.
          </motion.p>
        </div>

        {/* Introduction / Technical Summary */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7"
        >
          Specialized in <strong className="font-semibold text-slate-900 dark:text-slate-100">React.js</strong>,{' '}
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Node.js</strong>,{' '}
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Python</strong>,{' '}
          <strong className="font-semibold text-slate-900 dark:text-slate-100">MERN stack</strong>, and scalable database architectures. I focus on high-reliability code, clean UI systems, and problem-solving.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center"
        >
          <a href="#projects" className="button-primary group w-full sm:w-auto">
            <span>Explore Projects</span>
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="button-secondary group w-full sm:w-auto">
            <Sparkles size={15} className="text-cyan-500 dark:text-cyan-400" />
            <span>Let's Connect</span>
          </a>
          <a
            href="/resume/Mohan-Sai-Resume.pdf"
            download="Kadirimangalam_Mohanasai_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary w-full text-xs sm:w-auto"
          >
            <FileText size={15} />
            <span>Resume</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-8 flex items-center gap-3 text-slate-600 dark:text-slate-400"
        >
          <SocialLink href="https://github.com/mohansai1807" label="GitHub Profile">
            <Github size={18} />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/k-mohanasai-a846612b/" label="LinkedIn Profile">
            <Linkedin size={18} />
          </SocialLink>
          <SocialLink href="mailto:saikmohan1@gmail.com" label="Send Email">
            <Mail size={18} />
          </SocialLink>
          <div className="h-4 w-px bg-slate-300 dark:bg-white/10 mx-1" />
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <MapPin size={13} className="text-cyan-500" />
            <span>India</span>
          </span>
        </motion.div>
      </motion.div>

      {/* Right Column: Profile Image Presentation */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center md:justify-end"
      >
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] group">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-indigo-500/10 to-transparent blur-2xl opacity-70 transition-opacity duration-500 group-hover:opacity-100 dark:from-cyan-400/25 dark:via-indigo-500/15"
            aria-hidden="true"
          />

          {/* Frame Container */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-2.5 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:border-slate-300 dark:border-white/[0.12] dark:bg-[#0d1424]/80 dark:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] dark:group-hover:border-white/[0.22]">
            {/* Image Wrapper */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900">
              <img
                src="/images/mohan.jpg"
                alt="Kadirimangalam Mohanasai"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="eager"
              />

              {/* Subtle gradient vignette at bottom */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

              {/* Floating Bottom Card Tag */}
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl border border-white/20 bg-slate-950/60 px-3.5 py-2 text-white backdrop-blur-md">
                <div className="min-w-0">
                  <p className="text-[11px] font-bold tracking-wide">K. Mohanasai</p>
                  <p className="text-[10px] text-slate-300">Full Stack Engineer</p>
                </div>
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-400/20 text-cyan-300">
                  <Sparkles size={13} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function SocialLink({ href, label, children }) {
  const isExternal = href.startsWith('http')
  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-white/20 dark:hover:bg-white/[0.08] dark:hover:text-white"
    >
      {children}
    </a>
  )
}