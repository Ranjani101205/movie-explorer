import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('movie')
  const [year, setYear] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSearch({ term: query.trim(), type, year })
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="search-field">
        <span>Movie title</span>
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="For example, The Matrix" required />
      </label>
      <label className="search-field">
        <span>Category</span>
        <select value={type} onChange={(event) => setType(event.target.value)}>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>
      </label>
      <label className="search-field">
        <span>Year (optional)</span>
        <input type="number" min="1888" max={new Date().getFullYear()} value={year} onChange={(event) => setYear(event.target.value)} placeholder="Any year" />
      </label>
      <button className="search-button" type="submit">Search</button>
    </form>
  )
}

export default SearchBar