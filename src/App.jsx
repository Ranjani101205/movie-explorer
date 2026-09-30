import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import MoviePage from './pages/MoviePage.jsx'
import './MovieExplorer.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:imdbID" element={<MoviePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
