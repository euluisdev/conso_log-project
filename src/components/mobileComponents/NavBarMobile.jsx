import { Link } from "react-router-dom";

import { ContainerMob } from './stylesComponent'; 


const NavBarMobile = () => {
  return (
    <ContainerMob className="nav-content">
      <nav className="mob-navbar">
        <span className="mob-logo">
          <Link to="/"></Link>
        </span>
      </nav>
    </ContainerMob>
  );  
};

export default NavBarMobile;
