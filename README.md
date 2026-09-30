# Movie Explorer

A beginner-friendly movie search app built with React, JavaScript, CSS, Fetch API, and React Router. Movie data comes from the OMDb API.

## Run the project

1. Install Node.js if it is not already installed.
2. In a terminal opened in this project folder, run `npm install`.
3. Get a free API key from [omdbapi.com](https://www.omdbapi.com/apikey.aspx).
4. Copy `.env.example` to `.env.local` and put your key after `VITE_OMDB_API_KEY=`.
5. Run `npm run dev` and open the local URL shown in the terminal.

## Main files

- `src/api.js`: the OMDb API key and base URL.
- `src/App.jsx`: routes for the search page and movie details page.
- `src/pages/HomePage.jsx`: search request and movie results state.
- `src/pages/MoviePage.jsx`: reads the selected IMDb ID from the route.
- `src/components/`: reusable navigation, search, movie card, loading, error, and detail components.
- `src/MovieExplorer.css` and `src/index.css`: app layout and responsive styles.
- `src/main.jsx`: starts the React application.

The OMDb API requires an API key. Keep your key in `.env.local`; that file is ignored by Git and should not be uploaded.
