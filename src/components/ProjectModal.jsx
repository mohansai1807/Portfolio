import React, { useEffect } from 'react'
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!project) return null

  const hasGithub = Boolean(project.github && project.github !== '#')
  const hasDemo = Boolean(project.demo && project.demo !== '#')

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-h-[92dvh] overflow-y-auto rounded-t-3xl border border-slate-200/80 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-[#0b1020] dark:text-slate-100 sm:max-h-[88vh] sm:max-w-3xl sm:rounded-3xl sm:p-7 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-200/80 pb-4 dark:border-white/[0.08]">
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-600 dark:text-cyan-400">
              {project.category}
            </p>
            <h3 id="modal-project-title" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl break-words">
              {project.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.desc}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="shrink-0 rounded-xl border border-slate-200/80 bg-slate-100/80 p-2 text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tech Badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="badge text-xs">
              {t}
            </span>
          ))}
        </div>

        {/* Project Screenshot Banner */}
        {project.image && (
          <a
            href={project.demo || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-5 block aspect-video overflow-hidden rounded-2xl border border-slate-200/60 shadow-md dark:border-white/10"
          >
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-bold text-slate-900 shadow-xl">
                <ExternalLink size={13} />
                Open Live Preview
              </span>
            </div>
          </a>
        )}

        <div className="mt-6 space-y-6 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          {/* Overview */}
          {project.overview && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                System Overview
              </h4>
              <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200">
                {project.overview}
              </p>
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {project.problem && (
              <div className="rounded-2xl border border-amber-500/20 bg-amber-50/50 p-4 dark:border-amber-500/20 dark:bg-amber-950/20">
                <div className="flex items-center gap-2 font-bold text-amber-700 dark:text-amber-300 text-xs uppercase tracking-wider">
                  <AlertCircle size={15} />
                  <span>The Engineering Challenge</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">{project.problem}</p>
              </div>
            )}
            {project.solution && (
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 dark:border-emerald-500/20 dark:bg-emerald-950/20">
                <div className="flex items-center gap-2 font-bold text-emerald-700 dark:text-emerald-300 text-xs uppercase tracking-wider">
                  <CheckCircle2 size={15} />
                  <span>The Technical Solution</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">{project.solution}</p>
              </div>
            )}
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Core Functionality & Architecture
              </h4>
              <ul className="mt-2 space-y-2">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Learnings & Technical Growth */}
          {project.learnings && (
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/[0.08] dark:bg-white/[0.03]">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
                <Lightbulb size={15} className="text-amber-500" />
                <span>Key Technical Insights</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{project.learnings}</p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-4 dark:border-white/[0.08]">
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary w-full text-xs sm:w-auto"
              >
                <Github size={15} />
                <span>Source Code</span>
              </a>
            )}
            {hasDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary w-full text-xs sm:w-auto"
              >
                <span>Launch Live Site</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="button-secondary w-full text-xs sm:w-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
