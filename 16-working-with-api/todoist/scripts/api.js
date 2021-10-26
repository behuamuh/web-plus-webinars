const todoistApiConfig = {
  baseUrl: 'https://api.todoist.com/rest/v1',
  headers: {
    'Authorization': 'Bearer ',
    'Content-Type': 'application/json'
  }
}

const checkResponse = res => {
  if (res.ok) return res.json();

  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getUserProjects = () => {
  return fetch(`${todoistApiConfig.baseUrl}/projects`, {
    headers: todoistApiConfig.headers,
  }).then(checkResponse);
};

export const getProjectTasks = projectId => {
  return fetch(`${todoistApiConfig.baseUrl}/tasks?project_id=${projectId}`, {
    headers: todoistApiConfig.headers,
  })
    .then(checkResponse);
};

export const addTask = (taskText, projectId) => {
  return fetch(`${todoistApiConfig.baseUrl}/tasks`, {
    method: 'POST',
    headers: todoistApiConfig.headers,
    body: JSON.stringify({
      content: taskText,
      project_id: projectId,
    })
  })
    .then(checkResponse);
}
