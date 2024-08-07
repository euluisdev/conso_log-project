import { useState } from "react";
import { useParams } from "react-router-dom";


const searchURL = import.meta.env.VITE_SEARCH;  
const apiKey = import.meta.env.VITE_API_KEY;  

const MoviesSearch = () => {
  const searchParams = useParams();

  const [movies, setMovies] = useState([]);  

  return (
    <div className="movies-container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="moviesContainer">
        {
          movies.length === 0 && <p>Carregando...</p>
        }
        {
          movies.length > 0 && movies.map((movie) =>
            <MoviesCard key={movie.id} movie={movie} />
          )
        }
      </div>
    </div>
  )
}

export default MoviesSearch;
