import React from 'react';

export default function AboutMe() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="section-title">Sobre Mí</h2>

        <div className="about__content">
          {/* Elimina la sección de imagen, para no dejar ese hueco */}
          <div className="about__text">
            <p>
              Soy desarrollador con 2 años de experiencia en el área, cursando el 9no semestre
              de Ingeniería en Sistemas. He participado en el desarrollo de aplicaciones móviles
              desde cero, incluyendo el consumo de endpoints y creación de APIs. 
            </p>
            <p>
              Tengo experiencia con .NET, creando aplicaciones web con 
              <strong> ASP.NET Core</strong>, ya sea en:
            </p>
            <ul>
              <li><strong>Aplicaciones MVC</strong>: Para construir sitios web y arquitecturas con el patrón Modelo-Vista-Controlador.</li>
              <li><strong>Razor Pages</strong>: Ideal para páginas estáticas o dinámicas sin tanta complejidad.</li>
              <li><strong>Blazor</strong>: Framework para construir aplicaciones web interactivas en C# y WebAssembly, sin JavaScript.</li>
              <li><strong>API RESTful</strong>: Creación de Web APIs eficientes, seguras y con soporte para JSON, XML o GraphQL.</li>
            </ul>
            <p>
              Además, me encanta trabajar con <strong>React</strong> para el desarrollo de interfaces de usuario modernas y
              altamente responsivas.
            </p>
            
            <h3 className="about__education-title">Educación e Idiomas</h3>
            <div className="about__education-list">
              <ul>
                <li><strong>Bachillerato en Computación con Orientación Científica</strong></li>
                <li><strong>Universidad Mariano Gálvez</strong> (2021 - presente)</li>
                <li><strong>Inglés</strong> (estudiando) - Escuela de Idiomas UMG</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
