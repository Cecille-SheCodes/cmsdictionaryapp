
import './App.css';
import SearchForm from './SearchForm';

function App() {
  return (
    <div className="container">
      <div className="App">
        <h1 className="header"> My Dictionary App</h1>
       <SearchForm />
        <br />
        <p className="footer">
          Designed by{" "}
          <a
            href="https://www.shecodes.io/graduates/82140-cecille-speckmaier"
            target="_blank"
            rel="noopener noreferrer"
          >
            CMSpeckmaier
          </a>{" "}
          and open-sourced in{" "}
          <a
            href="https://github.com/Cecille-SheCodes/revisedcmsweatherapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
