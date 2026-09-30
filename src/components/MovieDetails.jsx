import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { OMDB_API_KEY, OMDB_API_URL } from '../api.js'
import ErrorMessage from './ErrorMessage.jsx'
import Loading from './Loading.jsx'

function MovieDetails({ imdbID }) {
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadMovie() {
      setLoading(true)
      setError('')
      if (OMDB_API_KEY === 'YOUR_OMDB_API_KEY') {
        setError('Add your OMDb API key in src/api.js, then open this movie again.')
        setLoading(false)
        return
      }

      try {
        const params = new URLSearchParams({ apikey: OMDB_API_KEY, i: imdbID, plot: 'full' })
        const response = await fetch(`${OMDB_API_URL}?${params}`)
        const data = await response.json()
        if (data.Response === 'False') throw new Error(data.Error || 'Movie details could not be found.')
        setMovie(data)
      } catch (requestError) {
        setError(requestError.message || 'Could not load movie details. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    loadMovie()
  }, [imdbID])

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} />
  if (!movie) return null

  const hasPoster = movie.Poster && movie.Poster !== 'N/A'
  return (
    <>
      <Link className="back-link" to="/">&larr; Back to movies</Link>
      <article className="details-layout">
        {hasPoster ? <img className="details-poster" src={movie.Poster} alt={`${movie.Title} poster`} /> : <div className="poster-fallback details-poster">Poster not available</div>}
        <div className="details-copy">
          <p className="eyebrow">{movie.Genre || 'Movie'}</p>
          <h1>{movie.Title}</h1>
          <p className="detail-meta">{movie.Year} | {movie.Runtime} | {movie.Rated}</p>
          <div className="rating-panel">
            <span>IMDb rating</span>
            <strong>{movie.imdbRating && movie.imdbRating !== 'N/A' ? `${movie.imdbRating} / 10` : 'Not available'}</strong>
          </div>
          <p className="detail-plot">{movie.Plot}</p>
          <dl className="detail-list">
            <dt>Director</dt><dd>{movie.Director || 'Not available'}</dd>
            <dt>Actors</dt><dd>{movie.Actors || 'Not available'}</dd>
            <dt>Language</dt><dd>{movie.Language || 'Not available'}</dd>
          </dl>
        </div>
      </article>
    </>
  )
}

export default MovieDetails