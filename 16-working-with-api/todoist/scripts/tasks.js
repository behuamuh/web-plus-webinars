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

//навешивает обработчик добавления карточки
const setTaskSubmitListener = (tasksContainer, projectId) => {
  const submitForm = tasksContainer.querySelector('.todolist-form');
  const input = tasksContainer.querySelector('.todolist-form_input');
  const button = tasksContainer.querySelector('.todolist-form_submit');
  const tasksList = tasksContainer.querySelector('.todolist__tasks');

  submitForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    tasksList.prepend(createTaskElement({
      content: input.value
    }));
  })
}

//отображает список задач на странице
const renderTasks = (tasks, projectId) => {
  tasksContainer.replaceChildren(createTasksElement(tasks, projectId));
}

const tasks = [
	{
		"id": 282929276,
		"assigner": 0,
		"project_id": 270034943,
		"section_id": 0,
		"order": 1,
		"content": "Задача 1",
		"description": "",
		"completed": false,
		"label_ids": [],
		"priority": 1,
		"comment_count": 0,
		"creator": 0,
		"created": "1970-01-01T00:00:00Z",
		"url": "https://todoist.com/showTask?id=282929276"
	},
	{
		"id": 5104346988,
		"assigner": 0,
		"project_id": 270034943,
		"section_id": 0,
		"order": 5,
		"content": "Задача 2",
		"description": "",
		"completed": false,
		"label_ids": [],
		"priority": 1,
		"comment_count": 0,
		"creator": 307876,
		"created": "2021-08-27T13:54:50Z",
		"url": "https://todoist.com/showTask?id=5104346988"
	},
	{
		"id": 5104507848,
		"assigner": 0,
		"project_id": 270034943,
		"section_id": 0,
		"order": 6,
		"content": "Задача 3",
		"description": "",
		"completed": false,
		"label_ids": [],
		"priority": 1,
		"comment_count": 0,
		"creator": 307876,
		"created": "2021-08-27T14:51:47Z",
		"url": "https://todoist.com/showTask?id=5104507848"
	}
];

//вызывает загрузку списка задач для выбранного проекта
export const loadProjectTasks = (projectId) => {
  renderTasks(tasks, projectId)
};
