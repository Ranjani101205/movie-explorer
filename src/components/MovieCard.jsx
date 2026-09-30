import { Link } from 'react-router-dom'

function MovieCard({ movie }) {
  const hasPoster = movie.Poster && movie.Poster !== 'N/A'

  return (
    <Link className="movie-card" to={`/movie/${movie.imdbID}`}>
      {hasPoster ? (
        <img className="movie-poster" src={movie.Poster} alt={`${movie.Title} poster`} />
      ) : (
        <div className="poster-fallback">Poster not available</div>
      )}
      <div className="movie-card-copy">
        <h3 title={movie.Title}>{movie.Title}</h3>
        <p className="movie-year">{movie.Year}</p>
      </div>
    </Link>
  )
}

export default MovieCard