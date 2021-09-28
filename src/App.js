import logo from './logo.svg';
import './App.css';
import ImageBox from './ImageBox'

function App() {

  let boiArray = [];

  function GetBois () {
    for (let i=0; i<10; i++){
      useEffect(() => {
        axios({
            method: "GET",
            url: "https://randomfox.ca/floof/",
            dataResponse: "json",
          }).then(({ data }) => {
            boiArray.push(data.image)
          }).catch((error) => {
            alert("Foxxos can't be found! They must be hiding. Maybe they'll come back later.");
          });
    }, []);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Does this change anything?
        </p>
        
          {GetBois}
          boiArray.map(item => (
            <ImageBox url={boiArray.image} />
          ));

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
