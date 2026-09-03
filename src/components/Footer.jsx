import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/80 py-8 dark:border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:px-6 md:flex-row md:px-8 md:text-left">
        <div>
          <div className="font-bold text-slate-900 dark:text-slate-100">
            Kadirimangalam Mohanasai
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400">
            Full Stack Developer & Software Engineer
          </div>
        </div>

        <div className="text-xs text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Mohan Sai. All rights reserved.
        </div>

        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
          <a
            href="https://github.com/mohansai1807"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="transition-colors hover:text-slate-900 dark:hover:text-white"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/k-mohanasai-a846612b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="transition-colors hover:text-slate-900 dark:hover:text-white"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:saikmohan1@gmail.com"
            aria-label="Email Address"
            className="transition-colors hover:text-slate-900 dark:hover:text-white"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}