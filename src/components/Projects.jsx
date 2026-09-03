import React, { useState } from 'react'
import { projects } from '../data/projects'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Github, Info } from 'lucide-react'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="section-shell">
      <div className="section-label">Portfolio</div>
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-copy">
        Full-stack web applications and software engineering projects built with modern technologies.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6">
        {projects.map((project, index) => {
          const hasGithub = Boolean(project.github && project.github !== '#')
          const hasDemo = Boolean(project.demo && project.demo !== '#')

          return (
            <motion.div
              key={project.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: shouldReduceMotion ? 0 : index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="group flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-sm transition-[border-color,box-shadow,background-color] duration-300 hover:border-cyan-300/60 hover:bg-white hover:shadow-[0_12px_30px_-18px_rgba(34,211,238,0.55)] dark:border-white/10 dark:bg-slate-900/40 dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:bg-slate-900/60 dark:hover:shadow-[0_16px_40px_-22px_rgba(34,211,238,0.65)] sm:p-5"
            >
              <div>
                {/* Project Image Preview */}
                {project.image && (
                  <div className="relative isolate mb-5">
                    <div className="absolute -inset-2 -z-10 rounded-2xl bg-cyan-400/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 dark:bg-cyan-400/15" />
                    <div className="group/preview relative aspect-video overflow-hidden rounded-xl border border-slate-200/60 bg-slate-950 dark:border-white/10">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className={`h-full w-full object-cover object-center transition-transform duration-[350ms] ease-out group-hover:scale-[1.04] ${project.id === 'kailasa' ? 'object-[78%_center]' : ''} ${project.id === 'virtual-meet' ? 'object-[78%_center]' : ''}`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center gap-2 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover/preview:opacity-100 group-focus-within/preview:opacity-100">
                        {hasDemo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="button-primary min-h-0 px-3 py-2 text-xs">
                            Live Demo <ArrowUpRight size={14} />
                          </a>
                        )}
                        {hasGithub && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="button-secondary min-h-0 border-white/30 bg-slate-950/70 px-3 py-2 text-xs text-white hover:bg-slate-900">
                            GitHub <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-400">{project.category}</p>
                    <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-slate-50 break-words">{project.title}</h3>
                  </div>
                  {project.featured && <span className="shrink-0 rounded bg-slate-900/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-700 dark:bg-white/10 dark:text-slate-300">Featured</span>}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.desc}
                </p>
                {project.features?.length > 0 && (
                  <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">Highlights</span>
                    {project.features.slice(0, 3).map((feature) => (
                      <React.Fragment key={feature}>
                        <span aria-hidden="true" className="text-cyan-500">·</span>
                        <span>{feature}</span>
                      </React.Fragment>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/60 pt-4 dark:border-white/5">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 transition-colors hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:text-slate-100 dark:hover:text-cyan-400"
                >
                  <Info size={14} />
                  <span>View Details</span><ArrowUpRight size={13} />
                </button>

                <div className="flex items-center gap-2">
                  {hasGithub && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-secondary text-xs px-3 py-1.5"
                    >
                      <Github size={14} />
                      <span>GitHub</span><ArrowUpRight size={13} />
                    </a>
                  )}
                  {hasDemo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-primary text-xs px-3 py-1.5"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}