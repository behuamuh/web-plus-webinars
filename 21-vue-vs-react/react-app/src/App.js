import './App.css';
import HelloWorld from './components/HelloWorld';
import RedBox from './components/RedBox';

function App() {
  return (
    <div className="App">
      <RedBox>
        Hello in box!
      </RedBox>
      <HelloWorld message="Hello from App!" />
    </div>
  );
}

export default App;
