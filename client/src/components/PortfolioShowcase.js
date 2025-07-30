import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectShowcase = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "TECHIFY",
      category: "Full Stack",
      description:
        "Redefining how tech interviews are done — live code, face-to-face, and feedback-ready, all in one powerful browser tab.",
      image: "/Techify App.png",
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Gemini API",
        "Express",
        "Socket.IO",
        "CSS",
        "webRTC",
        "JWT",
        "Monaco Editor",
        "jdoodle API",
      ],
      github: "https://github.com/Udaysavaliya04/techify",
      live: "https://github.com/Udaysavaliya04/techify",
      featured: true,
    },
    {
      id: 2,
      title: "PRYSM",
      category: "Full Stack",
      description:
        "Secure Password Manager application with end-to-end encryption. Built using React, Node.js. Implements AES-256 encryption for data security.",
      image: "/prysm app.png",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "Material-UI",
        "AES-256",
        "MongoDB",
      ],
      github: "https://github.com/Udaysavaliya04/prysm",
      live: "https://prysm-ugro.onrender.com/",
      featured: true,
    },
  ];

  return (
    <section id="portfolio-showcase" className="portfolio-showcase section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="section-description">
            A showcase of my recent work and experiments in web development, 
            featuring modern technologies and innovative solutions.
          </p>
        </div>

        <div className="portfolio-grid">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`portfolio-item ${project.featured ? 'featured' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="project-image">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '1.5rem',
                      transform: 'scale(1)',
                   
                    }}
                  />
                ) : (
                  <div className="image-placeholder">
                    <span>{project.title}</span>
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Github size={20} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tech-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View Project
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
