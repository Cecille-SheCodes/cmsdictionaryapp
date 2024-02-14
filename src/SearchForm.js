import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function SearchForm(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(false);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
 let [errorMessage, setErrorMessage] = useState("");

  function HandleResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }

  function HandlePexelsResponse(response) {
    setPhotos(response.data.photos);
    
      }

function Search(event) {
  let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

  axios
    .get(apiURL)
    .then(HandleResponse)
    .catch((dictionaryError) => {
      console.log("Dictionary API Error:", dictionaryError);
      setErrorMessage(
        "An error occurred while fetching the definition. Please try again later."
      );
    });

  let Pexelsapi = "ImQIBhzZLdKJmWznTTZDRszPlAEke7M8I3me9frdrjWd1UE5UchfSQfD";
  let PexelsapiURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

  axios
    .get(PexelsapiURL, { headers: { Authorization: `${Pexelsapi}` } })
    .then(HandlePexelsResponse)
    .catch((pexelsError) => {
      console.log("Pexels API Error:", pexelsError);
      setErrorMessage(
        "An error occurred while fetching the definition. Please try again later."
      );
    });
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
              <p className="text-white"><em>ex. common nouns, adjectives, verbs</em></p>
        <Results data={results} />
        <Photos photos={photos} keyword={keyword} />
      </div>
    );
  } 
  else {
    try {
      load();
      return (
        <div>{errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}</div>
      );
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
}