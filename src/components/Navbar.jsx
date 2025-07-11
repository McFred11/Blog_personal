import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Mi Blog
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Inicio
          </Link>
          <Link to="/Sobremi" className="nav-link">
            Sobre Mi
          </Link>
          <Link to="/Blog" className="nav-link">
            Blog
          </Link>
          <Link to="/Contacto" className="nav-link">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar