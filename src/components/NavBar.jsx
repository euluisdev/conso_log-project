import { Link } from "react-router-dom";

import CalculateIcon from '@mui/icons-material/Calculate';

import './cssComponents/NavBar.css';

const NavBar = () => {
    return (
        <div className='nav-contente'>
            <nav id='navbar'>
                <span className='logo'>
                    <Link to='/'>
                        CONSO.LOG <p>{'<project />'}</p>
                    </Link>
                </span>
                <ul className="nav-list">
                    <li><Link to='/calculator'><CalculateIcon /> Calculator</Link></li>
                    <li><Link to='/todolist'>Todo List</Link></li>
                    <li><Link to='/movies'>Movies</Link></li>
                    <li><Link to='/form'>Form Steps</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
