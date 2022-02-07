import './App.css';
import { observer } from 'mobx-react';
import Cat from './components/Cat';
import superStor from './store/super-store';

function App() {
  const { cats, user } = superStor;
  const { data, loading, addCat, deleteCat, catsCount } = cats;
  const { name, setName } = user;

  const onSubmit = e => {
    e.preventDefault()

    const form = e.target;
    const id = form.elements.catId.value;
    addCat(id);
    form.reset();
  }

  return (
    <div className="App">
      <input value={name} onChange={e => setName(e.target.value)} />
      <h1>CATS: {catsCount}</h1>
      <div>
        {loading ? (
          '...Loading'
        ) : data.map(cat => (
          <Cat key={cat.id} cat={cat} onClick={deleteCat} />
        ))}
      </div>
      <form onSubmit={onSubmit}>
        <input type='text' name='catId' />
        <button type='submit'>
          Add Cat
        </button>
      </form>
    </div>
  );
}

export default observer(App)

// https://cataas.com/cat/595f2810557291a9750ebfd4
// 595f2810557291a9750ebfcf
// 595f2810557291a9750ebfd4
// 595f280a557291a9750ebf4a
// 595f280a557291a9750ebf5f
// 595f280c557291a9750ebf82
// 595f280c557291a9750ebf78
// https://cataas.com/api/cats?skip=0&limit=30
