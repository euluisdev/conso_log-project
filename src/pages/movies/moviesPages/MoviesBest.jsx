import { useEffect, useState } from "react";


const moviesURL = `${import.meta.env.VITE_API}`;
const apiKey = `${import.meta.env.VITE_API_KEY}`;

const MoviesBest = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.jason();

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
            
        </div>
    </section>
  )
}

export default MoviesBest;
