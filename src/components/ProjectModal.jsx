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
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-h-[92dvh] overflow-y-auto rounded-t-2xl border border-slate-200/80 bg-white p-4 shadow-2xl dark:border-white/10 dark:bg-[#090d1f] dark:text-slate-100 sm:max-h-[85vh] sm:max-w-3xl sm:rounded-2xl sm:p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-200/80 pb-4 dark:border-white/10">
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-600 dark:text-cyan-400">
              {project.category}
            </p>
            <h3 id="modal-project-title" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl break-words">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {project.desc}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="shrink-0 rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tech Badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="badge">
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
            className="group relative mt-5 block aspect-video overflow-hidden rounded-xl border border-slate-200/60 dark:border-white/10"
          >
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950/50 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-900 shadow-lg">
                <ExternalLink size={13} />
                Open Live Site
              </span>
            </div>
          </a>
        )}


        <div className="mt-6 space-y-6 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          {/* Overview */}
          {project.overview && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Overview
              </h4>
              <p className="mt-1 text-base text-slate-800 dark:text-slate-200">
                {project.overview}
              </p>
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {project.problem && (
              <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-4 dark:border-white/5 dark:bg-slate-900/50">
                <div className="flex items-center gap-2 font-medium text-amber-600 dark:text-amber-400">
                  <AlertCircle size={16} />
                  <span>The Challenge</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed">{project.problem}</p>
              </div>
            )}
            {project.solution && (
              <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-4 dark:border-white/5 dark:bg-slate-900/50">
                <div className="flex items-center gap-2 font-medium text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={16} />
                  <span>The Solution</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed">{project.solution}</p>
              </div>
            )}
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Features
              </h4>
              <ul className="mt-2 space-y-1.5 pl-1">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Learnings & Challenges */}
          {project.learnings && (
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-4 dark:border-white/5 dark:bg-slate-900/50">
              <div className="flex items-center gap-2 font-medium text-slate-900 dark:text-white">
                <Lightbulb size={16} className="text-amber-500" />
                <span>Key Learnings</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed">{project.learnings}</p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-4 dark:border-white/10">
          <div className="flex w-full flex-col gap-2 sm:flex-row">
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary w-full text-xs sm:w-auto"
              >
                <Github size={16} />
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
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </a>
            )}
            {!hasGithub && !hasDemo && (
              <span className="text-xs text-slate-500 italic">
                Source code & live link available upon request
              </span>
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
