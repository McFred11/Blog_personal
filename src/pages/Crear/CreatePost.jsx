import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreatePost.css';

const CreatePost = () => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [categoria, setCategoria] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const autor = "Maria Blogs"; // Autor fijo

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validar que se haya seleccionado una categoría
    if (!categoria) {
      setError('Por favor, selecciona una categoría.');
      setLoading(false);
      return;
    }

    try {
      await axios.post('/api/posts', { titulo, contenido, autor, categoria }); // Envía la categoría y autor fijo
      navigate('/Blog'); // Redirige a la página principal después de crear
    } catch (err) {
      setError('Error al crear el post. Por favor, intenta de nuevo.');
      console.error('Error al crear el post:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-post-container">
      <h1>Crear Nuevo Post</h1>
      <form onSubmit={handleSubmit} className="create-post-form">
        <div className="form-group">
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contenido">Contenido:</label>
          <textarea
            id="contenido"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="autor">Autor:</label>
          <input
            type="text"
            id="autor"
            value={autor}
            readOnly
            style={{ backgroundColor: "#e0e0e0", color: "#555" }}
          />
        </div>

        {/* NUEVO: Selector de Categoría */}
        <div className="form-group">
          <label htmlFor="categoria">Categoría:</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required // Haciendo la selección de categoría obligatoria
          >
            <option value="">Selecciona una categoría</option> {/* Opción por defecto */}
            <option value="Tecnología">Tecnología</option>
            <option value="Viajes">Viajes</option>
          </select>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Creando...' : 'Crear Post'}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;