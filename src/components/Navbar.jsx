import React from 'react';
import './Navbar.css'; // Check that the file name & path exactly match the file on disk

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo o título */}
        <div className="navbar__logo">Portfolio</div>
        
        {/* Enlaces */}
        <ul className="navbar__links">
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
