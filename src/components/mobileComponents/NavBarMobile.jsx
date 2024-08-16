import { Link } from "react-router-dom"; 
 
import { IoClose } from "react-icons/io5"; 

/* import { ContainerMob } from './stylesComponent';  */

import './NavBarMobile.css'; 

const NavBarMobile = ({ menuIsVisible, setMenuIsVisible }) => { 

  return (
    <div className="mob-container"> 
      <nav id="mob-nav"> 
        <ul>
          <li><Link to="/" onClick={() => setMenuIsVisible(false)}>CONSOLOG</Link></li> 
          <li><Link to="/calculator" onClick={() => setMenuIsVisible(false)}>Calculator</Link></li> 
          <li><Link to="/todo" onClick={() => setMenuIsVisible(false)}>TodoList</Link></li> 
          <li><Link to="/movie" onClick={() => setMenuIsVisible(false)}>Movie</Link></li>
          <li><Link to="/form" onClick={() => setMenuIsVisible(fale)}>FormSteps</Link></li>
        </ul> 
      </nav> 
      <section className="mob-nave">
        <IoClose size={ 50 } onClick={() => setMenuIsVisible(false)} /> 
      </section>
    </div> 
  );   
};

export default NavBarMobile;
 