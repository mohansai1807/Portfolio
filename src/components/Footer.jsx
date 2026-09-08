import React from 'react'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative mt-24 border-t border-slate-200/80 py-12 dark:border-white/[0.08]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:px-8 md:text-left">
        {/* Brand / Bio */}
        <div>
          <div className="font-bold tracking-tight text-slate-900 dark:text-white">
            Kadirimangalam Mohanasai
          </div>
          <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            Full Stack Developer &amp; Software Engineer
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Mohan Sai. Built with React &amp; Tailwind CSS.
        </div>

        {/* Links & Back to top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
            <a
              href="https://github.com/mohansai1807"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="rounded-lg p-1.5 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/k-mohanasai-a846612b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="rounded-lg p-1.5 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:saikmohan1@gmail.com"
              aria-label="Email Address"
              className="rounded-lg p-1.5 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <Mail size={18} />
            </a>
          </div>

          <div className="h-4 w-px bg-slate-300 dark:bg-white/10" />

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200/80 bg-white/80 text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-white/20 dark:hover:bg-white/[0.08] dark:hover:text-white"
            title="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}