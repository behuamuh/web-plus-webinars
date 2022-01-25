import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import flatpickr from "flatpickr";

// const a = () => () => 5;
const withToggle = (WrappedComponent: any) => (props: any) => {
  return <div>Wrapped
    <WrappedComponent />
  </div>
}

const WrappedChild = withToggle(Child);

function Child() {
  const initStateRef = useRef([1,2]);
  const [state] = useState(initStateRef.current);

  console.log(initStateRef.current === state);
  console.log(initStateRef.current, state);

  return <div>Child</div>;
}

const useCustomEffect = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // const el = document.querySelector('#flatpikr');
    // console.log(el);

    if (!inputRef.current) return;

    // console.log(inputRef.current.getBoundingClientRect());
    // console.log(inputRef.current.style);
    // console.log(window.getComputedStyle(inputRef.current));

    flatpickr(inputRef.current, {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
    });

    return () => console.log(123);
  }, [])

  return inputRef
}

function App() {
  const [text, setText] = useState(() => '');
  const inputRef = useCustomEffect();

  useEffect(() => {
    console.log(123);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        Learn React
        <input value={text} onChange={e => setText(e.currentTarget.value)} />
      <input ref={inputRef} id="flatpikr" type="date" />
      <Child />
      </header>
    </div>
  );
}

export default App;
