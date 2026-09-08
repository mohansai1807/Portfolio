import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Award, Code, Cpu, FolderGit2, Sparkles, Terminal, CheckCircle2 } from 'lucide-react'

export default function About() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="about"
      className="section-shell"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="section-label">
        <Sparkles size={13} />
        <span>Background</span>
      </div>
      <h2 className="section-title">About Me</h2>
      <p className="section-copy">
        An engineering approach driven by full-stack curiosity, clean code standards, and algorithmic problem-solving.
      </p>

      {/* Main Content Grid */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:gap-8">
        {/* Narrative Panel */}
        <div className="panel flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
              Engineering Practical & Scalable Web Solutions
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base sm:leading-7">
              I'm a Full Stack Developer focused on building practical, scalable, and maintainable web applications. My core expertise spans <strong className="font-semibold text-slate-900 dark:text-slate-100">Python</strong>, <strong className="font-semibold text-slate-900 dark:text-slate-100">JavaScript</strong>, <strong className="font-semibold text-slate-900 dark:text-slate-100">React.js</strong>, <strong className="font-semibold text-slate-900 dark:text-slate-100">Node.js</strong>, <strong className="font-semibold text-slate-900 dark:text-slate-100">MongoDB</strong>, and <strong className="font-semibold text-slate-900 dark:text-slate-100">SQL</strong>.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base sm:leading-7">
              I enjoy solving algorithmic Data Structure & Algorithm (DSA) problems and turning complex challenges into clean, accessible digital products. Continuous learning and technical rigor drive my growth as a software engineer.
            </p>
          </div>

          {/* Core Focus Highlights */}
          <div className="border-t border-slate-200/80 pt-4 dark:border-white/[0.08]">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Core Strengths
            </p>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">
                <CheckCircle2 size={15} className="text-cyan-500 shrink-0" />
                <span>End-to-End Full Stack MERN Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">
                <CheckCircle2 size={15} className="text-cyan-500 shrink-0" />
                <span>Algorithmic Thinking & DSA Problem Solving</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">
                <CheckCircle2 size={15} className="text-cyan-500 shrink-0" />
                <span>RESTful APIs & Database Optimization</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">
                <CheckCircle2 size={15} className="text-cyan-500 shrink-0" />
                <span>Responsive & Accessible UI Engineering</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics / Stats */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
          <StatCard
            icon={FolderGit2}
            value="5+"
            label="Projects Built"
            desc="Full stack & frontend applications"
          />
          <StatCard
            icon={Cpu}
            value="10+"
            label="Technologies"
            desc="Languages, frameworks & tools"
          />
          <StatCard
            icon={Terminal}
            value="150+"
            label="DSA Problems"
            desc="LeetCode & algorithmic challenges"
          />
          <StatCard
            icon={Award}
            value="3+"
            label="Certifications"
            desc="Web dev & Python credentials"
          />
        </div>
      </div>
    </motion.section>
  )
}

function StatCard({ icon: Icon, value, label, desc }) {
  return (
    <div className="interactive-panel flex flex-col justify-between p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
          <Icon size={18} />
        </span>
      </div>
      <div className="mt-4">
        <div className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          {value}
        </div>
        <div className="mt-1 text-xs font-bold text-slate-800 dark:text-slate-200">
          {label}
        </div>
        <div className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
          {desc}
        </div>
      </div>
    </div>
  )
}