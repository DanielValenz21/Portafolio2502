import React from 'react';
import { FaGithub } from 'react-icons/fa';  // <--- Importar el ícono de GitHub
import proyecto1Img from '../assets/Proyecto1.jpeg'; // Ejemplo
import proyecto2Img from '../assets/Proyecto2.jpeg'; // Ejemplo
import proyecto3Img from '../assets/Proyecto3.jpeg'; // Ejemplo
import proyectovolcanesbackImg from '../assets/proyectovolcanesback.jpeg'; // Nueva imagen

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
      description: 'Es una aplicación ASP.NET Core MVC integral para gestionar empleados, roles, departamentos, nóminas, préstamos y ausencias Utiliza Dapper para acceder a una base de datos SQL Server y BCrypt para la seguridad de las contraseñas. La estructura se basa en controladores, repositorios, modelos y vistas, facilitando operaciones CRUD y generación de PDF. En resumen, es un sistema robusto de administración de recursos humanos y nóminas con autenticación y validaciones integradas..',
      tags: ['ASP.NET Core', 'MVC', 'Dapper', 'Bootstrap'],
      codeLink: 'https://github.com/DanielValenz21/TConsulting',
      demoLink: '#',
      image: proyecto2Img
    },
    {
      title: 'Proyecto 3',
      description: 'Sistema integral con .NET 8 Core (backend), React (frontend) y SQL Server. Gestiona inventario en tiempo real, descuentos y créditos. Incluye pagos (efectivo, crédito, mixto) y generación de pagarés. Ofrece módulo logístico para control de camiones y combustible. Permite crear/editar productos, asignar roles y auditar procesos. Incluye panel de reportes con ventas, stock y créditos pendientes.',
      tags: ['React', 'Axios', 'SPA (Single Page Application)', '.net core'],
      codeLink: 'https://github.com/DanielValenz21/volcan-front',
      demoLink: '#',
      image: proyecto3Img
    },
    {
      title: 'API Inventario y Créditos',
      description: `
        Este proyecto es una API RESTful para gestionar inventario y créditos (ventas) en una empresa ficticia. Las principales tecnologías y enfoques son:
        
        • Backend: Node.js con Express.
        • Base de Datos: SQL Server gestionado con el paquete mssql, usando transacciones para operaciones críticas.
        • Autenticación: JWT para proteger endpoints y gestionar el acceso.
        • Documentación: Swagger (swagger-jsdoc y swagger-ui-express) para generar documentación interactiva.
        • Seguridad y Configuración: Uso de dotenv para variables sensibles, crypto para el hashing de contraseñas y CORS para solicitudes de orígenes múltiples.
        • Desarrollo: nodemon para recargas automáticas durante el desarrollo.
      `,
      tags: ['Node.js', 'Express', 'SQL Server', 'JWT', 'Swagger'],
      codeLink: '#',
      demoLink: '#',
      image: proyectovolcanesbackImg
    }
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
