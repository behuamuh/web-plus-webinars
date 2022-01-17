export default function Todo({ todo, onClick }) {
  const { id, text, done } = todo;

  return (
    <div
      className={`todo ${done ? 'todo_done' : ''}`}
      onClick={() => onClick(id)}
    >
      {text}
    </div>
  )
}
