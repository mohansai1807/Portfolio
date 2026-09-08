import React from 'react'
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
  Sparkles,
} from 'lucide-react'
import { skillGroups } from '../data/skills'

const categoryIcons = {
  Languages: Terminal,
  Frontend: Layout,
  'Backend & Databases': Server,
  'Tools & Tech': Wrench,
}

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

export default function Skills() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="skills"
      className="section-shell"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="section-label">
        <Sparkles size={13} />
        <span>Technical Arsenal</span>
      </div>
      <h2 className="section-title">Skills & Technologies</h2>
      <p className="section-copy">
        Production-tested programming languages, frontend systems, backend frameworks, and engineering tools.
      </p>

      {/* Categories Grid */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:gap-6">
        {skillGroups.map((group, index) => {
          const CategoryIcon = categoryIcons[group.title] || Code2

          return (
            <motion.div
              key={group.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : index * 0.08 }}
              className="interactive-panel group relative flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-3.5 dark:border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 transition-colors group-hover:bg-cyan-500/15 dark:bg-cyan-400/10 dark:text-cyan-300">
                      <CategoryIcon size={18} />
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {group.title}
                    </h3>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600 dark:bg-white/[0.06] dark:text-slate-400">
                    {group.skills.length} skills
                  </span>
                </div>

                {/* Skill Tiles */}
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-2">
                  {group.skills.map((skill) => {
                    const TechIcon = technologyIcons[skill] || Code2
                    return (
                      <div
                        key={skill}
                        className="group/item flex items-center gap-2.5 rounded-xl border border-slate-200/60 bg-white/60 p-2.5 shadow-none transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-white hover:shadow-sm dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.06] dark:hover:shadow-[0_4px_16px_-4px_rgba(56,189,248,0.2)]"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors group-hover/item:bg-cyan-500/15 group-hover/item:text-cyan-600 dark:bg-white/[0.06] dark:text-slate-400 dark:group-hover/item:bg-cyan-400/20 dark:group-hover/item:text-cyan-300">
                          <TechIcon size={13} />
                        </span>
                        <span className="text-xs font-semibold text-slate-800 transition-colors group-hover/item:text-slate-950 dark:text-slate-200 dark:group-hover/item:text-white truncate">
                          {skill}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}
