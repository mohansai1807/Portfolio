import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Code2, GraduationCap, Library } from 'lucide-react'

const education = [
  {
    level: 'B.Tech',
    institution: 'Vel Tech University',
    location: 'Avadi, Chennai, Tamil Nadu',
    cgpa: '9.3',
  },
  {
    level: 'Intermediate',
    institution: 'Sri Chaitanya Junior College',
    location: 'Tirupati, Andhra Pradesh',
    cgpa: '9.3',
  },
  {
    level: '10th',
    institution: 'Prashanth English Medium High School',
    location: 'Tirupati, Andhra Pradesh',
    cgpa: '9.8',
  },
]

const learning = [
  {
    name: 'MERN',
    platform: 'Independent learning',
    detail: 'Learning and building with the MERN Stack',
    icon: Code2,
    mark: 'M',
  },
  {
    name: 'Python',
    platform: 'Independent learning',
    detail: 'Learning and building with Python',
    icon: Code2,
    mark: 'Py',
  },
  {
    name: 'DSA',
    platform: 'LeetCode',
    detail: 'Practicing Data Structures & Algorithms through LeetCode',
    icon: Library,
    mark: 'LC',
  },
]

export default function EducationJourney() {
  const [expanded, setExpanded] = useState(null)

  return (
    <motion.section
      className="section-shell"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-label">Foundations &amp; growth</div>
      <h2 className="section-title">Education &amp; Learning Journey</h2>
      <p className="section-copy">
        Building strong foundations through academics, development, and continuous learning.
      </p>

      <div className="relative mt-10 grid gap-10 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,0.9fr)] md:gap-8 lg:gap-12">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950">
              <GraduationCap size={20} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Education</p>
              <h3 className="mt-0.5 text-lg font-bold text-slate-900 dark:text-slate-50">Academic path</h3>
            </div>
          </div>

          <div className="relative space-y-4 pl-6 before:absolute before:bottom-5 before:left-[7px] before:top-5 before:w-px before:bg-slate-300 dark:before:bg-white/15">
            {education.map((item) => (
              <article key={item.level} className="relative rounded-xl border border-slate-200/80 bg-white/75 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-white/10 dark:bg-slate-900/40 dark:hover:border-white/20">
                <span className="absolute -left-[25px] top-6 h-3 w-3 rounded-full border-[3px] border-slate-50 bg-slate-900 dark:border-[#050816] dark:bg-slate-100" aria-hidden="true" />
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-50">{item.level}</h4>
                    <p className="mt-1 text-sm font-semibold leading-5 text-slate-700 dark:text-slate-200">{item.institution}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{item.location}</p>
                  </div>
                  <div className="shrink-0 rounded-lg bg-slate-100 px-2.5 py-2 text-right dark:bg-white/10">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">CGPA</p>
                    <p className="mt-0.5 text-lg font-bold leading-none text-slate-900 dark:text-slate-50">{item.cgpa}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="hidden w-px bg-slate-200 dark:bg-white/10 md:block" aria-hidden="true" />

        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-100">
              <Code2 size={19} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Technical learning</p>
              <h3 className="mt-0.5 text-lg font-bold text-slate-900 dark:text-slate-50">Skills in motion</h3>
            </div>
          </div>

          <div className="space-y-3">
            {learning.map((item) => {
              const Icon = item.icon
              const isExpanded = expanded === item.name

              return (
                <div key={item.name} className="overflow-hidden rounded-xl border border-slate-200/80 bg-white/75 shadow-sm dark:border-white/10 dark:bg-slate-900/40">
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`learning-${item.name}`}
                    onClick={() => setExpanded(isExpanded ? null : item.name)}
                    className={`flex min-h-[72px] w-full items-center gap-3 p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-inset ${isExpanded ? 'bg-slate-100/80 dark:bg-white/10' : 'hover:bg-slate-50 dark:hover:bg-white/5'}`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white dark:bg-slate-100 dark:text-slate-950">{item.mark}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-slate-900 dark:text-slate-50">{item.name}</span>
                      <span className="mt-0.5 block text-xs text-slate-500 dark:text-slate-400">{item.platform}</span>
                    </span>
                    <Icon size={17} className="shrink-0 text-slate-400" aria-hidden="true" />
                    <ChevronDown size={17} className={`shrink-0 text-slate-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`learning-${item.name}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                      >
                        <div className="flex items-start gap-3 border-t border-slate-200/80 px-4 py-4 dark:border-white/10">
                          <span className="mt-0.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{item.platform}</span>
                          <p className="text-sm leading-5 text-slate-600 dark:text-slate-300">{item.detail}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.section>
  )
}