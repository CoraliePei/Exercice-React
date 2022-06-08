import logo from '../logo.svg';
import './App.css';

function App() {

  const bienvenue = <h1>Bienvenue chez React JS</h1>
  return (
    <div className="App">
      <main className="App-main">
        {bienvenue}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  );
}

export default App;
