import { useState } from 'react';
import Create from './components/Create';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = text => {
    setTodos(old => [
      { text, id: Date.now(), done: false },
      ...old,
    ]);
  }

  const handleClickTodo = todoId => {
    setTodos(old => old.map(todo => {
      return todo.id !== todoId
        ? todo
        : { ...todo, done: !todo.done }
    }));
  };

  return (
    <div className="App">
      <Create onCreate={handleCreateTodo} />
      <TodoList todos={todos} onClickTodo={handleClickTodo} />
    </div>
  );
}

export default App;
