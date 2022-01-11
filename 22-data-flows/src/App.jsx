
import { useState } from 'react';
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
  const [state, setState] = useState({
    temperature: '',
    scale: 'c',
  });

  const handleChangeCelsius = e => {
    setState({ scale: 'c', temperature: e.target.value })
  }

  const handleChangeFahrenheit = e => {
    setState({ scale: 'f', temperature: e.target.value })
  }

  const celsius = state.scale === 'c'
    ? state.temperature
    : tryConvert(state.temperature, toCelsius);

  const fahrenheit = state.scale === 'f'
    ? state.temperature
    : tryConvert(state.temperature, toFahrenheit);

  return (
    <div className="App">
      <TemperatureInput scale="c" temperature={celsius} onChange={handleChangeCelsius} />
      <TemperatureInput scale="f" temperature={fahrenheit} onChange={handleChangeFahrenheit} />
      <BoilingVerdict celsius={celsius} />
    </div>
  );
}

export default App;
