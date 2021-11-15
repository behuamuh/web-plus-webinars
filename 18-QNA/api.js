const todosUrl = 'https://jsonplaceholder.typicode.com/';

const handleResponse = res => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(res.status);
};

export const fetchUser = id => {
  const url = `${todosUrl}users/${id}`;

  return fetch(url)
    .then(handleResponse);
};

export const fetchTodo = id => {
  const url = `${todosUrl}todos/${id}`;

  return fetch(url)
    .then(handleResponse);
};

