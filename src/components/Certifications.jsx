import React from 'react'
import { Award, Code2, Terminal } from 'lucide-react'

const certs = [
  {
    id: 'nxtwave',
    title: 'Certification in Web Development & SQL',
    issuer: 'NxtWave',
    year: '2026',
    desc: 'Earned comprehensive certification in full-stack web development, RESTful APIs, Node.js, Express, and SQL database management.',
    category: 'FULL STACK & SQL',
    icon: Code2,
  },
  {
    id: '3skill',
    title: '2-Month Web Development Internship',
    issuer: '3Skill Company',
    year: '2026',
    desc: 'Completed hands-on software development internship focused on responsive web engineering, UI components, and real-world project delivery.',
    category: 'WEB DEVELOPMENT',
    icon: Award,
  },
  {
    id: 'veltech-python',
    title: 'Python Programming Certificate',
    issuer: 'Vel Tech University',
    year: '2025',
    desc: 'Validated core proficiency in Python syntax, object-oriented programming, data structures, and algorithmic problem-solving.',
    category: 'PYTHON & DSA',
    icon: Terminal,
  },
]

export default function Certifications() {
  return (
    <section className="section-shell">
      <div className="section-label">Qualifications</div>
      <h2 className="section-title">Certifications</h2>
      <p className="section-copy">
        Formal technical credentials, software development internships, and programming certifications earned.
      </p>

      {/* Timeline Wrapper */}
      <div className="relative mt-10 ml-2 space-y-6 md:ml-4">
        {/* Vertical Timeline Line */}
        <div
          className="absolute left-3 top-4 bottom-4 w-0.5 bg-slate-300 dark:bg-purple-900/50"
          aria-hidden="true"
        />

        {certs.map((c) => {
          const IconComponent = c.icon

          return (
            <div key={c.id} className="relative pl-8 md:pl-10">
              {/* Timeline Node Dot */}
              <div
                className="absolute -left-[1px] top-6 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-slate-50 bg-purple-600 dark:border-[#050816] dark:bg-purple-500 shadow-sm"
                aria-hidden="true"
              />

              {/* Card Container */}
              <div className="group rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-slate-300 dark:border-white/10 dark:bg-[#070b19] dark:hover:border-purple-500/30 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-400">
                    <IconComponent size={22} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 break-words">
                      {c.title}
                    </h3>
                    <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                      <span>{c.issuer}</span>
                      <span className="mx-1.5">•</span>
                      <span>{c.year}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {c.desc}
                    </p>

                    {/* Category Pill */}
                    <div className="mt-4">
                      <span className="inline-block rounded-md bg-purple-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-purple-800 dark:bg-purple-950/80 dark:text-purple-300">
                        {c.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
