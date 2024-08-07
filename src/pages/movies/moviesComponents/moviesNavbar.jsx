import { useState } from "react";

import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";


const MoviesNavbar = () => {
    const [search, setSearch] = useState(''); 

    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (!search) return;  

        navigate(`search?q=${search}`);  
        setSearch('');  
    };  

  return (
    <nav id="movies-navbar">
    <h2>
        <Link to=''>
            <BiCameraMovie /> CONSO.LOG Movies
        </Link>
    </h2>
    <form>
        <input
            type="text"
            placeholder="Busque seu filme"
            required
        />
        <button type="submit">
            <BiSearchAlt2 />
        </button>
    </form>
</nav>
  )
};

export default MoviesNavbar;
