import { Link } from "react-router-dom";

import { ContainerMob } from './stylesComponent'; 


const NavBarMobile = () => {
  return (
    <ContainerMob className="mob-container"> 
      <nav id="mob-nav">
        <ul className="mob-logo">
          <li><Link to="/"></Link></li> 
        </ul>
      </nav>
    </ContainerMob>
  );  
};

export default NavBarMobile;
