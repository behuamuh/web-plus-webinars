import './App.css';

function App() {
  const onSubmit = evt => {
    evt.preventDefault()
    console.log('hello')
  }
  
  return (
    <div className="App">
      <h1>TITLE</h1>
      <div>
        DATA
      </div>
      <form onSubmit={onSubmit}>
        <input type='text' name='id' />
        <button type='submit'>
          Add Cat
        </button>
      </form>
    </div>
  );
}

export default App

// 595f2810557291a9750ebfcf
// 595f2810557291a9750ebfd4
// 595f280a557291a9750ebf4a
// 595f280a557291a9750ebf5f
// 595f280c557291a9750ebf82
// 595f280c557291a9750ebf78
// https://cataas.com/api/cats?skip=0&limit=30