import { personalInfo } from '../data/portfolioData'
import { Layout, Smartphone, Compass, GraduationCap, MapPin, Mail, Sparkles, CheckCircle2 } from 'lucide-react'

export default function About() {
  const highlightCards = [
    {
      icon: Layout,
      title: "Clean UI & Component Thinking",
      desc: "Architecting modular, maintainable user interfaces with React.js and modern CSS, emphasizing clean hierarchy and readable code.",
      color: "var(--accent-primary)"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Responsiveness",
      desc: "Mastery of Flexbox, CSS Grid, and responsive viewports to ensure seamless visual experiences across all device form factors.",
      color: "var(--accent-cyan)"
    },
    {
      icon: Compass,
      title: "Growth & Problem Solving",
      desc: "Continuous learner expanding practical capabilities across full-stack foundations including Java OOP and MySQL relational modeling.",
      color: "var(--accent-emerald)"
    }
  ]

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Sparkles size={14} />
            <span>Developer Profile</span>
          </div>
          <h2 className="section-title">
            Passionate About Building <span className="gradient-text">Exceptional Web Products</span>
          </h2>
          <p className="section-subtitle">
            A motivated frontend engineer blending computer science theory with practical web engineering.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Story Text */}
          <div className="about-narrative-card glass-panel">
            <h3 className="narrative-heading">Engineering with Precision & Aesthetic Focus</h3>
            
            {personalInfo.aboutDetailed.map((paragraph, index) => (
              <p key={index} className="narrative-p">
                {paragraph}
              </p>
            ))}

            <div className="about-bullet-points">
              <div className="bullet-item">
                <CheckCircle2 size={18} className="bullet-icon" />
                <span>Strong foundation in HTML5 semantic accessibility and modern CSS3</span>
              </div>
              <div className="bullet-item">
                <CheckCircle2 size={18} className="bullet-icon" />
                <span>Hands-on experience in JavaScript (ES6+), DOM operations, and React.js</span>
              </div>
              <div className="bullet-item">
                <CheckCircle2 size={18} className="bullet-icon" />
                <span>Proactive adopter of AI-assisted engineering workflows for enhanced velocity</span>
              </div>
            </div>
          </div>

          {/* Quick Facts Sidebar Card */}
          <div className="about-sidebar glass-panel">
            <div className="sidebar-header">
              <h4 className="sidebar-title">Quick Information</h4>
              <span className="sidebar-tag">Fresher 2026</span>
            </div>

            <div className="sidebar-items">
              <div className="sidebar-item">
                <div className="sidebar-icon-wrap">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <span className="item-label">Degree</span>
                  <p className="item-value">B.Sc Information Technology</p>
                  <span className="item-sub">CMS College (2023 - 2026)</span>
                </div>
              </div>

              <div className="sidebar-item">
                <div className="sidebar-icon-wrap">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="item-label">Location</span>
                  <p className="item-value">Sathyamangalam, Tamil Nadu</p>
                  <span className="item-sub">Open to Relocation & Remote</span>
                </div>
              </div>

              <div className="sidebar-item">
                <div className="sidebar-icon-wrap">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="item-label">Direct Contact</span>
                  <p className="item-value">{personalInfo.email}</p>
                  <span className="item-sub">{personalInfo.phone}</span>
                </div>
              </div>
            </div>

            <div className="sidebar-footer">
              <div className="availability-card">
                <span className="pulse-dot"></span>
                <div>
                  <div className="avail-status">Ready to Interview</div>
                  <div className="avail-desc">Available for immediate frontend opportunities</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Below */}
        <div className="about-features-row">
          {highlightCards.map((card, idx) => {
            const Icon = card.icon
            return (
              <div key={idx} className="feature-card glass-panel">
                <div className="feature-icon" style={{ color: card.color, borderColor: card.color }}>
                  <Icon size={24} />
                </div>
                <h4 className="feature-title">{card.title}</h4>
                <p className="feature-desc">{card.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
