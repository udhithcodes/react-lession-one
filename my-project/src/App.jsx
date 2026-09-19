import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import EducationTimeline from './components/EducationTimeline'
import Contact from './components/Contact'
import ResumeModal from './components/ResumeModal'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  const handleOpenResume = () => setIsResumeOpen(true)
  const handleCloseResume = () => setIsResumeOpen(false)

  return (
    <div className="portfolio-root">
      <Navbar onOpenResume={handleOpenResume} />
      <main>
        <Hero onOpenResume={handleOpenResume} />
        <About />
        <Skills />
        <Projects />
        <EducationTimeline />
        <Contact />
      </main>
      <Footer onOpenResume={handleOpenResume} />
      
      {/* Interactive Resume Lightbox Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  )
}
