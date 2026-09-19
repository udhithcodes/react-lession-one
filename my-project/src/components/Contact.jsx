import { useState } from 'react'
import { personalInfo } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import confetti from 'canvas-confetti'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  Clock, 
  MessageSquare,
  AlertCircle
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2200)
  }

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Please provide your name'
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address'
    }
    if (!formData.message.trim()) errs.message = 'Please type your message or inquiry'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setSubmitted(true)

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#06b6d4', '#10b981', '#f59e0b']
      })
    } catch {
      // ignore if canvas-confetti fails
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let’s Build Something <span className="gradient-text">Exceptional Together</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an opening for a frontend developer role, an internship opportunity, or want to collaborate on a project.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            <div className="contact-info-card glass-panel">
              <h3 className="contact-card-heading">Contact Information</h3>
              <p className="contact-card-sub">
                Feel free to reach out directly through any of the channels below. I look forward to connecting!
              </p>

              <div className="direct-channels">
                {/* Email Box */}
                <div className="direct-channel-item">
                  <div className="channel-icon-wrap email-icon">
                    <Mail size={20} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">Email Address</span>
                    <a href={`mailto:${personalInfo.email}`} className="channel-value">
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="copy-channel-btn"
                    onClick={handleCopyEmail}
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="direct-channel-item">
                  <div className="channel-icon-wrap phone-icon">
                    <Phone size={20} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">Phone & WhatsApp</span>
                    <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="channel-value">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location Box */}
                <div className="direct-channel-item">
                  <div className="channel-icon-wrap location-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">Current Location</span>
                    <span className="channel-value">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Response Time & Open Status */}
              <div className="response-time-pill">
                <Clock size={15} />
                <span>Quick Response: Usually within 12 - 24 hours</span>
              </div>

              {/* Social Profiles */}
              <div className="contact-social-section">
                <span className="socials-label">Connect Online</span>
                <div className="social-links-row">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-badge-btn"
                  >
                    <LinkedinIcon size={18} />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-badge-btn"
                  >
                    <GithubIcon size={18} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-panel">
              {submitted ? (
                <div className="form-success-state">
                  <div className="success-icon-wrap">
                    <Sparkles size={36} />
                  </div>
                  <h3 className="success-title">Message Received!</h3>
                  <p className="success-desc">
                    Thank you, <strong>{formData.name}</strong>. Your message has been sent successfully. I will get back to you at <strong>{formData.email}</strong> as soon as possible.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', subject: '', message: '' })
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <h3 className="form-heading">Send a Direct Message</h3>
                  <p className="form-subheading">I'd love to discuss role opportunities or answer any questions.</p>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Your Name <span className="required-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className={`form-input ${errors.name ? 'input-error' : ''}`}
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value })
                          if (errors.name) setErrors({ ...errors, name: '' })
                        }}
                      />
                      {errors.name && (
                        <div className="field-error-msg">
                          <AlertCircle size={13} />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Your Email <span className="required-star">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value })
                          if (errors.email) setErrors({ ...errors, email: '' })
                        }}
                      />
                      {errors.email && (
                        <div className="field-error-msg">
                          <AlertCircle size={13} />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject (Optional)</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-input"
                      placeholder="e.g. Frontend Developer Role / Internship Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message <span className="required-star">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                      placeholder="Write your message, project idea, or opportunity details here..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value })
                        if (errors.message) setErrors({ ...errors, message: '' })
                      }}
                    ></textarea>
                    {errors.message && (
                      <div className="field-error-msg">
                        <AlertCircle size={13} />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn w-full">
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
