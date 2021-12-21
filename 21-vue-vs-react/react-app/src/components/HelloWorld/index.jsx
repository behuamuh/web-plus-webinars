import { useEffect, useMemo, useState } from 'react';

function HelloWorld(props) {
  const [text, setText] = useState('Hello!');
  const [showText, setShowText] = useState('Hello!');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (text.length > 15) {
      alert('Too long text!');
    }
  }, [text]);

  const handleChangeText = e => {
    setText(e.currentTarget.value);
  };

  const handleChangeShowText = e => {
    setShowText(e.currentTarget.checked);
  };

  const handleAddTodo = e => {
    e.preventDefault();
    const newTodos = [text, ...todos];
    setTodos(newTodos);
    setText('');
  };

  const upperText = useMemo(() => {
    console.log(123);
    return text.toUpperCase();
  }, [text]);

  return (
    <div className="HelloWorld">
      {props.message}
      <form onSubmit={handleAddTodo}>
        <input type="text" value={text} onChange={handleChangeText} />
        <button>Create</button>
      </form>
      <label>
        <input type="checkbox" checked={showText} onChange={handleChangeShowText} />
        Show text?
      </label>
      {showText && (
        <p>
          {upperText}
        </p>
      )}
      {todos.map(todo => (
        <li key={todo}>
          {todo}
        </li>
      ))}
    </div>
  );
}

export default HelloWorld;
