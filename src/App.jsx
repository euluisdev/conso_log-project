import { useState } from 'react';

import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NavBarMobile from './components/mobileComponents/NavBarMobile'; 
import { Analytics } from '@vercel/analytics/react'; 

import './App.css'
import './media-query/MediaQuery.css';

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <NavBarMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <div className="app">
        <NavBar setMenuIsVisible={setMenuIsVisible} />
        <Outlet />
      </div>
      <footer>
        <Footer /> 
        <Analytics /> 
      </footer>
    </>
  );
};

export default App;
