import logo from './logo.svg';
import './App.css';
import Test from './Components/test';
import Toggle from './Components/Toggle';
import LoginControl from './Components/signs/LoginControl';
import Reservation from './Components/forms/Reservation';
import Calculator from './Components/temperature/Calculator';
import ExampleHook from './Components/ExampleHook';
function App() {
  return (
    <div>
      <h1>Component Login Control</h1>
      <LoginControl />
      <h1>Component Reservation</h1>
      <Reservation />
      <h1>Component Test</h1>
      <Test />
      <h1>Component Toggle</h1>
      <Toggle />
      <h1>Calculator temperature</h1>
      <Calculator />
      <h1>Example Joook</h1>
      <ExampleHook />
    </div>
  );
}

export default App;
