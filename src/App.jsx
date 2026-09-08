import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import EducationJourney from './components/EducationJourney'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PortfolioIntro from './components/PortfolioIntro'

export default function App() {
  const [introFinished, setIntroFinished] = useState(false)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#080c18] dark:text-slate-200">
      {/* Background Ambient Lighting & Grid */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-50 dark:opacity-40" aria-hidden="true" />
      <div className="pointer-events-none fixed -top-40 right-[-10%] z-0 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.04] blur-[120px] dark:bg-cyan-500/[0.07]" aria-hidden="true" />
      <div className="pointer-events-none fixed top-[40%] left-[-10%] z-0 h-[600px] w-[600px] rounded-full bg-indigo-500/[0.03] blur-[140px] dark:bg-indigo-500/[0.05]" aria-hidden="true" />

      {/* Premium Cinematic Opening Animation */}
      <PortfolioIntro onComplete={() => setIntroFinished(true)} />

      {/* Main App Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6 md:px-8">
          <section id="home"><Hero key={introFinished ? 'hero-ready' : 'hero-intro'} /></section>
          <section id="about"><About /></section>
          <section id="education"><EducationJourney /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="experience"><Experience /></section>
          <section id="certifications"><Certifications /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
    </div>
  )
}