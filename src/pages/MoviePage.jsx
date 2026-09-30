import { useParams } from 'react-router-dom'
import MovieDetails from '../components/MovieDetails.jsx'

function MoviePage() {
  const { imdbID } = useParams()
  return <MovieDetails imdbID={imdbID} />
}

export default MoviePage