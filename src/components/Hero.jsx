import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import perfilImg from '../assets/Perfil.jpg'; 

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">

        {/* Bloque de texto */}
        <div className="hero__info">
          <h1 className="hero__title">
            Hola, soy <span className="hero__title--highlight">Daniel Valenzuela</span>
          </h1>
          <p className="hero__subtitle">
            Desarrollador de aplicaciones web y móviles, estudiante de 9no semestre de Ingeniería en Sistemas. Especializado en .NET Core, React, React Native, aplicando principios SOLID, patrones de diseño y arquitectura escalable. Enfocado en la optimización de procesos, integración de tecnologías y desarrollo de soluciones seguras y eficientes. Comprometido con la automatización y la mejora continua en cada proyecto.
          </p>

          {/* Botones */}
          <div className="hero__buttons">
            {/* Cambiado a "Ver CV" */}
            <a
              href="https://drive.google.com/file/d/1qFpJPjsSM_IR6Bb0io1zxIbue2R7R-KC/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn btn-blue"
            >
              Ver CV
            </a>

            <a 
              href="https://wa.me/50246808475"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-green"
            >
              Contactar
            </a>
          </div>

          {/* Íconos sociales */}
          <div className="hero__socials">
            <a
              href="https://github.com/DanielValenz21?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-valenzuela-barrios-03ba2023b/"
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:hetzondaniel1@gmail.com"
              className="hero__social-link"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Imagen circular */}
        <div className="hero__image">
          {/* Ajusta el nombre del archivo tal y como esté en `public/img/` */}
          <img 
            src={perfilImg}   // <-- Usamos la variable importada
            alt="Perfil"
          />
        </div>
      </div>
    </section>
  );
}
