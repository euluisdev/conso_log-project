import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div id='container'>
            <nav id='navbar'>
                <h2>
                    <Link to='/'>Page Home</Link>
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
