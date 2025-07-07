import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer.jsx'
import HomePage from './pages/Home/HomePage'
import CreatePost from './pages/Crear/CreatePost.jsx'
import PostDetail from './pages/Posts/PostDetail'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App