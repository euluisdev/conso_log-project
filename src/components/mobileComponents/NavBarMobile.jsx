import { Link } from "react-router-dom";

/* import { ContainerMob } from './stylesComponent';  */


const NavBarMobile = () => {
  return (
    <div className="mob-container"> 
      <nav id="mob-nav">
        <ul className="mob-logo">
          <li><Link to="/"></Link></li> 
        </ul>
      </nav>
    </div>
  );  
};

export default NavBarMobile;
