import React, { useState, useEffect } from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  tech: string[];
  github: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Set fallback data if API fails
        setProjects([
          {
            id: 1,
            title: 'Portfolio Website',
            description: 'A responsive personal portfolio website built with React, Node.js, and Express. Features modern design with animated particle background, smooth scrolling navigation, mobile-responsive layout, and contact form integration.',
            images: ['home.jpg', 'about.jpg', 'skills.jpg', 'project.jpg', 'contact.jpg'],
            tech: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'JavaScript'],
            github: 'https://github.com/yourusername/portfolio-website'
          },
          {
            id: 2,
            title: 'Jay Anne Motorparts (Inventory Management System)',
            description: 'A comprehensive web-based inventory management system designed for stock monitoring, product tracking, and transaction management. Built with responsive design and full-stack development capabilities.',
            images: [],
            tech: ['React', 'Node.js', 'Express', 'MySQL', 'Bootstrap'],
            github: 'https://github.com/yourusername/inventory-system'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const ProjectCard = ({ project }: { project: Project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
      <div className="project-card">
        <div className="project-image">
          {project.images.length > 0 ? (
            <div className="slideshow-container">
              <div className="slide">
                <img 
                  src={`/${project.images[currentImageIndex]}`} 
                  alt={`${project.title} Screenshot ${currentImageIndex + 1}`} 
                  className="project-screenshot"
                />
              </div>
              <button className="slide-prev" onClick={prevImage}>&#10094;</button>
              <button className="slide-next" onClick={nextImage}>&#10095;</button>
              <div className="slide-dots">
                {project.images.map((_, index) => (
                  <span 
                    key={index} 
                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  ></span>
                ))}
              </div>
            </div>
          ) : (
            <div className="project-placeholder">
              <i className="fas fa-boxes"></i>
            </div>
          )}
        </div>
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tech">
            {project.tech.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <section className="projects">
        <div className="container">
          <h2 className="section-title"><i className="fas fa-folder-open"></i> Projects</h2>
          <div className="loading">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title"><i className="fas fa-folder-open"></i> Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
