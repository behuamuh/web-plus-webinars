import "./index.css"
import axios from "axios";
import { apiUrl, apiToken } from '../../secrets.js';

// console.log(apiUrl, apiToken);

const searchForm = document.querySelector(".weather-form");
const input = document.querySelector(".weather-form_input");
const rowTemplate = document.querySelector(".template-weather-data");
const table = document.querySelector(".table");

const renderWeatherTable = (items) => {
  items.forEach((item) => table.append(createWeatherRow(item)));
}

const cleartable = () => {
  table.querySelectorAll('.table__row').forEach(row => row.remove());
}

const createWeatherRow = (data) => {
  const rowElement = rowTemplate.content.cloneNode(true).children[0];
  rowElement.querySelector('.table__data_time').textContent = data.dt_txt;
  rowElement.querySelector('.table__data_temp').textContent = Math.round(data.main.temp) + '°C';
  rowElement.querySelector('.table__data_humid').textContent = data.main.humidity + '%';
  rowElement.querySelector('.table__data_cloud').textContent = data.weather[0].description;
  rowElement.querySelector('.table__data_wind').textContent = Math.round(data.wind.speed) + ' м/с';
  return rowElement
}

searchForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  cleartable();

  axios.get(apiUrl, {
    params: {
      q: input.value,
      lang: 'ru',
      appid: apiToken,
      units: 'metric'
    }
  })
    .then(res => {
      renderWeatherTable(res.data.list);
      searchForm.reset();
    })
    .catch(err => {
      console.log(err);
    });
})

