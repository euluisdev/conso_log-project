import { FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";

const imageUrl = import.meta.env.VITE_IMG;

const MoviesCard = ({ movie }) => {
  return (
    <div className="movie card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} /> 
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {
        <Link to={`/movie/${movie.id}`}>Detalhes</Link>
      }
    </div>
  )
}

export default MoviesCard;

