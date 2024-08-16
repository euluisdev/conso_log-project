import { useState } from 'react';

import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NavBarMobile from './components/mobileComponents/NavBarMobile';

import './App.css'

function App() { 
  const [menuIsVisible, setMenuIsVisible] = useState(false); 

  return (  
    <>
    <NavBarMobile /> 
      <div className="app"> 
        <NavBar /> 
        <Outlet />  
      </div>
      <footer>
        <Footer /> 
      </footer>
    </>
  ) 
}; 

export default App;
