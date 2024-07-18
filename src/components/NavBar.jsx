import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className='nav-contente'>
            <nav id='navbar'>
                <span className='logo'>
                    <Link to='/'>
                        CONSO.LOG <p>{'<project />'}</p>
                    </Link>
                </span>
                <h2>
                </h2>
                <Link to='/calculator'>Calculator</Link>
                <Link to='/todolist'>Todo List</Link>
                <Link to='/movies'>Movies</Link>
                <Link to='/form'>Form Steps</Link>
            </nav>
        </div>
    )
};

export default NavBar;
