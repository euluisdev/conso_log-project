import { useEffect, useState } from "react";

import MoviesCard from "../moviesComponents/MoviesCard";


const moviesURL = `${import.meta.env.VITE_API}`;
const apiKey = `${import.meta.env.VITE_API_KEY}`;

const MoviesBest = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    }; 

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl);
    }, [])

  return (
    <section className="movies-container">
        <h2 className="title">Melhores Filmes:</h2> 
        <div className="moviesContainer">
            {
                topMovies.length === 0 && <p>Carregando...</p>
            }
            {
                topMovies.length > 0 && topMovies.map((movie, id) => 
                    <MoviesCard key={movie.id} movie={movie} />
                )
            }
        </div>
    </section>
  ); 
};  

export default MoviesBest;
