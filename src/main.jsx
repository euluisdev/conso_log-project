import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import PageHome from './pages/home/PageHome.jsx';
import Calculator from './pages/calculator/Calculator.jsx';
import TodoList from './pages/todoList/TodoList.jsx';
import FormSteps from './pages/stepsform/FormSteps.jsx';
import Movies from './pages/movies/Movies.jsx';

// subcomponents of the Movies
import MoviesHomePage from './pages/movies/MoviesHomePage.jsx'; 

import './index.css';


ReactDOM.createRoot(document.querySelector('#root')).render(  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} >
          <Route path='/' element={<PageHome />} />
          <Route path='calculator' element={<Calculator />} />
          <Route path='todolist' element={<TodoList />} />
          <Route path='movies' element={<Movies />}>
            <Route index element={<MoviesHomePage />} />
          </Route>
          <Route path='form' element={<FormSteps />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
