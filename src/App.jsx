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
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#050816] dark:text-slate-200">
      {/* Premium Cinematic Opening Animation */}
      <PortfolioIntro onComplete={() => setIntroFinished(true)} />

      {/* Main App Content */}
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8">
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
  )
}