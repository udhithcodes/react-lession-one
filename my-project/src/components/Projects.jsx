import { useState, useEffect } from 'react'
import { projectsData } from '../data/portfolioData'
import { GithubIcon } from './SocialIcons'
import { 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  X, 
  Maximize2,
  Flame,
  ShoppingBag,
  Car
} from 'lucide-react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('all')

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'javascript', label: 'JavaScript & React' },
    { id: 'ui-design', label: 'Modern UI & CSS' }
  ]

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'javascript') {
      return project.tags.some(tag => tag.toLowerCase().includes('javascript') || tag.toLowerCase().includes('react'))
    }
    if (filter === 'ui-design') {
      return project.tags.some(tag => tag.toLowerCase().includes('css') || tag.toLowerCase().includes('design'))
    }
    return true
  })

  const getProjectIcon = (id) => {
    if (id.includes('study')) return <Flame size={16} />
    if (id.includes('ecommerce')) return <ShoppingBag size={16} />
    return <Car size={16} />
  }

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Layers size={14} />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="section-title">
            Featured Projects & <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="section-subtitle">
            A selection of web applications showcasing responsive architecture, clean layouts, and dynamic interactivity.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects-filter-bar">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`project-filter-pill ${filter === opt.id ? 'active' : ''}`}
              onClick={() => setFilter(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Showcase Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card glass-panel">
              {/* Media Thumbnail */}
              <div className="project-media-wrapper" onClick={() => setSelectedProject(project)}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-thumb-img"
                  loading="lazy"
                />
                <div className="project-badge-pill">
                  {getProjectIcon(project.id)}
                  <span>{project.badge}</span>
                </div>
                <div className="project-overlay">
                  <span className="view-details-btn">
                    <Maximize2 size={16} />
                    <span>View Case Study</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-body">
                <div className="project-tag-row">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="tech-tag">{tag}</span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="tech-tag">+{project.tags.length - 3}</span>
                  )}
                </div>

                <h3 className="project-title" onClick={() => setSelectedProject(project)}>
                  {project.title}
                </h3>
                <p className="project-tagline">{project.tagline}</p>

                {/* Card Action Buttons */}
                <div className="project-footer-actions">
                  <button
                    type="button"
                    className="btn btn-outline-cyan project-detail-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>Explore Details</span>
                    <ExternalLink size={16} />
                  </button>

                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary repo-icon-link"
                    title="View GitHub Repository"
                    aria-label="View Source on GitHub"
                  >
                    <GithubIcon size={18} />
                    <span>Repo</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Detail Modal Lightbox */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div 
            className="modal-container glass-panel" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Modal Header */}
            <div className="modal-topbar">
              <div className="modal-header-info">
                <span className="modal-badge">{selectedProject.badge}</span>
                <h3 id="modal-title" className="modal-title">{selectedProject.title}</h3>
                <p className="modal-subtitle">{selectedProject.subtitle}</p>
              </div>

              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal Scroll Content */}
            <div className="modal-content-scroll">
              <div className="modal-banner-wrap">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="modal-banner-img"
                />
              </div>

              <div className="modal-details-grid">
                {/* Left Column: Overview & Highlights */}
                <div className="modal-main-column">
                  <h4 className="modal-section-title">Project Overview</h4>
                  <p className="modal-overview-text">{selectedProject.overview}</p>

                  <h4 className="modal-section-title">Key Implementations & Features</h4>
                  <ul className="modal-features-list">
                    {selectedProject.highlights.map((item, idx) => (
                      <li key={idx} className="modal-feature-item">
                        <CheckCircle2 size={18} className="feature-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column: Tech Architecture & Actions */}
                <div className="modal-side-column">
                  <div className="modal-tech-card">
                    <h5 className="side-card-title">Technology Breakdown</h5>
                    <div className="tech-breakdown-list">
                      {selectedProject.techStack.map((tech, idx) => (
                        <div key={idx} className="tech-breakdown-item">
                          <span className="tech-name">{tech.name}</span>
                          <span className="tech-role">{tech.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="modal-metrics-card">
                    <h5 className="side-card-title">Project Focus Highlights</h5>
                    {Object.entries(selectedProject.metrics).map(([key, val], idx) => (
                      <div key={idx} className="modal-metric-row">
                        <span className="metric-key">{key.toUpperCase()}:</span>
                        <span className="metric-val">{val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="modal-action-buttons">
                    <a
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full"
                    >
                      <GithubIcon size={18} />
                      <span>View GitHub Repository</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
