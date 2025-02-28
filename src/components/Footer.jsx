import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>© 2025 Todos los derechos reservados</p>
        <div className="footer__links">
          <a
            href="https://github.com/DanielValenz21?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub style={{ color: '#fff' }} />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-valenzuela-barrios-03ba2023b/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn style={{ color: '#fff' }} />
          </a>
          <a href="mailto:hetzondaniel1@gmail.com">
            <FaEnvelope style={{ color: '#fff' }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
