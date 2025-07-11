import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'

const HomePage = () => {

  return (
    <>
      <section id="inicio" className="hero-section">
        <div className="hero-container">
          <div className="hero-image-container">
            <img
              src="https://www.evopayments.mx/blog/wp-content/uploads/2023/03/Como-ser-una-mujer-exitosa-en-los-negocio-770x513.jpeg"
              alt="Foto de la autora"
              className="hero-author-photo" // Nueva clase para la imagen
            />
          </div>
          <h1 className="hero-title">¡Hola, soy María!</h1>
          <p className="hero-description">Bienvenido a mi espacio personal donde comparto mis pensamientos, experiencias y pasiones sobre tecnología, viajes y vida.</p>
          <Link to="/blog" className="hero-button"> {/* Cambiado a Link */}
            Explorar Blog
          </Link>
        </div>
      </section>
      
    </>
  )
}

export default HomePage