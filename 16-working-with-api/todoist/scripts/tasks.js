import { getProjectTasks, addTask } from './api.js';
import { showError } from './utils.js';

const tasksContainer = document.querySelector(".todolist__list");
const tasksTemplate = document.querySelector("#todolist-form-template");
const taskTemplate = document.querySelector("#todolist-item-template");

//создает задачу
const createTaskElement = (task) => {
  const taskElement = taskTemplate.content.cloneNode(true).children[0];
  const taskText = taskElement.querySelector('.todolist-item__text');
  taskText.textContent = task.content;
  const deleteButton = taskElement.querySelector('.todolist-item__del');
  deleteButton.addEventListener('click', () => {
    taskElement.remove();
  })
  return taskElement;
}

//создает список задач
const createTasksElement = (tasks, projectId) => {
  const tasksElement = tasksTemplate.content.cloneNode(true);
  setTaskSubmitListener(tasksElement, projectId);
  const tasksList = tasksElement.querySelector('.todolist__tasks');
  tasksList.append(...tasks.map(createTaskElement));
  return tasksElement;
}

const setButtonState = (button, isSending) => {
  button.disabled = isSending;
  button.textContent = isSending ? 'Сохранение' : 'Сохранить';
}

//навешивает обработчик добавления карточки
const setTaskSubmitListener = (tasksContainer, projectId) => {
  const submitForm = tasksContainer.querySelector('.todolist-form');
  const input = tasksContainer.querySelector('.todolist-form_input');
  const button = tasksContainer.querySelector('.todolist-form_submit');
  const tasksList = tasksContainer.querySelector('.todolist__tasks');

  submitForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    setButtonState(button, true);

    addTask(input.value, projectId)
      .then(task => {
        tasksList.prepend(createTaskElement({
          content: task.content,
        }));
        submitForm.reset();
      })
      .catch(err => {
        showError(tasksList, `Ошибка при удалении задачи: ${err}`);
      })
      .finally(() => {
        setButtonState(button, false);
      })
  })
}

//отображает список задач на странице
const renderTasks = (tasks, projectId) => {
  tasksContainer.replaceChildren(createTasksElement(tasks, projectId));
}

//вызывает загрузку списка задач для выбранного проекта
export const loadProjectTasks = (projectId) => {
  getProjectTasks(projectId)
    .then(tasks => {
      renderTasks(tasks, projectId)
    }).catch(err => {
      showError(tasksContainer, `Ошибка при загрузке задач: ${err}`)
    })
};
