import React, { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, Code2, GraduationCap, Library, Sparkles, MapPin, Award } from 'lucide-react'

const education = [
  {
    level: 'B.Tech in Computer Science & Engineering',
    institution: 'Vel Tech University',
    location: 'Avadi, Chennai, Tamil Nadu',
    cgpa: '9.3 CGPA',
  },
  {
    level: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Junior College',
    location: 'Tirupati, Andhra Pradesh',
    cgpa: '9.3 CGPA',
  },
  {
    level: 'Secondary School (10th)',
    institution: 'Prashanth English Medium High School',
    location: 'Tirupati, Andhra Pradesh',
    cgpa: '9.8 CGPA',
  },
]

const learning = [
  {
    name: 'MERN Stack Architecture',
    platform: 'Independent Learning & Real-world Projects',
    detail: 'Full-stack development building end-to-end applications with MongoDB, Express, React, and Node.js with state management and authentication.',
    icon: Code2,
    mark: 'MERN',
  },
  {
    name: 'Python Engineering',
    platform: 'Independent Learning & University Curricula',
    detail: 'Object-oriented programming, data processing, algorithm implementation, and backend scripts using Python.',
    icon: Code2,
    mark: 'Python',
  },
  {
    name: 'Data Structures & Algorithms',
    platform: 'LeetCode & Problem Solving',
    detail: 'Regular problem-solving across arrays, strings, recursion, hash maps, sorting, and dynamic programming (150+ problems solved).',
    icon: Library,
    mark: 'DSA',
  },
]

export default function EducationJourney() {
  const [expanded, setExpanded] = useState(null)
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="education"
      className="section-shell"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="section-label">
        <Sparkles size={13} />
        <span>Foundations & Academics</span>
      </div>
      <h2 className="section-title">Education & Continuous Learning</h2>
      <p className="section-copy">
        Academic track record alongside disciplined self-directed engineering and algorithmic practice.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* Left Column: Academic Credentials */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-950">
              <GraduationCap size={20} />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-600 dark:text-cyan-400">Academic History</p>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Degree & Qualifications</h3>
            </div>
          </div>

          <div className="relative space-y-4 pl-6 before:absolute before:bottom-4 before:left-[9px] before:top-4 before:w-[2px] before:bg-slate-200 dark:before:bg-white/10">
            {education.map((item, idx) => (
              <motion.article
                key={item.level}
                initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : idx * 0.1 }}
                className="interactive-panel relative p-4 sm:p-5"
              >
                {/* Node Dot */}
                <span
                  className="absolute -left-[23px] top-6 h-3.5 w-3.5 rounded-full border-2 border-white bg-cyan-500 shadow-sm dark:border-[#080c18] dark:bg-cyan-400"
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white break-words">
                      {item.level}
                    </h4>
                    <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {item.institution}
                    </p>
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <MapPin size={13} className="text-slate-400 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="shrink-0 rounded-xl border border-cyan-500/20 bg-cyan-50/70 px-3 py-1.5 text-right dark:border-cyan-400/20 dark:bg-cyan-950/30">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">Score</p>
                    <p className="mt-0.5 text-sm font-extrabold text-slate-900 dark:text-white">{item.cgpa}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Right Column: Technical Self-Directed Learning */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-white">
              <Code2 size={20} />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-600 dark:text-cyan-400">Self-Directed Learning</p>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Engineering Disciplines</h3>
            </div>
          </div>

          <div className="space-y-3.5">
            {learning.map((item) => {
              const Icon = item.icon
              const isExpanded = expanded === item.name

              return (
                <div
                  key={item.name}
                  className="interactive-panel overflow-hidden p-0"
                >
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`learning-${item.name}`}
                    onClick={() => setExpanded(isExpanded ? null : item.name)}
                    className={`flex min-h-[72px] w-full items-center gap-3.5 p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-inset ${
                      isExpanded
                        ? 'bg-slate-50 dark:bg-white/[0.04]'
                        : 'hover:bg-slate-50/70 dark:hover:bg-white/[0.02]'
                    }`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-xs font-bold text-white shadow-sm dark:bg-white dark:text-slate-950">
                      {item.mark}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-slate-900 dark:text-white truncate">
                        {item.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-slate-500 dark:text-slate-400 truncate">
                        {item.platform}
                      </span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-cyan-500' : ''
                      }`}
                      aria-hidden="true"
                    />
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
                        <div className="border-t border-slate-200/80 p-4 dark:border-white/[0.08]">
                          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1">
                            Focus & Implementation
                          </p>
                          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                            {item.detail}
                          </p>
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