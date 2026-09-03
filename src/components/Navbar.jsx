import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

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
            ? 'block rounded-lg px-3 py-2.5 text-base font-medium transition-colors'
            : 'relative py-2 text-sm font-medium transition-colors'
        } ${
          isActive
            ? 'text-slate-950 dark:text-white font-semibold'
            : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
        }`}
      >
        {item.label}
        {!mobile && (
          <span
            className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-slate-800 dark:bg-slate-200 transition-transform duration-300 ${
              isActive ? 'scale-x-100' : 'scale-x-0'
            }`}
          />
        )}
      </a>
    )
  }

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-40 w-full pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-[#050816]/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 md:px-8">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="min-w-0 truncate text-sm font-bold tracking-tight text-slate-900 dark:text-slate-50 transition-opacity hover:opacity-80 sm:text-base lg:text-lg"
        >
          <span className="hidden min-[420px]:inline">Kadirimangalam </span>Mohanasai
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-4 lg:flex xl:gap-6">
          {items.map((item) => navLink(item))}
          <div className="h-4 w-px bg-slate-200 dark:bg-white/10 mx-1" />
          <a href="#contact" className="button-primary min-h-0 text-xs px-3.5 py-2">
            Let's Connect
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2 lg:hidden">
          <button
            className="rounded-lg p-2.5 text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:text-slate-200 dark:hover:bg-white/10"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-slate-200/80 bg-white/95 px-4 py-4 backdrop-blur-lg dark:border-white/10 dark:bg-[#050816]/95 sm:px-6 lg:hidden"
        >
          <div className="space-y-1">{items.map((item) => navLink(item, true))}</div>
          <div className="mt-4 border-t border-slate-200/80 pt-3 dark:border-white/10">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="button-primary w-full text-center py-2.5"
            >
              Let's Connect
            </a>
          </div>
        </nav>
      )}
    </motion.header>
  )
}