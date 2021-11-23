import { apiToken, apiUrl } from '../secrets.js';

const todoistApiConfig = {
  baseUrl: apiUrl,
  headers: {
    'Authorization': `Bearer ${apiToken}`,
    'Content-Type': 'application/json'
  }
}

const todoistApi = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apiToken}`,
  },
});

export const getUserProjects = () => {
  return todoistApi.get('projects');
};

export const getProjectTasks = projectId => {
  return todoistApi.get('tasks', {
    params: {
      project_id: projectId,
    },
  });
};

export const addTask = (taskText, projectId) => {
  return todoistApi.post('tasks', {
    content: taskText,
    project_id: projectId,
  });
};
