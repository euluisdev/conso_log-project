import { useState } from "react";


const moviesUrl = `${import.meta.env.VITE_API}`;
const apiKey = `${import.meta.env.VITE_API_KEY}`;

const MoviesBest = () => {
    const [topMovies, setTopMovies] = useState([]);

  return (
    <div>
      <h1>Hi, im movies best</h1>
    </div>
  )
}

export default MoviesBest;
