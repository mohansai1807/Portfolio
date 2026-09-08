import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Calendar, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react'

const experiences = [
  {
    title: 'Full Stack Development Intensive',
    org: 'NxtWave',
    time: 'Full Stack / Python / SQL',
    desc: 'Completed rigorous training in full-stack web development, Python, Node.js, and SQL. Built hands-on web applications, database schema designs, and REST APIs.',
    highlights: [
      'Engineered responsive web applications with React.js & Node.js',
      'Designed relational schemas and wrote complex SQL queries',
      'Implemented RESTful API endpoints and security best practices',
    ],
  },
  {
    title: 'Data Structures & Algorithms Problem Solving',
    org: 'Self-Driven Practice & LeetCode',
    time: 'Ongoing',
    desc: 'Consistent problem solving across arrays, strings, recursion, sorting, searching, dynamic programming, and data structures (150+ problems solved).',
    highlights: [
      '150+ algorithmic coding problems solved with analytical rigor',
      'Focus on time & space complexity optimization (Big-O)',
      'Regular implementation of standard data structures in code',
    ],
  },
]

export default function Experience() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="experience"
      className="section-shell"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="section-label">
        <Sparkles size={13} />
        <span>Experience & Practice</span>
      </div>
      <h2 className="section-title">Engineering Journey</h2>
      <p className="section-copy">
        Highlights of specialized engineering training, hands-on development, and disciplined problem-solving practice.
      </p>

      {/* Timeline List */}
      <div className="relative mt-10 space-y-6 pl-6 before:absolute before:bottom-4 before:left-[9px] before:top-4 before:w-[2px] before:bg-slate-200 dark:before:bg-white/10 sm:pl-8 sm:before:left-[11px]">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={shouldReduceMotion ? false : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : index * 0.12 }}
            className="interactive-panel relative p-5 sm:p-6"
          >
            {/* Timeline Dot */}
            <span
              className="absolute -left-[23px] top-6 h-3.5 w-3.5 rounded-full border-2 border-white bg-cyan-500 shadow-sm sm:-left-[27px] dark:border-[#080c18] dark:bg-cyan-400"
              aria-hidden="true"
            />

            {/* Header: Org, Title, Time */}
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-md bg-cyan-500/10 px-2.5 py-0.5 text-xs font-bold text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                  <Briefcase size={12} />
                  <span>{exp.org}</span>
                </div>
                <h3 className="mt-1.5 text-lg font-bold text-slate-900 dark:text-white sm:text-xl break-words">
                  {exp.title}
                </h3>
              </div>
              <div className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200/80 bg-slate-100/70 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                <Calendar size={13} className="text-cyan-500" />
                <span>{exp.time}</span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {exp.desc}
            </p>

            {/* Key highlights bulleted */}
            {exp.highlights && (
              <div className="mt-4 border-t border-slate-200/80 pt-3 dark:border-white/[0.08]">
                <ul className="grid gap-2 sm:grid-cols-1">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}