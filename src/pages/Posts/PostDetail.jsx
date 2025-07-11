import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './PostDetail.css' // Asegúrate de crear este archivo CSS si no existe

const PostDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/posts/${id}`)
        setPost(response.data)
        setLoading(false)
      } catch (err) {
        setError('Error al cargar el post')
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  const handleDelete = async () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este post?')) {
      try {
        await axios.delete(`/api/posts/${id}`)
        navigate('/')
      } catch (err) {
        setError('Error al eliminar el post')
      }
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) return <div className="loading">Cargando post...</div>
  if (error) return <div className="error">{error}</div>
  if (!post) return <div className="error">Post no encontrado</div>

  return (
    <div className="post-detail-page">
      <div className="post-header">
        <h1 className="post-title">{post.titulo}</h1>
        <div className="post-meta">
          <span className="post-author">Por {post.autor}</span>
          <span className="post-date">{formatDate(post.fecha)}</span>
        </div>
      </div>

      <div className="post-content">
        <div className="post-body">
          {post.contenido.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="post-actions">
        <Link to="/" className="btn btn-secondary">
          ← Volver al inicio
        </Link>
        <button 
          onClick={handleDelete}
          className="btn btn-danger"
        >
          Eliminar Post
        </button>
      </div>
    </div>
  )
}

export default PostDetail