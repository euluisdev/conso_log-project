import { Link } from "react-router-dom";

import CalculateIcon from '@mui/icons-material/Calculate';
import HomeIcon from '@mui/icons-material/Home';
import ChecklistIcon from '@mui/icons-material/Checklist';
import VideocamIcon from '@mui/icons-material/Videocam';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease'; 
import MenuIcon from '@mui/icons-material/Menu'; 

import './cssComponents/NavBar.css';

const NavBar = ({ setMenuIsVisible }) => {
    return (
        <div className='nav-content'>
            <nav id='navbar'>
                <span className='logo'>
                    <Link to='/'>
                        <HomeIcon className="home-icon" /> CONSO.LOG <p>{'<project />'}</p>
                    </Link>
                </span>
                <ul className="nav-list">
                    <li><Link to='/calculator'><CalculateIcon /> Calculator</Link></li>
                    <li><Link to='/todolist'><ChecklistIcon />Todo List</Link></li>
                    <li><Link to='/movies'><VideocamIcon />Movies</Link></li>
                    <li><Link to='/form'><FormatIndentIncreaseIcon />Form Steps</Link></li>
                </ul> 

                <section className='navmenu-icon'>
                    <MenuIcon onClick={() => setMenuIsVisible(true)} />
                </section>
            </nav>
        </div>
    );
};

export default NavBar;
