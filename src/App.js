import logo from './logo.svg';
import './App.css';
import ImageBox from './ImageBox'

function App() {

  function displayBois () {
    for (let i=0; i<10; i++){
      <ImageBox />
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Does this change anything?
        </p>

          {displayBois()}

          <ImageBox />

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
