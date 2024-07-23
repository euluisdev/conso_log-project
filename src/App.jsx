import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import './App.css'

function App() { 
  return (  
    <> 
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
