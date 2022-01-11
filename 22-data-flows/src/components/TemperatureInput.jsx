import { useState } from 'react';


const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

const TemperatureInput = ({ scale, temperature, onChange }) => {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={onChange} />
    </fieldset>
  );
};

export default TemperatureInput;
