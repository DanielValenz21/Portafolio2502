import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>© 2025 Todos los derechos reservados</p>
        <div className="footer__links">
          <a href="https://github.com/usuario" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/usuario" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:email@ejemplo.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
