import React, { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Braces,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Github,
  Globe2,
  Layout,
  Network,
  Server,
  Terminal,
  Video,
  Wrench,
} from 'lucide-react'
import { skillGroups } from '../data/skills'

const categoryIcons = [Code2, Layout, Database, Wrench]

const technologyIcons = {
  Python: Terminal,
  JavaScript: Braces,
  HTML: FileCode2,
  HTML5: FileCode2,
  CSS: Code2,
  CSS3: Code2,
  SQL: Database,
  'React.js': Code2,
  Bootstrap: Layout,
  'Tailwind CSS': Code2,
  'Node.js': Server,
  'Express.js': Network,
  MongoDB: Database,
  MySQL: Database,
  Git: GitBranch,
  GitHub: Github,
  'REST APIs': Globe2,
  'Socket.IO': Network,
  WebRTC: Video,
 
}

const ease = [0.16, 1, 0.3, 1]

export default function Skills() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      className="relative overflow-hidden section-shell"
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView={shouldReduceMotion ? undefined : 'visible'}
      viewport={{ once: true, margin: '-80px' }}
    >
      <motion.div
        className="pointer-events-none absolute left-0 right-0 top-[8.5rem] hidden h-px origin-left bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent md:block"
        variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1 } }}
        transition={{ duration: 1.1, delay: 0.85, ease }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/4 -translate-x-full bg-gradient-to-r from-transparent via-cyan-300/[0.06] to-transparent"
        variants={{ hidden: { x: '-100%' }, visible: { x: '500%' } }}
        transition={{ duration: 1.1, delay: 1.55, ease }}
        aria-hidden="true"
      />

      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.45, ease }}
      >
        <div className="section-label">Capabilities</div>
      </motion.div>
      <motion.h2
        className="section-title"
        variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6, delay: 0.18, ease }}
      >
        Technical Skills
      </motion.h2>
      <motion.p
        className="section-copy"
        variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.55, delay: 0.38, ease }}
      >
        A comprehensive overview of my core technical stack, libraries, and developer tools.
      </motion.p>

      <motion.div
        className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5"
        variants={{ visible: { transition: { delayChildren: 0.75, staggerChildren: 0.14 } } }}
      >
        {skillGroups.map((group, index) => (
          <SkillCard
            key={group.title}
            group={group}
            CategoryIcon={categoryIcons[index] || Code2}
            shouldReduceMotion={shouldReduceMotion}
          />
        ))}
      </motion.div>
    </motion.section>
  )
}

function SkillCard({ group, CategoryIcon, shouldReduceMotion }) {
  const cardRef = useRef(null)

  const handlePointerMove = (event) => {
    if (shouldReduceMotion || !cardRef.current) return
    const bounds = cardRef.current.getBoundingClientRect()
    cardRef.current.style.setProperty('--spotlight-x', `${event.clientX - bounds.left}px`)
    cardRef.current.style.setProperty('--spotlight-y', `${event.clientY - bounds.top}px`)
  }

  return (
    <motion.article
      ref={cardRef}
      onPointerMove={handlePointerMove}
      variants={{ hidden: { opacity: 0, y: 26, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1 } }}
      transition={{ duration: 0.65, ease }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 p-5 shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:border-cyan-400/30 hover:shadow-[0_16px_40px_-28px_rgba(34,211,238,0.8)] sm:p-6"
      style={{ '--spotlight-x': '50%', '--spotlight-y': '0%' }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(220px circle at var(--spotlight-x) var(--spotlight-y), rgba(34, 211, 238, 0.08), transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
          <CategoryIcon size={18} />
        </span>
        <h3 className="font-semibold text-slate-100">{group.title}</h3>
      </div>

      <motion.div
        className="relative z-10 mt-5 flex flex-wrap gap-2"
        variants={{ visible: { transition: { delayChildren: 0.18, staggerChildren: 0.055 } } }}
      >
        {group.skills.map((skill) => {
          const TechnologyIcon = technologyIcons[skill] || Code2
          return (
            <motion.span
              key={skill}
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.3, ease }}
              className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.045] px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-[border-color,background-color,color,transform,box-shadow] duration-[250ms] hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-400/[0.08] hover:text-cyan-100 hover:shadow-[0_5px_14px_-10px_rgba(34,211,238,0.9)]"
            >
              <TechnologyIcon size={12} className="text-cyan-400/0 transition-colors duration-[250ms] group-hover:text-cyan-400" aria-hidden="true" />
              {skill}
            </motion.span>
          )
        })}
      </motion.div>
    </motion.article>
  )
}
