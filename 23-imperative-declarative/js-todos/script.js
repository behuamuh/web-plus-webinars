const templateEl = document.querySelector('#todo-item');
const formEl = document.querySelector('.create');
const listEl = document.querySelector('.list');

const todos = [];

const createTodoItem = ({ text, done, id }) => {
  const todoItemEl = templateEl.content.querySelector('.list__item').cloneNode(true);
  const todoEl = todoItemEl.querySelector('.todo');

  todoEl.textContent = text;
  if (done) todoEl.classList.add('todo_done');

  todoEl.addEventListener('click', () => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos[i].done = !todos[i].done;
        break;
      }
    }

    updateList();
  });
  
  return todoItemEl;
};

const updateList = () => {
  listEl.innerHTML = '';
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < todos.length; i++) {
    const element = createTodoItem(todos[i]);
    fragment.append(element);
  }

  listEl.append(fragment);
};

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const text = formEl.elements.todo.value;

  todos.push({
    id: Date.now(),
    done: false,
    text,
  })

  updateList();

  formEl.reset();
})
