import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, FileText, Github, Linkedin, Mail, Sparkles } from 'lucide-react'

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="grid items-center gap-8 pt-24 pb-12 sm:gap-10 sm:pb-20 md:min-h-[100svh] md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-12 md:pb-24 md:overflow-x-clip">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="min-w-0"
      >
        {/* Label */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-sm sm:px-3.5 sm:text-xs sm:tracking-[0.18em] dark:border-white/10 dark:bg-slate-900/60 dark:text-cyan-400"
        >
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-cyan-500 dark:text-cyan-400" />
          <span>Full Stack Developer • MERN • AI</span>
        </motion.div>

        {/* Headline */}
        <h1 className="mt-5 overflow-hidden text-[1.65rem] font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl md:text-5xl lg:text-6xl uppercase break-words">
          <motion.span
            className="inline-block"
            initial={shouldReduceMotion ? false : { opacity: 0, y: '105%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
          >
            CONNECT WITH&nbsp;
          </motion.span>
          <motion.span
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-cyan-400 dark:via-indigo-200 dark:to-white"
            initial={shouldReduceMotion ? false : { opacity: 0, y: '105%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.98, ease: [0.16, 1, 0.3, 1] }}
          >
            MOHANASAI
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:mt-6 sm:text-lg sm:leading-8"
        >
          Crafting performant full-stack applications with modern web architectures and intelligent AI integrations. Specialized in React.js, Node.js, Python, MERN stack, and scalable database designs.
        </motion.p>

        {/* Professional CTAs */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.38, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center"
        >
          <a href="#projects" className="button-primary group w-full sm:w-auto">
            <span>View My Work</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="button-secondary group w-full sm:w-auto">
            <Sparkles size={16} className="text-cyan-500 dark:text-cyan-400" />
            <span>Connect With Me</span>
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

        {/* Social Icons */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="mt-8 flex items-center gap-3 text-slate-600 dark:text-slate-400"
        >
          <SocialLink delay={1.66} reducedMotion={shouldReduceMotion} href="https://github.com/mohansai1807" label="GitHub Profile">
            <Github size={19} />
          </SocialLink>
          <SocialLink delay={1.76} reducedMotion={shouldReduceMotion} href="https://www.linkedin.com/in/k-mohanasai-a846612b/" label="LinkedIn Profile">
            <Linkedin size={19} />
          </SocialLink>
          <SocialLink delay={1.86} reducedMotion={shouldReduceMotion} href="mailto:saikmohan1@gmail.com" label="Send Email">
            <Mail size={19} />
          </SocialLink>
        </motion.div>
      </motion.div>

      {/* Profile Visual */}
      <div className="flex items-center justify-center md:justify-end">
        <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] group">
          {/* Subtle Ambient Glow Effect */}
          <motion.div
            className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 blur-xl dark:from-cyan-500/30 dark:to-indigo-500/30"
            initial={shouldReduceMotion ? false : { opacity: 0.08, scale: 0.96 }}
            animate={{ opacity: 0.75, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.div
            className="relative overflow-hidden rounded-2xl"
            animate={shouldReduceMotion ? undefined : { y: [0, -4, 0] }}
            transition={shouldReduceMotion ? undefined : { duration: 5.5, delay: 2.55, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="pointer-events-none absolute inset-0 z-20 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <motion.rect
                x="0.6"
                y="0.6"
                width="98.8"
                height="98.8"
                rx="5"
                fill="none"
                stroke="rgba(103, 232, 249, 0.85)"
                strokeWidth="0.7"
                pathLength="1"
                initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 1, 0.5] }}
                transition={{ pathLength: { duration: 1.1, delay: 0.58, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 1.1, delay: 0.58 } }}
              />
            </svg>

            <motion.div
              className="relative z-10 overflow-hidden rounded-2xl"
              initial={shouldReduceMotion ? false : { clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.05, delay: 0.96, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.img
                src="/images/mohan.jpg"
                alt="Mohan Sai"
                className="relative h-auto w-full rounded-2xl border border-slate-200/80 object-cover shadow-xl transition-transform duration-500 hover:scale-[1.01] dark:border-white/10 dark:shadow-black/40"
                loading="eager"
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.05, delay: 0.96, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.div
                className="pointer-events-none absolute inset-y-0 -left-1/2 z-10 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-cyan-100/20 to-transparent"
                initial={shouldReduceMotion ? false : { x: '-80%', opacity: 0 }}
                animate={{ x: '430%', opacity: [0, 0.8, 0] }}
                transition={{ duration: 0.75, delay: 2.04, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function SocialLink({ href, label, children, delay, reducedMotion }) {
  const isExternal = href.startsWith('http')
  return (
    <motion.a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      aria-label={label}
      title={label}
      initial={reducedMotion ? false : { opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, delay, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-lg border border-slate-200/60 bg-white/50 p-2.5 transition-all hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:border-white/10 dark:bg-slate-900/30 dark:hover:border-white/20 dark:hover:bg-slate-800/60 dark:hover:text-white"
    >
      {children}
    </motion.a>
  )
}