import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// const getTodo = (id: string): Promise<any> => {
//   const promise = fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//     .then(response => response.json());

//   return promise;
// }

const getFromTypicode = (name: string, id: string): Promise<any> => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const promise = fetch(`${baseUrl}/${name}/${id}`)
    .then(response => response.json());

  return promise;
}

const getTodo = getFromTypicode.bind(null, 'todos');
const getUser = getFromTypicode.bind(null, 'users');

// const getTodoFromTypicode = getTodo.bind(null, 'https://jsonplaceholder.typicode.com/todos');

function App() {
  useEffect(() => {
    // getFromTypicode('todos', '2')
    //   .then(todo => {
    //     console.log(todo)
    //     getFromTypicode('users', todo.userId)
    //       .then(json => console.log(json))
    //   });

    getTodo('2')
      .then(todo => {
        console.log(todo)
        getUser(todo.userId)
          .then(json => console.log(json))
      });


  }, []);
  function foo(a: number, b: number, c: number) {
    return a + b + c;
  }

  function curry(fooFn: Function) {
    // console.log(fooFn.length);
    const curried = (...args: any[]): any => {
      if (args.length >= fooFn.length) {
        return fooFn(...args);
      } else {
        return curried.bind(null, ...args);
      }
    }

    return curried;
  }

  // const calcSomethink = (a: number, b: number) => {
  //   return 300 + a + b;
  // }

  const calcSomethink = foo.bind(null, 300);

  console.log(calcSomethink(800, 800));

  console.log(foo(1, 2, 3));
  (window as any).curriedFoo = curry(foo);

  return (
    <div className="App">
      <header className="App-header">
        Learn React
      </header>
    </div>
  );
}

export default App;
