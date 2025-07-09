import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './HomePage.css'

const HomePage = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts')
        setPosts(response.data)
        setLoading(false)
      } catch (err) {
        setError('Error al cargar los posts')
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) return <div className="loading">Cargando posts...</div>
  if (error) return <div className="error">{error}</div>

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <button onClick={() => scrollToSection('blog')} className="hero-button">
            Explorar Blog
          </button>
        </div>
      </section>
      <section id="blog" className="blog-section">
        <div className="container">
          <h2 className="section-title">Últimas Publicaciones</h2>
          {posts.length === 0 ? (
            <div className="no-posts">
              <p>No hay posts publicados aún.</p>
              <Link to="/create" className="btn btn-primary">
                Crear tu primer post
              </Link>
            </div>
          ) : (
            <div className="blog-grid">
              {posts.map(post => (
                <article key={post._id} className="blog-card">
                  <div className="card-image-container bg-gradient-blue-purple">
                    <span className="card-image-emoji">🚀</span>
                  </div>
                  <div className="card-content">
                    <div className="card-meta">
                      <span className="card-category">Tecnología</span>
                      <span className="card-date">{formatDate(post.fecha)}</span>
                    </div>
                    <h3 className="card-title">
                      <Link to={`/post/${post._id}`}>
                        {post.titulo}
                      </Link>
                    </h3>
                    <p className="card-preview-text">
                      {post.contenido.substring(0, 150)}...
                    </p>
                    <Link to={`/post/${post._id}`} className="card-read-more">
                      Leer más →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default HomePage