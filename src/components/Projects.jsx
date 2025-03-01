import React from 'react';
import { FaGithub } from 'react-icons/fa';  // <--- Importar el ícono de GitHub
import proyecto1Img from '../assets/Proyecto1.jpeg'; // Ejemplo

export default function Projects() {
  const projectsData = [
    {
      title: 'Manejo de Presupuestos',
      description: `
      Aplicación web ASP.NET Core para gestión de presupuesto personal. Separa
      lógica en controladores, modelos y vistas, usando el patrón MVC.
      Interactúa con la base de datos mediante Dapper y procedimientos almacenados.
      Incluye validación de formularios con jQuery Validation y una interfaz
      responsive con Bootstrap.
    `,
      tags: ['ASP.NET Core', 'MVC', 'Dapper', 'Bootstrap'],
      codeLink: 'https://github.com/DanielValenz21/menejoPresupuesto',
      demoLink: '#',
      image: proyecto1Img
    },
    {
      title: 'Proyecto 2',
      description: 'Una breve descripción del proyecto y las tecnologías utilizadas.',
      tags: ['React', 'CSS', 'Node.js'],
      codeLink: '#',
      demoLink: '#',
      image: null
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
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <span>[Imagen Proyecto]</span>
                )}
              </div>
              
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                
                <div className="project-card__tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-card__tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-card__links">
                  {/* Enlace "Código" con ícono de GitHub */}
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link-code"
                  >
                    <FaGithub style={{ marginRight: '4px' }}/>
                    Código
                  </a>
                  
                  {/* Enlace "Demo" en verde */}
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link-demo"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
