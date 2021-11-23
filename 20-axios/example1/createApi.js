import { apiToken, apiUrl } from './secrets.js';

export const createApi = (baseUrl, defaultOptions = {}) => {
  const makeRequest = (url, method = 'GET', data, options = {}) => {
    const { headers: defaultHeaders, ...restDefaultOptions } = defaultOptions;
    const { headers, ...restOptions } = options;

    const requestOptions = {
      method,
      ...restDefaultOptions,
      ...restOptions,
      headers: {
        ...defaultHeaders,
        ...headers,
      }
    };

    if (data) {
      requestOptions.body = JSON.stringify(data);
      requestOptions.headers['Content-Type'] = 'application/json';
    }

    return fetch(`${baseUrl}${url}`, requestOptions)
      .then(res => res.ok ? res.json() : Promise.reject(res.status));
  };

  return {
    get: (url, options) => makeRequest(url, 'GET', null, options),
    post: (url, data, options) => makeRequest(url, 'POST', data, options),
    put: (url, data, options) => makeRequest(url, 'PUT', data, options),
    patch: (url, data, options) => makeRequest(url, 'PATCH', data, options),
    delete: (url, options) => makeRequest(url, 'DELETE', null, options),
  };
}

// makeRequest('/cards', 'GET', null, {
//   headers: {
//     authorization: apiToken,
//     "Content-Type": "application/json",
//   },
// })
//   .then(data => console.log(data));

const mestoApi = createApi(apiUrl, {
  headers: {
    authorization: apiToken,
  }
});

mestoApi.get('/cards')
  .then(data => console.log(data))
  .catch(err => console.log(err))

mestoApi.get('/users/me')
.then(data => console.log(data))
  .catch(err => console.log(err))

mestoApi.post('/cards', {
  name: 'Some card',
  link: 'ya.ru',
})

// mestoApi.put(`/cards/likes/${card.id()}`)
// mestoApi.delete(`cards/likes/${card.id()}`)
mestoApi.patch('/users/me', { name: 'Вениамин', about: 'Веду вебинары' })
// mestoApi.patch('users/me/avatar', { avatar: "https://someurl" })
