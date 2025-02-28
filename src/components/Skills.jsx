import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <h2 className="section-title">Mis Habilidades</h2>
        <div className="skills__grid">
          {/* Frontend */}
          <div className="skills__box">
            <h3 className="skills__title skills__title--blue">Frontend</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
          {/* Backend */}
          <div className="skills__box">
            <h3 className="skills__title skills__title--green">Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>SQL</li>
            </ul>
          </div>
          {/* Herramientas */}
          <div className="skills__box">
            <h3 className="skills__title skills__title--blue">Herramientas</h3>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>Figma</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
