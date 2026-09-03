import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      className="section-shell"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-label">Background</div>
      <h2 className="section-title">About Me</h2>

      <div className="mt-6 panel">
        <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
          I'm a Full Stack Developer focused on building practical, scalable, and maintainable web applications. My core expertise spans Python, JavaScript, React.js, Node.js, MongoDB, and SQL. I enjoy solving algorithmic Data Structure & Algorithm (DSA) problems and turning complex challenges into clean, accessible digital products. Continuous learning and technical rigor drive my growth as a software engineer.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        <StatCard label="Projects Built" value="4" />
        <StatCard label="Technologies" value="10+" />
        <StatCard label="DSA Problems" value="150+" />
        <StatCard label="Certificates" value="5+" />
      </div>
    </motion.section>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="interactive-panel text-center">
      <div className="text-2xl font-bold text-slate-900 dark:text-slate-50 md:text-3xl">
        {value}
      </div>
      <div className="text-[11px] font-medium leading-snug text-slate-600 dark:text-slate-400 sm:text-xs">
        {label}
      </div>
    </div>
  )
}