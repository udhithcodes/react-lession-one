import { useState, useEffect } from 'react'
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react'

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="nav-brand" onClick={(e) => scrollToSection(e, '#home')}>
          <div className="nav-logo-icon">U</div>
          <span className="brand-name">
            UDHITH<span className="brand-dot">.</span>DEV
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <div className="availability-badge" title="Actively looking for frontend developer roles & internships">
            <span className="pulse-dot"></span>
            <span className="badge-text">Open to Work</span>
          </div>

          <button
            type="button"
            className="btn btn-secondary nav-resume-btn"
            onClick={onOpenResume}
            aria-label="View Resume"
          >
            <FileText size={16} />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="btn btn-primary nav-hire-btn"
            onClick={(e) => scrollToSection(e, '#contact')}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mobile-drawer-actions">
              <button
                type="button"
                className="btn btn-secondary w-full"
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenResume()
                }}
              >
                <FileText size={16} />
                <span>View Full Resume</span>
              </button>
              <a
                href="#contact"
                className="btn btn-primary w-full"
                onClick={(e) => scrollToSection(e, '#contact')}
              >
                <span>Hire / Contact Me</span>
                <ArrowUpRight size={16} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
