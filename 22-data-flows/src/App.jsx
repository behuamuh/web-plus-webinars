
import './App.css';
import BoilingVerdict from './components/BoilingVerdict';
import TemperatureInput from './components/TemperatureInput';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function App() {
  return (
    <div className="App">
      <TemperatureInput scale="c" />
    </div>
  );
}

export default App;
