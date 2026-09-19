import { useState } from 'react'
import { skillsData } from '../data/portfolioData'
import { 
  Code2, 
  Database, 
  Wrench, 
  Sparkles, 
  BookOpen, 
  TrendingUp, 
  Laptop
} from 'lucide-react'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const allSkills = [
    ...skillsData.frontend,
    ...skillsData.backendLanguages,
    ...skillsData.tools
  ]

  const getFilteredSkills = () => {
    switch (activeCategory) {
      case 'frontend':
        return skillsData.frontend
      case 'languages':
        return skillsData.backendLanguages
      case 'tools':
        return skillsData.tools
      default:
        return allSkills
    }
  }

  const filteredSkills = getFilteredSkills()

  const tabs = [
    { id: 'all', label: 'All Technologies', count: allSkills.length, icon: Sparkles },
    { id: 'frontend', label: 'Frontend Development', count: skillsData.frontend.length, icon: Laptop },
    { id: 'languages', label: 'Languages & DB', count: skillsData.backendLanguages.length, icon: Database },
    { id: 'tools', label: 'Tools & Platforms', count: skillsData.tools.length, icon: Wrench },
  ]

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Code2 size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technological Arsenal</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of frontend engineering competencies, programming languages, and development platforms.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter-row">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                type="button"
                className={`skill-tab-btn ${activeCategory === tab.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(tab.id)}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
                <span className="tab-count-pill">{tab.count}</span>
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card glass-panel">
              <div className="skill-card-top">
                <div className="skill-title-group">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-badge-category">{skill.category}</span>
                </div>
                <div className="skill-percentage">{skill.level}%</div>
              </div>

              <div className="skill-progress-track">
                <div 
                  className="skill-progress-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>

        {/* Currently Learning / Next Horizons */}
        <div className="learning-card glass-panel">
          <div className="learning-header">
            <div className="learning-beacon">
              <span className="pulse-dot"></span>
              <BookOpen size={18} className="learning-icon" />
            </div>
            <div>
              <h3 className="learning-title">Active Learning & Next Horizons</h3>
              <p className="learning-sub">Continuously pushing technical boundaries with guided deep-dives</p>
            </div>
          </div>

          <div className="learning-grid">
            {skillsData.currentlyLearning.map((item, idx) => (
              <div key={idx} className="learning-item">
                <div className="learning-item-icon">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="learning-item-title">{item.title}</h4>
                  <p className="learning-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
