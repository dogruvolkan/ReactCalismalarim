import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Header></Header>

      <label htmlFor="myinput">Name</label>
      <input id="myinput"></input>
    </div>
  )
}

export default App;
