import React from 'react';
import './Sobremi.css'; // Asegúrate de que esta línea esté presente

const Sobremi = () => {
  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <div className="sobre-mi-container">
        <div className="sobre-mi-content">
          <h2 className="sobre-mi-title">Sobre Mí</h2>
          <div className="about-grid">
            <div className="about-image-wrapper">
              <div className="about-image">
                <span className="about-image-emoji">🌟</span>
              </div>
            </div>
            <div className="about-text-content">
              <p className="about-paragraph">
                Soy una apasionada escritora y desarrolladora que ama compartir conocimientos y experiencias.
                Mi objetivo es inspirar a otros a través de mis historias y reflexiones.
              </p>
              <p className="about-paragraph">
                Cuando no estoy escribiendo, me puedes encontrar explorando nuevos lugares,
                aprendiendo tecnologías emergentes o disfrutando de una buena taza de café.
              </p>
              <div className="about-tags-container">
                <span className="about-tag tag-technology">Tecnología</span>
                <span className="about-tag tag-travel">Viajes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobremi;