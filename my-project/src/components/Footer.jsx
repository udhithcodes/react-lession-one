import { personalInfo } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { ArrowUp, Mail } from 'lucide-react'

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-top-grid">
          {/* Col 1: Brand & Bio */}
          <div className="footer-col brand-col">
            <a href="#home" className="footer-brand" onClick={scrollToTop}>
              <div className="nav-logo-icon">U</div>
              <span className="brand-name">
                UDHITH<span className="brand-dot">.</span>DEV
              </span>
            </a>
            <p className="footer-bio">
              Frontend Developer & B.Sc IT student creating clean, accessible, and responsive user experiences with modern web standards.
            </p>
            <div className="footer-social-row">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-link"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-link-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Technical Skills</a></li>
              <li><a href="#projects">Portfolio Projects</a></li>
              <li><a href="#education">Education Timeline</a></li>
              <li><a href="#contact">Contact & Inquiries</a></li>
            </ul>
          </div>

          {/* Col 3: Key Projects */}
          <div className="footer-col">
            <h4 className="footer-col-title">Featured Projects</h4>
            <ul className="footer-link-list">
              <li><a href="#projects">Momentum Study Planner</a></li>
              <li><a href="#projects">UX E-Commerce Website</a></li>
              <li><a href="#projects">BMW Landing Page</a></li>
              <li>
                <button type="button" className="footer-text-btn" onClick={onOpenResume}>
                  View Full Resume (PDF)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Status / Location */}
          <div className="footer-col">
            <h4 className="footer-col-title">Current Status</h4>
            <div className="footer-status-box glass-panel">
              <div className="footer-status-indicator">
                <span className="pulse-dot"></span>
                <span className="status-title">Open for Opportunities</span>
              </div>
              <p className="status-note">
                Available for Frontend Developer roles, internships, and technical collaborations.
              </p>
              <span className="status-loc">📍 Sathyamangalam, Tamil Nadu</span>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Udhith R. All rights reserved. Crafted with precision & React.js.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            title="Scroll back to top"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
