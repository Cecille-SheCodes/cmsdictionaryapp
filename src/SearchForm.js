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

  async function Search(event) {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    try {
      const response = await axios.get(apiURL);
      HandleResponse(response);

      // Check if the word exists in the dictionary before making the Pexels API call
      if (response.data && response.data.length > 0) {
        let Pexelsapi =
          "ImQIBhzZLdKJmWznTTZDRszPlAEke7M8I3me9frdrjWd1UE5UchfSQfD";
        let PexelsapiURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

        const pexelsResponse = await axios.get(PexelsapiURL, {
          headers: { Authorization: `${Pexelsapi}` },
        });
        HandlePexelsResponse(pexelsResponse);
      }
    } catch (error) {
      console.log("API Error:", error);
      setErrorMessage(
        "An error occurred while fetching the definition. Please try again later."
      );
    }
  }

  function HandleResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }

  function HandlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
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
        <p className="text-white">
          <em>ex. common nouns, adjectives, verbs</em>
        </p>
        <Results data={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    try {
      load();
      return (
        <div>
          {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        </div>
      );
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
}
