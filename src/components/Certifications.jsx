import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Award, Code2, Terminal, Sparkles, CheckCircle2, Calendar } from 'lucide-react'

const certs = [
  {
    id: 'nxtwave',
    title: 'Certification in Web Development & SQL',
    issuer: 'NxtWave',
    year: '2026',
    desc: 'Earned comprehensive certification in full-stack web development, RESTful APIs, Node.js, Express, and SQL database management.',
    category: 'Full Stack & SQL',
    icon: Code2,
  },
  {
    id: '3skill',
    title: '2-Month Web Development Internship',
    issuer: '3Skill Company',
    year: '2026',
    desc: 'Completed hands-on software development internship focused on responsive web engineering, UI components, and real-world project delivery.',
    category: 'Web Development',
    icon: Award,
  },
  {
    id: 'veltech-python',
    title: 'Python Programming Certificate',
    issuer: 'Vel Tech University',
    year: '2025',
    desc: 'Validated core proficiency in Python syntax, object-oriented programming, data structures, and algorithmic problem-solving.',
    category: 'Python & DSA',
    icon: Terminal,
  },
]

export default function Certifications() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="certifications"
      className="section-shell"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="section-label">
        <Sparkles size={13} />
        <span>Credentials</span>
      </div>
      <h2 className="section-title">Certifications & Internships</h2>
      <p className="section-copy">
        Formal technical credentials, industry internships, and certified software engineering proficiencies.
      </p>

      {/* Cards Grid */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, index) => {
          const IconComponent = c.icon

          return (
            <motion.article
              key={c.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : index * 0.1 }}
              className="interactive-panel flex flex-col justify-between p-5 sm:p-6"
            >
              <div>
                {/* Header Icon + Category */}
                <div className="flex items-center justify-between gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
                    <IconComponent size={20} />
                  </span>
                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
                    {c.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white break-words">
                  {c.title}
                </h3>

                {/* Issuer & Year */}
                <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span>{c.issuer}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{c.year}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {c.desc}
                </p>
              </div>

              {/* Verified Status Tag */}
              <div className="mt-5 flex items-center gap-1.5 border-t border-slate-200/80 pt-3 text-[11px] font-semibold text-emerald-600 dark:border-white/[0.08] dark:text-emerald-400">
                <CheckCircle2 size={13} />
                <span>Verified Credential</span>
              </div>
            </motion.article>
          )
        })}
      </div>
    </motion.section>
  )
}
