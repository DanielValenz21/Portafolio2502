// src/components/Skills.jsx
import React from 'react';
import '../styles/Skills.css'; // Ajusta la ruta si fuera necesario

export default function Skills() {
  // Ejemplo de arreglo con skills de Frontend
  const frontendSkills = [
    { name: 'BOOTSTRAP', level: '90%' },
    { name: 'CSS3', level: '85%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'React', level: '80%' },
  ];

  // Backend: agregamos .NET Core, ASP.NET, SQL
  const backendSkills = [
    { name: '.NET Core', level: '80%' },
    { name: 'ASP.NET', level: '80%' },
    { name: 'Node.js', level: '75%' },
    { name: 'SQL', level: '80%' },
  ];

  // Herramientas: quitamos Figma y agregamos VS 22
  const toolsSkills = [
    { name: 'Git', level: '85%' },
    { name: 'Docker', level: '60%' },
    { name: 'VS 22', level: '70%' },
    { name: 'VS Code', level: '90%' },
  ];

  // Función para renderizar un bloque de categoría
  const renderSkillBox = (title, skills, titleColorClass) => {
    return (
      <div className="skills__box">
        <h3 className={`skills__title ${titleColorClass}`}>{title}</h3>
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-label">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="skill-bar-background">
              <div
                className="skill-bar-fill"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <h2 className="section-title">Mis Habilidades</h2>
        <div className="skills__grid">
          {/* Frontend */}
          {renderSkillBox('Frontend', frontendSkills, 'skills__title--blue')}

          {/* Backend */}
          {renderSkillBox('Backend', backendSkills, 'skills__title--green')}

          {/* Herramientas */}
          {renderSkillBox('Herramientas', toolsSkills, 'skills__title--blue')}
        </div>
      </div>
    </section>
  );
}
