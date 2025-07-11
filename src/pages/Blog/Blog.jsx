import React from 'react';
import './Blog.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de que Link esté importado
import axios from 'axios';


const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/posts');
                setPosts(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error al cargar los posts');
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) return <div className="loading">Cargando posts...</div>;
    if (error) return <div className="error">{error}</div>;

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="blog-section">
            <div className="container">
                <div className="blog-header">
                    <h2 className="section-title">Últimos Posts</h2>
                    <Link to="/create" className="create-post-button">
                        Crear Nuevo Post
                    </Link>
                </div>

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
                                        <span className="card-category">{post.categoria}</span>
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
    );
};

export default Blog;