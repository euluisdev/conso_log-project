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
    <div>
      <h1>Hi, im movies best</h1>
    </div>
  )
}

export default MoviesBest;
