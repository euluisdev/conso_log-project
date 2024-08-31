import TodoHomePage from "./TodoHomePage";

import './style/TodoImport.css'

import '../../media-query/TodoMediaQuery.css';

function TodoList() {
  return (
    <div className="contain">
      <TodoHomePage />
    </div>
  );
};

export default TodoList;