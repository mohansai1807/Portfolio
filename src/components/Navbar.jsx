import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const items = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    }

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions)
    const elements = items
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const navLink = (item, mobile = false) => {
    const isActive = active === item.id
    return (
      <a
        key={item.id}
        href={`#${item.id}`}
        onClick={() => setOpen(false)}
        aria-current={isActive ? 'page' : undefined}
        className={`${
          mobile
            ? 'flex items-center justify-between rounded-xl px-3.5 py-3 text-base font-medium transition-colors'
            : 'relative rounded-lg px-2.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200'
        } ${
          isActive
            ? mobile
              ? 'bg-slate-100 font-bold text-slate-950 dark:bg-white/10 dark:text-white'
              : 'text-slate-950 dark:text-white'
            : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
        }`}
      >
        <span>{item.label}</span>
        {mobile && isActive && (
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
        )}
        {!mobile && isActive && (
          <motion.span
            layoutId="activeNavIndicator"
            className="absolute inset-0 -z-10 rounded-lg bg-slate-200/70 dark:bg-white/[0.08]"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
      </a>
    )
  }

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-40 w-full pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/80 py-2 backdrop-blur-xl shadow-sm dark:border-white/[0.08] dark:bg-[#080c18]/85 dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 md:px-8">
        {/* Brand Logo / Name */}
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2 text-sm font-bold tracking-tight text-slate-900 transition-opacity hover:opacity-90 dark:text-slate-50 sm:text-base"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-xs font-extrabold text-white shadow-sm dark:bg-white dark:text-slate-950">
            M
          </span>
          <span className="font-semibold tracking-tight">
            <span className="hidden min-[420px]:inline text-slate-500 dark:text-slate-400">Kadirimangalam </span>
            Mohanasai
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 rounded-full border border-slate-200/60 bg-white/60 px-3 py-1.5 backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.03] lg:flex">
          {items.map((item) => navLink(item))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="button-primary min-h-0 rounded-lg px-4 py-2 text-xs font-semibold"
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
          <a
            href="#contact"
            className="button-primary min-h-0 rounded-lg px-3 py-1.5 text-xs font-medium"
          >
            Connect
          </a>
          <button
            className="rounded-xl border border-slate-200/80 bg-white/80 p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          aria-label="Mobile navigation"
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-slate-200/80 bg-white/95 px-4 py-5 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-[#080c18]/95 sm:px-6 lg:hidden"
        >
          <div className="space-y-1.5">{items.map((item) => navLink(item, true))}</div>
          <div className="mt-5 border-t border-slate-200/80 pt-4 dark:border-white/10">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="button-primary w-full text-center py-3"
            >
              <span>Let's Connect</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}