import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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

  return (
    <div className="home-page">
      <h1>Blog Personal</h1>
      {posts.length === 0 ? (
        <div className="no-posts">
          <p>No hay posts publicados aún.</p>
          <Link to="/create" className="btn btn-primary">
            Crear tu primer post
          </Link>
        </div>
      ) : (
        <div className="posts-grid">
          {posts.map(post => (
            <article key={post._id} className="post-card">
              <h2 className="post-title">
                <Link to={`/post/${post._id}`}>
                  {post.titulo}
                </Link>
              </h2>
              <div className="post-meta">
                <span className="post-author">Por {post.autor}</span>
                <span className="post-date">{formatDate(post.fecha)}</span>
              </div>
              <p className="post-preview">
                {post.contenido.substring(0, 150)}...
              </p>
              <Link to={`/post/${post._id}`} className="read-more">
                Leer más
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export default HomePage