import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Github, X, Sparkles, Layers, Monitor, Server, ChevronRight, AlertCircle, CheckCircle2, Lightbulb, Cpu } from 'lucide-react'
import { projects } from '../data/projects'

const filterTabs = [
  { key: 'All', label: 'All Projects', icon: Layers },
  { key: 'Full Stack', label: 'Full Stack', icon: Server },
  { key: 'Frontend', label: 'Frontend', icon: Monitor },
  { key: 'AI', label: 'AI / Gen AI', icon: Cpu },
]

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const shouldReduceMotion = useReducedMotion()

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    if (activeFilter === 'AI') return projects.filter((p) => p.group === 'AI' || p.category?.includes('AI') || p.category?.includes('GENERATIVE'))
    return projects.filter((p) => p.group === activeFilter)
  }, [activeFilter])

  const handleToggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  // When filter changes, collapse any expanded card
  const handleFilterChange = (key) => {
    setActiveFilter(key)
    setExpandedId(null)
  }

  return (
    <motion.section
      id="projects"
      className="section-shell"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="section-label">
            <Sparkles size={13} />
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">Engineered Projects</h2>
          <p className="section-copy">
            Full-stack web architectures, real-time communication systems, and high-performance frontend solutions.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white/60 p-1 backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.03]">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key
            const TabIcon = tab.icon
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => handleFilterChange(tab.key)}
                className={`relative flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                  isActive
                    ? 'text-slate-950 dark:text-white'
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeProjectFilter"
                    className="absolute inset-0 rounded-lg bg-slate-200/80 shadow-sm dark:bg-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <TabIcon size={13} />
                  <span className="hidden min-[480px]:inline">{tab.label}</span>
                  <span className="min-[480px]:hidden">{tab.key === 'All' ? 'All' : tab.label}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Project Count */}
      <div className="mt-6 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <span className="font-semibold text-slate-800 dark:text-slate-200">
          {filteredProjects.length}
        </span>
        <span>
          {filteredProjects.length === 1 ? 'project' : 'projects'}
          {activeFilter !== 'All' && (
            <> in <span className="font-semibold text-cyan-600 dark:text-cyan-400">{activeFilter}</span></>
          )}
        </span>
        <span className="text-slate-400 dark:text-slate-500 ml-1">— click a project to explore</span>
      </div>

      {/* Project Cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:gap-5">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const isExpanded = expandedId === project.id
            const hasGithub = Boolean(project.github && project.github !== '#')
            const hasDemo = Boolean(project.demo && project.demo !== '#')

            return (
              <div
                key={project.id}
                className={`${isExpanded ? 'sm:col-span-2' : ''}`}
              >
                {!isExpanded ? (
                  /* ──────── COLLAPSED: Intro Card ──────── */
                  <button
                    type="button"
                    onClick={() => handleToggle(project.id)}
                    className="group interactive-panel w-full cursor-pointer text-left p-5 sm:p-6 flex flex-col justify-between min-h-[200px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  >
                    <div>
                      {/* Category + Group Badge */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-md bg-cyan-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                          {project.group}
                        </span>
                        {project.featured && (
                          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:bg-white/[0.06] dark:text-slate-400">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>

                      {/* Short Description */}
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-2">
                        {project.desc}
                      </p>

                      {/* Tech Badges */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 5).map((t) => (
                          <span key={t} className="badge text-[10px]">
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 5 && (
                          <span className="badge text-[10px] text-slate-400 dark:text-slate-500">
                            +{project.tech.length - 5}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* View Prompt */}
                    <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 transition-transform group-hover:translate-x-1">
                      <span>View Project</span>
                      <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </button>
                ) : (
                  /* ──────── EXPANDED: Full Project Detail ──────── */
                  <div
                    className="panel overflow-hidden p-0"
                  >
                    {/* Close Bar */}
                    <div className="flex items-center justify-between border-b border-slate-200/80 px-5 py-3 dark:border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-md bg-cyan-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:bg-white/[0.06] dark:text-slate-400">
                            Featured
                          </span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => setExpandedId(null)}
                        aria-label="Close project details"
                        className="rounded-lg border border-slate-200/80 p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-white/10 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
                      >
                        <X size={16} />
                      </button>
                    </div>

                    {/* Full-width Details Panel — no image */}
                    <div className="p-5 sm:p-7 lg:p-8">
                      <div className="space-y-6">

                        {/* Title, Desc + Action Buttons row */}
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                          <div className="min-w-0">
                            <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                              {project.title}
                            </h3>
                            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                              {project.desc}
                            </p>
                          </div>

                          {/* Primary CTA Buttons */}
                          <div className="flex shrink-0 flex-col gap-2 sm:items-end">
                            {hasDemo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button-primary min-h-0 w-full justify-center rounded-xl px-5 py-2.5 text-sm font-bold shadow-md sm:w-auto"
                              >
                                <span>Live Demo</span>
                                <ExternalLink size={15} />
                              </a>
                            )}
                            {hasGithub && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button-secondary min-h-0 w-full justify-center rounded-xl px-5 py-2.5 text-xs font-bold sm:w-auto"
                              >
                                <Github size={14} />
                                <span>Source Code</span>
                                <ArrowUpRight size={13} />
                              </a>
                            )}
                            {!hasDemo && !hasGithub && (
                              <span className="text-xs italic text-slate-400 dark:text-slate-500">
                                Links available on request
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="h-px bg-slate-200/80 dark:bg-white/[0.08]" />

                        {/* Overview */}
                        {project.overview && (
                          <div>
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                              System Overview
                            </h4>
                            <p className="mt-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                              {project.overview}
                            </p>
                          </div>
                        )}

                        {/* Challenge / Solution */}
                        {(project.problem || project.solution) && (
                          <div className="grid gap-3 sm:grid-cols-2">
                            {project.problem && (
                              <div className="rounded-xl border border-amber-500/15 bg-amber-50/40 p-4 dark:border-amber-500/15 dark:bg-amber-950/15">
                                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                                  <AlertCircle size={13} />
                                  <span>Challenge</span>
                                </div>
                                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{project.problem}</p>
                              </div>
                            )}
                            {project.solution && (
                              <div className="rounded-xl border border-emerald-500/15 bg-emerald-50/40 p-4 dark:border-emerald-500/15 dark:bg-emerald-950/15">
                                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                                  <CheckCircle2 size={13} />
                                  <span>Solution</span>
                                </div>
                                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{project.solution}</p>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Key Features */}
                        {project.features && project.features.length > 0 && (
                          <div>
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                              Core Features
                            </h4>
                            <ul className="mt-2 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
                              {project.features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                                  <span className="leading-snug">{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Key Learnings */}
                        {project.learnings && (
                          <div className="rounded-xl border border-slate-200/80 bg-slate-50/60 p-4 dark:border-white/[0.06] dark:bg-white/[0.02]">
                            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                              <Lightbulb size={13} className="text-amber-500" />
                              <span>Technical Insights</span>
                            </div>
                            <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{project.learnings}</p>
                          </div>
                        )}

                        {/* Tech Stack */}
                        <div>
                          <h4 className="mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Technology Stack
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((t) => (
                              <span key={t} className="badge text-[11px] font-medium">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}