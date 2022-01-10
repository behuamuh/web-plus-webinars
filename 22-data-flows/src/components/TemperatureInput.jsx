import { useState } from 'react';

import BoilingVerdict from './BoilingVerdict';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

const TemperatureInput = ({ scale }) => {
  const [temperature, setTemperature] = useState('');

  const handleChange = e => {
    setTemperature(e.target.value);
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={handleChange} />
      <BoilingVerdict celsius={temperature} />
    </fieldset>
  );
};

export default TemperatureInput;
