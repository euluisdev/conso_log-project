import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import MoviesCard from "../moviesComponents/MoviesCard"


const searchURL = import.meta.env.VITE_SEARCH;  
const apiKey = import.meta.env.VITE_API_KEY;  

const MoviesSearch = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);  
  const query = searchParams.get('q'); 

  const getSearchedMovies = async (url) => {  
      const res = await fetch(url);  
      const data = await res.json(); 
   
      setMovies(data.results); 
  };  

  useEffect(() => {
    const searchWidthQueryUrl = `${searchURL}?${apiKey}&query=${query}`;  
    
    getSearchedMovies(searchWidthQueryUrl);  
  }, [query]);  

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
  );  
};

export default MoviesSearch;  
