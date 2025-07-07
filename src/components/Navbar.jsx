import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Mi Blog Personal
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Inicio
          </Link>
          <Link to="/create" className="nav-link">
            Crear Post
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar