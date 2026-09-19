import { educationHistory } from '../data/portfolioData'
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react'

export default function EducationTimeline() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Academic Milestones</span>
          </h2>
          <p className="section-subtitle">
            Solid foundations in computer science theory, information technology fundamentals, and software principles.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="timeline-spine"></div>

          <div className="timeline-nodes">
            {educationHistory.map((edu) => (
              <div key={edu.id} className="timeline-item">
                {/* Timeline Marker Dot */}
                <div className="timeline-marker">
                  <div className="marker-core">
                    <GraduationCap size={16} />
                  </div>
                  <div className="marker-ring"></div>
                </div>

                {/* Timeline Card */}
                <div className="timeline-card glass-panel">
                  <div className="timeline-card-header">
                    <div>
                      <span className="edu-type-badge">{edu.type}</span>
                      <h3 className="edu-degree">{edu.degree}</h3>
                      <h4 className="edu-institution">{edu.institution}</h4>
                    </div>

                    <div className="edu-meta">
                      <div className="edu-meta-pill">
                        <Calendar size={13} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="edu-meta-pill">
                        <MapPin size={13} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="edu-desc">{edu.description}</p>

                  <div className="edu-highlights-box">
                    <div className="edu-highlights-title">
                      <Award size={14} />
                      <span>Academic & Practical Highlights</span>
                    </div>
                    <ul className="edu-highlights-list">
                      {edu.highlights.map((item, idx) => (
                        <li key={idx} className="edu-highlight-item">
                          <CheckCircle2 size={15} className="edu-check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="edu-status-tag">
                    <span className="status-indicator-dot"></span>
                    <span>{edu.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
