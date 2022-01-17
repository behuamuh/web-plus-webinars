import { useState } from 'react';

export default function Create({ onCreate }) {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onCreate(text);
    setText('');
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <input
        name="todo"
        type="text"
        className="create__input"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="create__btn">Create</button>
    </form>
  )
}
