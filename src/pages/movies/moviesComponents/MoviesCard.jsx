import { FaStar } from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG;

const MoviesCard = ({ movie }) => {
  return (
    <div className="movie card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} /> 
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
    </div>
  )
}

export default MoviesCard;

