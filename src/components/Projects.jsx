import React from 'react';

export default function Projects() {
  const projectsData = [
    {
      title: 'Proyecto 1',
      description: 'Una breve descripción del proyecto y las tecnologías utilizadas.',
      tags: ['React', 'CSS', 'Next.js'],
      codeLink: '#',
      demoLink: '#',
    },
    {
      title: 'Proyecto 2',
      description: 'Una breve descripción del proyecto y las tecnologías utilizadas.',
      tags: ['React', 'CSS', 'Node.js'],
      codeLink: '#',
      demoLink: '#',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <h2 className="section-title">Mis Proyectos</h2>
        <div className="projects__grid">
          {projectsData.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-card__image">
                {/* Imagen del proyecto o placeholder */}
                <span>[Imagen Proyecto]</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <div className="project-card__links">
                <a href={project.codeLink} target="_blank" rel="noreferrer">Código</a>
                <a href={project.demoLink} target="_blank" rel="noreferrer">Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
