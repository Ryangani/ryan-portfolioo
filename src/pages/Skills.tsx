import React, { useState, useEffect } from 'react';
import './Skills.css';

interface Skill {
  icon: string;
  name: string;
}

interface SkillCategory {
  category: string;
  icon: string;
  items: Skill[];
}

const Skills = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const skills: SkillCategory[] = [
    {
      category: "Frontend Development",
      icon: "fas fa-code",
      items: [
        { icon: "fab fa-html5", name: "HTML5" },
        { icon: "fab fa-css3-alt", name: "CSS3 & SASS" },
        { icon: "fab fa-js", name: "JavaScript (ES6+)" },
        { icon: "fab fa-react", name: "React.js" },
        { icon: "fab fa-angular", name: "Angular" },
        { icon: "fab fa-vuejs", name: "Vue.js" },
        { icon: "fab fa-bootstrap", name: "Bootstrap & Tailwind CSS" },
        { icon: "fas fa-mobile-alt", name: "Responsive Design" },
        { icon: "fas fa-palette", name: "UI/UX Design" }
      ]
    },
    {
      category: "Backend Development",
      icon: "fas fa-server",
      items: [
        { icon: "fab fa-node-js", name: "Node.js" },
        { icon: "fab fa-python", name: "Python" },
        { icon: "fas fa-database", name: "MySQL & MongoDB" },
        { icon: "fas fa-plug", name: "RESTful APIs" },
        { icon: "fas fa-code-branch", name: "Version Control (Git)" }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: "fas fa-tools",
      items: [
        { icon: "fab fa-git-alt", name: "Git & GitHub" },
        { icon: "fab fa-npm", name: "NPM & Package Managers" },
        { icon: "fas fa-terminal", name: "Command Line" },
        { icon: "fab fa-docker", name: "Docker" },
        { icon: "fab fa-aws", name: "Cloud Services (AWS)" },
        { icon: "fas fa-cogs", name: "CI/CD Pipelines" }
      ]
    },
    {
      category: "Technical Support",
      icon: "fas fa-headset",
      items: [
        { icon: "fas fa-desktop", name: "Hardware Troubleshooting" },
        { icon: "fas fa-laptop-medical", name: "Diagnostics & Repair" },
        { icon: "fas fa-network-wired", name: "Network Configuration" },
        { icon: "fas fa-shield-alt", name: "Security & Virus Removal" },
        { icon: "fas fa-windows", name: "Windows OS Support" },
        { icon: "fas fa-user-shield", name: "User Account Management" },
        { icon: "fas fa-clipboard-check", name: "Technical Documentation" }
      ]
    },
    {
      category: "Soft Skills",
      icon: "fas fa-users",
      items: [
        { icon: "fas fa-comments", name: "Customer Communication" },
        { icon: "fas fa-clock", name: "Time Management" },
        { icon: "fas fa-lightbulb", name: "Problem Solving" },
        { icon: "fas fa-graduation-cap", name: "Continuous Learning" },
        { icon: "fas fa-handshake", name: "Team Collaboration" },
        { icon: "fas fa-chart-line", name: "Analytical Thinking" }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skills.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + skills.length) % skills.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % skills.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [skills.length]);

  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title"><i className="fas fa-cogs"></i> Skills</h2>
        
        <div className="skills-overview">
          <div className="overview-stats">
            <div className="stat-card">
              <i className="fas fa-code"></i>
              <span className="stat-number">{skills.length}</span>
              <span className="stat-label">Skill Categories</span>
            </div>
            <div className="stat-card">
              <i className="fas fa-star"></i>
              <span className="stat-number">{skills.reduce((acc, cat) => acc + cat.items.length, 0)}</span>
              <span className="stat-label">Total Technologies</span>
            </div>
          </div>
        </div>

        <div className="slideshow-container">
          <div className="slide">
            <div className="skills-grid">
              {skills[currentSlide].items.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <i className={skill.icon}></i>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="slide-controls">
            <button className="slide-prev" onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="slide-next" onClick={nextSlide}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <div className="slide-dots">
            {skills.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
