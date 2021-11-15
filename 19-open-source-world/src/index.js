import validate from 'validate.js';
import { constraints } from './validation';
import Swiper, { Navigation, Pagination } from 'swiper';
import dayjs from 'dayjs';
import '../node_modules/swiper/swiper-bundle.css';
import './style.css';

Swiper.use([Navigation, Pagination]);

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', e => {
  e.preventDefault();

  const errors = validate({
    username: formEl.elements.username.value,
    password: formEl.elements.password.value,
  }, constraints);

  const inputList = formEl.querySelectorAll('.form__input');

  inputList.forEach(inputEl => {
    const errorEl = formEl.querySelector(`#${inputEl.name}-error`);
    const inputErrors = errors?.[inputEl.name];

    if (inputErrors) {
      errorEl.textContent = inputErrors.join(', ');
    } else {
      errorEl.textContent = '';
    }
  });
})


const id = Date.now();
console.log(id);

const now = new Date();

console.log(dayjs(now).add(3, 'month').format('DD/MM/YYYY'));

const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
