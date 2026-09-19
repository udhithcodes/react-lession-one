import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Code2, 
  Sparkles, 
  Layers, 
  Terminal 
} from 'lucide-react'

const ROLES = [
  "Frontend Developer",
  "React.js Specialist",
  "Clean UI Craftsman",
  "B.Sc IT Fresher"
]

export default function Hero({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = ROLES[roleIndex]
    
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1))
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1))
        if (displayedText.length === 0) {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % ROLES.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? 45 : 100)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, roleIndex])

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          {/* Top Pill */}
          <div className="hero-badge">
            <Sparkles size={14} className="hero-badge-icon" />
            <span>Welcome to my digital craft space</span>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            <br />
            <span className="hero-role-wrapper">
              <span className="hero-role-text">{displayedText}</span>
              <span className="typing-cursor">|</span>
            </span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            {personalInfo.bio}
          </p>

          {/* Key Quick Info Pills */}
          <div className="hero-meta-pills">
            <button
              type="button"
              className="meta-pill"
              onClick={() => copyToClipboard(personalInfo.email, 'email')}
              title="Click to copy email address"
            >
              <Mail size={14} />
              <span>{personalInfo.email}</span>
              {copiedEmail ? <Check size={14} className="copied-icon" /> : <Copy size={13} className="copy-hint" />}
            </button>

            <button
              type="button"
              className="meta-pill"
              onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
              title="Click to copy phone number"
            >
              <Phone size={14} />
              <span>{personalInfo.phone}</span>
              {copiedPhone ? <Check size={14} className="copied-icon" /> : <Copy size={13} className="copy-hint" />}
            </button>

            <div className="meta-pill meta-location">
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </a>

            <button type="button" className="btn btn-secondary" onClick={onOpenResume}>
              <Download size={18} />
              <span>Preview Resume</span>
            </button>

            <div className="hero-social-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Visual Presentation */}
        <div className="hero-visual">
          <div className="avatar-frame-wrapper">
            <div className="avatar-glow-ring"></div>
            <div className="avatar-image-container">
              <img
                src={personalInfo.avatar}
                alt="Udhith R - Frontend Developer"
                className="avatar-img"
              />
            </div>

            {/* Floating Badges */}
            <div className="floating-badge badge-react">
              <Code2 size={16} className="badge-icon" />
              <div>
                <span className="badge-title">React.js</span>
                <span className="badge-sub">Component Architect</span>
              </div>
            </div>

            <div className="floating-badge badge-fresher">
              <Layers size={16} className="badge-icon" />
              <div>
                <span className="badge-title">B.Sc IT</span>
                <span className="badge-sub">CMS College '26</span>
              </div>
            </div>

            <div className="floating-badge badge-status">
              <Terminal size={16} className="badge-icon" />
              <div>
                <span className="badge-title">Clean UI</span>
                <span className="badge-sub">100% Precision</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats Ribbon */}
      <div className="container">
        <div className="hero-stats-grid glass-panel">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-number-row">
                <span className="stat-value gradient-text">{stat.value}</span>
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
