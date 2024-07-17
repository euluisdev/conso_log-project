import { Link, Outlet } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="app">
      <nav id='navbar'>
        <h2>
          <Link to='/'>Page Home</Link>
        </h2>
        <Link to='/calculator'>Calculator</Link>
        <Link to='/todolist'>Todo List</Link>
      </nav>
      <h1>conso.log Project</h1>
      <Outlet />
    </div>
  )
}

export default App;
