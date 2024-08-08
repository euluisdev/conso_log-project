import { useEffect, useState } from 'react';  
import { useParams } from 'react-router-dom';  
  
import { 
  BsGraphUp, 
  BsWallet2, 
  BsHourglassSplit, 
  BsFillFileEarmarkTextFill 
} from 'react-icons/bs';  

import MoviesCard from '../moviesComponents/MoviesCard';  

const moviesURL = `${import.meta.env.VITE_API}`;  
const apiKey = import.meta.env.VITE_API_KEY;  

const MoviesList = () => {
  const { id } = useParams();  
  const [movie, setMovie] = useState(null);  

  const getMovie = async (url) => {
    const res = await fetch(url);  
    const data = await res.json();  

    setMovie(data);  
  };  

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;  
  }, []);  
 
  return ( 
    <div> 
      <h1>Hi, im List</h1>
    </div>
  )
}

export default MoviesList;  
