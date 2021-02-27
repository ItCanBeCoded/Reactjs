import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Picking a Javascript framework depends on if its a simple
          website or if it is a web app with a db.
        </h1>
        <ul>
          <li>Vanilla js if its very simple site</li>
          <li>Reactjs for big web app</li>
          <li>Gatsby for large static site generator very fast</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
