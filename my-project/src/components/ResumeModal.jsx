import { useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'
import { X, Printer } from 'lucide-react'

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="resume-modal-backdrop" onClick={onClose}>
      <div 
        className="resume-modal-container glass-panel"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-header-name"
      >
        {/* Modal Top Control Bar */}
        <div className="resume-topbar">
          <div className="resume-topbar-left">
            <span className="resume-status-badge">Curriculum Vitae</span>
            <span className="resume-filename">UDHITH_R_RESUME.pdf</span>
          </div>

          <div className="resume-topbar-actions">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close resume viewer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Paper */}
        <div className="resume-sheet">
          {/* Header */}
          <header className="resume-doc-header">
            <h1 id="resume-header-name" className="doc-name">{personalInfo.name}</h1>
            <p className="doc-degree">{personalInfo.degree.toUpperCase()}</p>
            <p className="doc-role">{personalInfo.role}</p>

            <div className="doc-contacts-line">
              <span>{personalInfo.location}</span>
              <span className="dot-sep">•</span>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              <span className="dot-sep">•</span>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</a>
              <span className="dot-sep">•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <span className="dot-sep">•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </header>

          <hr className="doc-divider" />

          {/* Professional Summary */}
          <section className="doc-section">
            <h2 className="doc-section-title">SUMMARY</h2>
            <p className="doc-text">
              B.Sc Information Technology student skilled in frontend development using HTML, CSS, JavaScript, and React.js.
              Experienced in building responsive and user-friendly web applications through academic and personal projects.
              Passionate about creating clean UI, solving problems, and learning modern web technologies.
            </p>
          </section>

          {/* Education */}
          <section className="doc-section">
            <h2 className="doc-section-title">EDUCATION</h2>
            <div className="doc-item">
              <div className="doc-item-row">
                <strong className="doc-org">CMS COLLEGE OF SCIENCE AND COMMERCE</strong>
                <span className="doc-date">Jun 2023 – May 2026</span>
              </div>
              <div className="doc-item-sub">BACHELOR OF SCIENCE (Information Technology)</div>
            </div>

            <div className="doc-item">
              <div className="doc-item-row">
                <strong className="doc-org">Government Model Higher Secondary School Sathyamangalam</strong>
                <span className="doc-date">Jun 2018 – Mar 2023</span>
              </div>
              <div className="doc-item-sub">Higher Secondary Certificate (Computer Science Stream)</div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="doc-section">
            <h2 className="doc-section-title">TECHNICAL SKILLS</h2>
            <ul className="doc-skills-list">
              <li><strong>Programming Languages:</strong> Java, JavaScript, SQL</li>
              <li><strong>Frontend Development:</strong> HTML5, CSS3, JavaScript (ES6+), React.js</li>
              <li><strong>Database Technologies:</strong> MySQL</li>
              <li><strong>Tools & Platforms:</strong> Git, GitHub, VS Code</li>
              <li><strong>Web Technologies:</strong> Responsive Web Design, Flexbox, CSS Grid</li>
              <li><strong>Currently Learning:</strong> React.js, Java Programming</li>
            </ul>
          </section>

          {/* Projects */}
          <section className="doc-section">
            <h2 className="doc-section-title">PROJECTS</h2>

            <div className="doc-project-item">
              <div className="doc-item-row">
                <strong className="doc-project-title">BMW Landing Page</strong>
                <span className="doc-repo-badge">HTML5, CSS3</span>
              </div>
              <p className="doc-project-desc">
                Developed a BMW-inspired landing page using HTML and CSS. Designed modern UI sections including navigation,
                hero banner, vehicle showcase, and footer while focusing on clean layouts and visual appeal.
              </p>
            </div>

            <div className="doc-project-item">
              <div className="doc-item-row">
                <strong className="doc-project-title">UX E-Commerce Website</strong>
                <span className="doc-repo-badge">HTML, CSS, JavaScript</span>
              </div>
              <p className="doc-project-desc">
                Built a responsive e-commerce website using HTML, CSS, and JavaScript. Implemented interactive product displays,
                navigation features, and dynamic user interface components to enhance the online shopping experience.
              </p>
            </div>

            <div className="doc-project-item">
              <div className="doc-item-row">
                <strong className="doc-project-title">Momentum – Daily Study Planner</strong>
                <span className="doc-repo-badge">HTML, CSS, JavaScript, LocalStorage</span>
              </div>
              <p className="doc-project-desc">
                Developed a responsive study planner web application using HTML, CSS, and JavaScript. Implemented task management,
                study scheduling, progress tracking, study streak monitoring, dark/light mode, and interactive animations. Leveraged
                AI-assisted development tools for UI design, debugging, and optimization while independently integrating and customizing functionality.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
