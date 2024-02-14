import React, {useState} from "react";
import "./App.css";
import axios from "axios";
import Results from "./Results";

export default function SearchForm (props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(false);
  let [loaded, setLoaded] = useState(false);

  function HandleResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }

  function Search(event) {
      let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(HandleResponse);
  }

  function handleSubmit(event) {
       Search();
  }
  function HandleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    Search();
  }

  if (loaded) {
    return (
      <div className="SearchedWord">
        <form>
          <input
            type="search"
            placeholder="&#128269; Type Word"
            autoFocus={true}
            onChange={HandleKeyword}
            defaultValue={props.defaultKeyword}
          />
          <input className="btn" value="Search" onClick={handleSubmit} />
        </form>
        <br />
        <Results data={results} />
      </div>
    );
  }
  else{
    load();
    return "Loading";
  }
}