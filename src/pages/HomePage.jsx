import { useEffect, useState } from 'react'
import { OMDB_API_KEY, OMDB_API_URL } from '../api.js'
import ErrorMessage from '../components/ErrorMessage.jsx'
import Loading from '../components/Loading.jsx'
import MovieCard from '../components/MovieCard.jsx'
import SearchBar from '../components/SearchBar.jsx'

function HomePage() {
  const [search, setSearch] = useState(null)
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!search) return

    async function loadMovies() {
      setLoading(true)
      setError('')
      setMovies([])
      if (OMDB_API_KEY === 'YOUR_OMDB_API_KEY') {
        setError('Add your OMDb API key in src/api.js, then search again.')
        setLoading(false)
        return
      }

      try {
        const params = new URLSearchParams({
          apikey: OMDB_API_KEY,
          s: search.term,
          type: search.type,
          ...(search.year ? { y: search.year } : {}),
        })
        const response = await fetch(`${OMDB_API_URL}?${params}`)
        const data = await response.json()
        if (data.Response === 'False') throw new Error(data.Error || 'No movies matched your search.')
        setMovies(data.Search || [])
      } catch (requestError) {
        setError(requestError.message || 'Could not load movies. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    loadMovies()
  }, [search])

  return (
    <section>
      <div className="page-heading">
        <p className="eyebrow">Find your next watch</p>
        <h1>Movie Explorer</h1>
        <p>Search films, series, and episodes from the OMDb catalogue.</p>
      </div>
      <SearchBar onSearch={setSearch} />
      <div className="results-section">
        {loading && <Loading />}
        {!loading && error && <ErrorMessage message={error} />}
        {!loading && !error && search && movies.length > 0 && (
          <>
            <div className="results-heading"><h2>Search results</h2><span>{movies.length} titles</span></div>
            <div className="movie-grid">
              {movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
            </div>
          </>
        )}
        {!loading && !error && search && movies.length === 0 && (
          <div className="empty-state"><h2>No results yet</h2><p>Try another title or change the category or year.</p></div>
        )}
        {!search && (
          <div className="empty-state"><h2>Start with a title</h2><p>Search by movie title, then choose a result to see its details and rating.</p></div>
        )}
      </div>
    </section>
  )
}

export default HomePage