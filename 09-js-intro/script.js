// https://www.openstreetmap.org/#map=3/latitude/longitude

// Найти кнопку
const searchButtonEl = document.querySelector('.search');
// Найти элемент Бади
const bodyEl = document.querySelector('.page');

// Создаем тэг ссылки
function createLink(href) {
  // Создаем пустой тэг А
  const link = document.createElement('a');

  // Присваиваем ему адрес, текст и атрибут открытия в новой вкладке
  link.href = href;
  link.textContent = 'Открыть карту!';
  link.target = '_blank';

  // Возвращаем ссылку
  return link;
}

// Добавляем ссылку на страницу
function addLink(link) {
  bodyEl.append(link);
}

// Если есть доступ к местоположению, выполнится эта функция
function successCallback(position) {
  // Получаем широту и долготу
  const { latitude, longitude } = position.coords;

  // Формируем ссылку на карту с координатами
  const href = `https://www.openstreetmap.org/#map=15/${latitude}/${longitude}`;

  // Создаем тэг ссылки
  const link = createLink(href);

  // Добавляем ссылку на страницу
  addLink(link);
}

// Если нет доступа к местоположению, выполнится эта функция
function errorCallback(error) {
  // Выводим сообщение
  alert('Для работы сайта необходим доступ к геолокации :-(');
}

// Добавляем обработчик клика по кнопке
searchButtonEl.addEventListener('click', () => {
  // обращаемся к АПИ браузера по запросу местоположения
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
});
