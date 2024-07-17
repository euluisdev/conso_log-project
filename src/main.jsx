import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx'
import PageHome from './pages/home/PageHome.jsx';

import './index.css'


ReactDOM.createRoot(document.querySelector('#root')).render(  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} >
          <Route path='/' element={<PageHome />} />
          <Route path='/' element={<PageHome />} />
          <Route path='/' element={<PageHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
