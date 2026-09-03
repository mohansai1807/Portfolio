import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, Globe, Terminal, UserCheck } from 'lucide-react'

export default function PortfolioIntro({ onComplete }) {
  const [phase, setPhase] = useState(1) // 1: Build/Create/Innovate, 2: Transition/Contract, 3: Wait for User Action
  const [isVisible, setIsVisible] = useState(true)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const canvasRef = useRef(null)

  // Check reduced motion or session storage on mount
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasSeen = sessionStorage.getItem('hasSeenPortfolioIntro') === 'true'

    if (prefersReducedMotion || hasSeen) {
      setIsVisible(false)
      if (onComplete) onComplete()
    }
  }, [onComplete])

  useEffect(() => {
    if (!isVisible) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isVisible])

  // Phase sequence: Phase 1 (0-2.4s) -> Phase 2 (2.4-3.4s) -> Phase 3 (Stays until user clicks action button)
  useEffect(() => {
    if (!isVisible) return

    // Phase 1 -> Phase 2 (at 2.4s)
    const timer1 = setTimeout(() => {
      setPhase(2)
    }, 2400)

    // Phase 2 -> Phase 3 (at 3.4s) - Waits for user interaction
    const timer2 = setTimeout(() => {
      setPhase(3)
    }, 3400)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [isVisible])

  // Handler when user clicks Connect / View Work / Skip button
  const handleUserAction = (targetSection = null) => {
    setIsFadingOut(true)
    setTimeout(() => {
      sessionStorage.setItem('hasSeenPortfolioIntro', 'true')
      setIsVisible(false)
      if (onComplete) onComplete()

      if (targetSection) {
        const el = document.getElementById(targetSection)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }, 400)
  }

  // Keyboard accessibility: ESC key to skip or enter
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isVisible) {
        handleUserAction()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isVisible])

  // 3D Canvas Wireframe Globe & Neural Tech Mesh Animation
  useEffect(() => {
    if (!isVisible || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let startTime = performance.now()

    // Handle high DPI crisp rendering
    const handleResize = () => {
      if (!canvas) return
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // Generate Globe Nodes (3D coordinates)
    const nodeCount = 36
    const nodes = []
    const goldenRatio = (1 + Math.sqrt(5)) / 2
    for (let i = 0; i < nodeCount; i++) {
      const theta = 2 * Math.PI * i / goldenRatio
      const phi = Math.acos(1 - 2 * (i + 0.5) / nodeCount)
      nodes.push({
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi),
        pulse: Math.random() * Math.PI * 2,
        size: Math.random() * 2 + 1.5,
      })
    }

    // Generate connections (arcs)
    const connections = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const dz = nodes[i].z - nodes[j].z
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < 0.95) {
          connections.push([i, j])
        }
      }
    }

    // Generate background floating tech particles
    const particleCount = 70
    const particles = Array.from({ length: particleCount }, () => ({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      z: (Math.random() - 0.5) * 2,
      vx: (Math.random() - 0.5) * 0.002,
      vy: (Math.random() - 0.5) * 0.002,
      vz: (Math.random() - 0.5) * 0.002,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
    }))

    // Latitude and Longitude Ring Lines
    const latRings = 8
    const lonRings = 12

    // Main Canvas Render Loop
    const render = (now) => {
      const elapsed = (now - startTime) / 1000
      const width = window.innerWidth
      const height = window.innerHeight

      ctx.clearRect(0, 0, width, height)

      // Base globe properties
      const isMobile = width < 640
      const baseRadius = Math.min(width, height) * (isMobile ? 0.32 : 0.28)
      
      // Dynamic contraction scale based on phase
      let targetScale = 1.0
      let globeAlpha = 0.85
      
      if (elapsed > 2.4 && elapsed <= 3.4) {
        // Phase 2: Globe contracts AND fades out FAST — fully gone by 60% through this phase
        // so it never bleeds into the Phase 2 / Phase 3 text
        const p2Progress = (elapsed - 2.4) / 1.0
        targetScale = Math.max(0.02, 1.0 - Math.pow(p2Progress, 2) * 0.98)
        globeAlpha = Math.max(0, 1 - p2Progress * 1.8)   // fades to 0 by ~p2Progress=0.56
      } else if (elapsed > 3.4) {
        // Phase 3: Globe fully invisible — don't draw anything
        targetScale = 0.0
        globeAlpha = 0.0
      }

      const radius = baseRadius * targetScale
      const cx = width / 2
      const cy = height / 2

      // Rotation angles
      const rotY = elapsed * 0.35
      const rotX = Math.sin(elapsed * 0.2) * 0.2 + 0.15

      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)
      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)

      // 3D Projection helper
      const project = (x, y, z) => {
        let rx = x * cosY - z * sinY
        let rz = x * sinY + z * cosY
        let ry = y * cosX - rz * sinX
        rz = y * sinX + rz * cosX

        const perspective = 600 / (600 + rz * radius)
        return {
          px: cx + rx * radius * perspective,
          py: cy + ry * radius * perspective,
          pz: rz,
          scale: perspective,
        }
      }

      // Draw Grid / Particles — only in Phase 1 when globeAlpha is meaningful
      // Skip entirely in Phase 2/3 so particles never bleed over the text
      if (globeAlpha > 0.05) {
        ctx.lineWidth = 0.8
        particles.forEach((p) => {
          p.x += p.vx
          p.y += p.vy
          p.z += p.vz

          if (Math.abs(p.x) > 1.2) p.x *= -0.9
          if (Math.abs(p.y) > 1.2) p.y *= -0.9
          if (Math.abs(p.z) > 1.2) p.z *= -0.9

          // Constrain spread to 1.2x globe radius (not 1.8x) so particles
          // never stray into text regions even on large screens
          const proj = project(p.x * 1.2, p.y * 1.2, p.z * 1.2)
          if (proj.pz > -1) {
            ctx.beginPath()
            ctx.arc(proj.px, proj.py, p.size * proj.scale, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(148, 163, 184, ${p.alpha * globeAlpha * 0.5})`
            ctx.fill()
          }
        })
      }

      // Draw Latitude Rings
      ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * globeAlpha})`
      ctx.lineWidth = 1
      for (let i = 1; i < latRings; i++) {
        const latAngle = (i / latRings - 0.5) * Math.PI
        const rLat = Math.cos(latAngle)
        const yLat = Math.sin(latAngle)
        const points = 32

        ctx.beginPath()
        for (let j = 0; j <= points; j++) {
          const lonAngle = (j / points) * Math.PI * 2
          const x = rLat * Math.cos(lonAngle)
          const z = rLat * Math.sin(lonAngle)
          const proj = project(x, yLat, z)

          if (j === 0) ctx.moveTo(proj.px, proj.py)
          else ctx.lineTo(proj.px, proj.py)
        }
        ctx.stroke()
      }

      // Draw Longitude Rings
      for (let i = 0; i < lonRings; i++) {
        const lonAngle = (i / lonRings) * Math.PI
        const points = 32
        ctx.beginPath()
        for (let j = 0; j <= points; j++) {
          const latAngle = (j / points) * Math.PI * 2 - Math.PI
          const x = Math.cos(latAngle) * Math.cos(lonAngle)
          const y = Math.sin(latAngle)
          const z = Math.cos(latAngle) * Math.sin(lonAngle)
          const proj = project(x, y, z)

          if (j === 0) ctx.moveTo(proj.px, proj.py)
          else ctx.lineTo(proj.px, proj.py)
        }
        ctx.stroke()
      }

      // Projected Nodes
      const projNodes = nodes.map((node) => project(node.x, node.y, node.z))

      // Draw Node Connecting Arcs
      connections.forEach(([i, j]) => {
        const p1 = projNodes[i]
        const p2 = projNodes[j]

        if (p1.pz > -0.8 && p2.pz > -0.8) {
          const depthAlpha = Math.min(1, Math.max(0, (p1.pz + p2.pz) / 2 + 1.2))
          ctx.beginPath()
          ctx.moveTo(p1.px, p1.py)

          const midX = (p1.px + p2.px) / 2 + (cx - (p1.px + p2.px) / 2) * 0.15
          const midY = (p1.py + p2.py) / 2 + (cy - (p1.py + p2.py) / 2) * 0.15
          ctx.quadraticCurveTo(midX, midY, p2.px, p2.py)

          ctx.strokeStyle = `rgba(129, 140, 248, ${0.35 * depthAlpha * globeAlpha})`
          ctx.lineWidth = 1.2
          ctx.stroke()
        }
      })

      // Draw Glowing Tech Nodes
      projNodes.forEach((proj, idx) => {
        if (proj.pz > -0.7) {
          const node = nodes[idx]
          const pulseVal = Math.sin(elapsed * 3 + node.pulse) * 0.5 + 0.5
          const alpha = (proj.pz + 1) / 2 * globeAlpha
          const nodeRadius = (node.size + pulseVal * 1.5) * proj.scale

          ctx.beginPath()
          ctx.arc(proj.px, proj.py, nodeRadius * 2.2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(56, 189, 248, ${0.2 * alpha})`
          ctx.fill()

          ctx.beginPath()
          ctx.arc(proj.px, proj.py, nodeRadius, 0, Math.PI * 2)
          ctx.fillStyle = proj.pz > 0.3 ? '#ffffff' : '#38bdf8'
          ctx.fill()
        }
      })

      // Central core burst during transition (Phase 2 to Phase 3)
      if (elapsed > 2.8 && elapsed < 3.8) {
        const tBurst = (elapsed - 2.8) / 1.0
        const burstRadius = Math.sin(tBurst * Math.PI) * (isMobile ? 120 : 200)
        const burstAlpha = Math.sin(tBurst * Math.PI) * 0.45

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, burstRadius + 1)
        grad.addColorStop(0, `rgba(255, 255, 255, ${burstAlpha * 1.5})`)
        grad.addColorStop(0.3, `rgba(56, 189, 248, ${burstAlpha})`)
        grad.addColorStop(0.7, `rgba(99, 102, 241, ${burstAlpha * 0.5})`)
        grad.addColorStop(1, 'rgba(3, 7, 18, 0)')

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(cx, cy, burstRadius + 1, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
       className={`fixed inset-0 z-50 flex h-[100dvh] items-center justify-center overflow-hidden bg-[#030712] text-slate-100 transition-opacity duration-700 ${
    isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
  }`}
    >
      {/* 3D Canvas Background Wireframe Globe — z-0 keeps it strictly behind all text */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      />

      {/* Vignette sits above the canvas (z-[1]) so it masks any canvas
          rendering near the edges/centre before text is composited on top */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_10%,#030712_75%)]" />

      {/* Top Bar Header Branding & Skip Button */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between gap-2 sm:top-6 sm:left-6 sm:right-6">
        <div className="flex min-w-0 items-center gap-2.5 text-[10px] font-mono tracking-wider text-slate-400/80 uppercase sm:text-xs">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="truncate">GLOBAL TECH PLATFORM</span>
        </div>

        <button
          onClick={() => handleUserAction()}
          className="group flex shrink-0 items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-[10px] font-mono text-slate-400 backdrop-blur-md transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-white sm:px-3.5 sm:text-xs"
        >
          <span>SKIP INTRO</span>
          <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-200">
            ESC
          </span>
        </button>
      </div>

      {/* Main Animated Content Overlay */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl items-center justify-center overflow-hidden px-4 text-center sm:px-6">
        <AnimatePresence mode="wait">
          {/* PHASE 1: Editorial Bold Typography (BUILD / CREATE / INNOVATE) */}
          {phase === 1 && (
            <motion.div
              key="phase1"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, filter: 'blur(12px)', y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center space-y-2 sm:space-y-3"
            >
              {/* Minimal Top Tag */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-mono text-cyan-400 backdrop-blur-sm"
              >
                <Globe className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: '10s' }} />
                <span>ARCHITECTING THE FUTURE</span>
              </motion.div>

              {/* Bold Editorial Words: BUILD, CREATE, INNOVATE */}
              <div className="space-y-0.5 font-extrabold tracking-[0.08em] sm:tracking-[0.2em] md:tracking-[0.28em] text-slate-50 uppercase leading-none">
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400"
                >
                  BUILD
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-indigo-300"
                >
                  CREATE
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-white to-slate-400"
                >
                  INNOVATE
                </motion.h1>
              </div>

              {/* Minimal Line Indicator */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-6 h-0.5 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
              />
            </motion.div>
          )}

          {/* PHASE 2: Transition & Mesh Implosion */}
          {phase === 2 && (
            <motion.div
              key="phase2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative flex items-center justify-center">
                <div className="h-16 w-16 rounded-full border border-cyan-500/40 animate-ping opacity-30" />
                <div className="absolute h-10 w-10 rounded-full bg-cyan-400/20 blur-md" />
                <span className="font-mono text-xs text-cyan-300 tracking-widest uppercase">
                  INITIALIZING
                </span>
              </div>
            </motion.div>
          )}

          {/* PHASE 3: Personal Brand Reveal (Waits for User Click to Open Portfolio) */}
          {phase === 3 && (
            <motion.div
              key="phase3"
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center space-y-6"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-1.5 text-xs font-mono text-slate-300 backdrop-blur-md shadow-xl"
              >
                <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                <span>PORTFOLIO IDENTITY</span>
              </motion.div>

              {/* Main Headline */}
              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl font-black tracking-tight text-white uppercase sm:text-5xl md:text-6xl break-words"
                >
                  CONNECT WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-200 to-white">MOHANASAI</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="text-base sm:text-xl font-medium tracking-wide text-slate-300 font-sans"
                >
                  Full Stack Developer <span className="text-cyan-400">•</span> MERN <span className="text-cyan-400">•</span> AI
                </motion.p>
              </div>

              {/* User Action CTAs — Open Main Page on Click */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex w-full flex-col items-stretch justify-center gap-3 pt-2 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
              >
                <button
                  onClick={() => handleUserAction('contact')}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 transition-all hover:bg-cyan-300 hover:scale-105 active:scale-95 shadow-xl shadow-cyan-500/20"
                >
                  <UserCheck className="h-4 w-4" />
                  <span>Connect With Me</span>
                </button>

                <button
                  onClick={() => handleUserAction('home')}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-7 py-3.5 text-sm font-bold text-slate-200 backdrop-blur-md transition-all hover:border-slate-500 hover:bg-slate-800 hover:text-white hover:scale-105 active:scale-95"
                >
                  <span>View My Work</span>
                  <ArrowRight className="h-4 w-4 text-cyan-400" />
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xs font-mono text-slate-400/80 pt-1"
              >
                Click a button above to enter the portfolio
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Subtle Status Bar */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col gap-1 border-t border-slate-900 pt-3 text-[10px] font-mono text-slate-500 sm:bottom-6 sm:left-6 sm:right-6 sm:flex-row sm:items-center sm:justify-between sm:text-[11px]">
        <div className="truncate">LOCATION: GLOBAL / HYDERABAD, IN</div>
        <div className="hidden sm:block">MOHANASAI ARCHITECTURE 2026</div>
        <div>SYS_STATUS: ONLINE</div>
      </div>
    </div>
  )
}
