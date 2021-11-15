import { fetchTodo, fetchUser } from './api.js';
import { getImageRect } from './getImageRect.js';

const inputElement = document.querySelector('#file');

inputElement.addEventListener('input', () => {
  const file = inputElement.files[0];

  getImageRect(file)
    .then(({ width, height }) => console.log({ width, height }))
    .catch(err => console.log(err));

});

// Bad
// fetchUser(1)
//   .then(user => {
//     fetchTodo(1)
//       .then(todo => {
//         console.log(user, todo);
//       })
//   });

// Very bad!
// let globalUser;

// fetchUser(1)
//   .then(user => {
//     globalUser = user;
//   });

// fetchTodo(1)
//   .then(todo => {
//     console.log(globalUser, todo);
//   })

Promise.all([fetchUser(1), fetchTodo(1)])
  .then(([user, todo]) => {
    console.log(user, todo);
  })
  .catch(err => console.log(err))

// const preloaderElement = document.querySelector('.preload');
// const fetchButton = document.querySelector('.button');

// const fetchTodos = () => {
//   showPreloader();

//   fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err))
//     .finally(() => hidePreloader());
// };

// const config = require('./webpack.config.js')

// const fetchTodos = async () => {
//   showPreloader();

//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
//     const todos = await res.json();

//     console.log(todos);
//   } catch (error) {
//     console.log(error)
//   } finally {
//     hidePreloader()
//   }
// };

// const showPreloader = () => {
//   preloaderElement.classList.add('preload_visible');
// };

// const hidePreloader = () => {
//   preloaderElement.classList.remove('preload_visible');
// };

// fetchButton.addEventListener('click', fetchTodos);
