import React from 'react'
import { Calendar, Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section className="section-shell">
      <div className="section-label">Experience</div>
      <h2 className="section-title">My Journey</h2>
      <p className="section-copy">
        Highlights of my engineering education, practical project experience, and continuous problem-solving practice.
      </p>

      <div className="mt-8 space-y-5">
        <TimelineItem
          title="Full Stack Development Intensive"
          org="NxtWave"
          time="Full Stack / Python / SQL"
          desc="Completed rigorous training in full-stack web development, Python, Node.js, and SQL. Built hands-on web applications, database schema designs, and REST APIs."
        />
        <TimelineItem
          title="Data Structures & Algorithms Journey"
          org="Self-Driven Practice"
          time="Ongoing"
          desc="Consistent problem solving across arrays, strings, recursion, sorting, searching, dynamic programming, and data structures (150+ problems solved)."
        />
      </div>
    </section>
  )
}

function TimelineItem({ title, org, time, desc }) {
  return (
    <div className="interactive-panel">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <Briefcase size={14} />
            <span>{org}</span>
          </div>
          <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-100 break-words">
            {title}
          </h3>
        </div>
        <div className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Calendar size={13} />
          <span>{time}</span>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {desc}
      </p>
    </div>
  )
}