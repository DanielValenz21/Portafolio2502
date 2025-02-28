import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="section-title">Contacto</h2>
        <div className="contact__grid">
          {/* Información de Contacto */}
          <div className="contact__info">
            <h3>Información de Contacto</h3>
            <p><strong>Email:</strong> email@ejemplo.com</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/usuario</p>
            <p><strong>GitHub:</strong> github.com/usuario</p>
            <p>
              <strong>Disponibilidad:</strong><br />
              Actualmente disponible para proyectos freelance y oportunidades a tiempo completo.
            </p>
          </div>

          {/* Formulario */}
          <div className="contact__form">
            <h3>Envíame un Mensaje</h3>
            <form>
              <label>Nombre</label>
              <input type="text" placeholder="Tu nombre" />

              <label>Email</label>
              <input type="email" placeholder="tu@email.com" />

              <label>Mensaje</label>
              <textarea placeholder="Tu mensaje..."></textarea>

              <button>Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
