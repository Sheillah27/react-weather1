import "./Weather.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <Weather defaultCity="Nairobi" />
      <footer>
        <p>
          Codded by
          <a
            href="https://www.linkedin.com/in/sheillah-wafula-5279b3182/"
            target="blank"
          >
            {" "}
            Sheillah
          </a>
          , open sourced on
          <a
            href="https://github.com/Sheillah27/weather-react23"
            target="-blank"
          >
            {" "}
            Github{" "}
          </a>{" "}
          and hosted on <a href="/">Netlify</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
