
import './App.css';
import SearchForm from './SearchForm';

function App() {
  return (
    <div className="container">
      <section className="main">
        <h1 className="header"> My Dictionary App</h1>
        <SearchForm defaultKeyword="pet"/>
      </section>

      <section className="footer">
        Designed by{" "}
        <a
          className="Coder"
          href="https://www.shecodes.io/graduates/82140-cecille-speckmaier"
          target="_blank"
          rel="noopener noreferrer"
        >
          CMSpeckmaier
        </a>{" "}
        and open-sourced in{" "}
        <a
          className="Coder"
          href="https://github.com/Cecille-SheCodes/revisedcmsweatherapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </section>
    </div>
  );
}

export default App;
