import Todo from './Todo';

export default function TodoList({ todos, onClickTodo }) {
  return (
    <ul className="list">
      {todos.map(todo => (
        <li className="list__item" key={todo.id} >
          <Todo onClick={onClickTodo} todo={todo} />
        </li>
      ))}
    </ul>
  )
}
