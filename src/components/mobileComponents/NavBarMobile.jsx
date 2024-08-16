import { Link } from "react-router-dom";

/* import { ContainerMob } from './stylesComponent';  */


const NavBarMobile = ({ menuIsVisible, setMenuIsVisible }) => {
  return (
    <div className="mob-container"> 
      <nav id="mob-nav"> 
        <ul>
          <li><Link to="/" onClick={() => setMenuIsVisible(false)}>CONSOLOG</Link></li> 
          <li><Link to="/calculator"></Link></li> 
          <li><Link to="/todo"></Link></li> 
          <li><Link to="/movie"></Link></li>
          <li><Link to="/form"></Link></li>
        </ul> 
      </nav> 
    </div> 
  );   
};

export default NavBarMobile;
 