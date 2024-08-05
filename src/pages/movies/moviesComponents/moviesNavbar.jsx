import { Link } from "react-router-dom";


const MoviesNavbar = () => {
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
            value={search}  //isso permite manipular o estado diretamente
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
