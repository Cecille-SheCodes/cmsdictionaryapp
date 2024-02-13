import React, {useState} from "react";
import "./App.css";
import axios from "axios";
import Results from "./Results";

export default function SearchForm () {

    let [keyword,setKeyword] = useState("");
    let [results, setResults] = useState(false);

    function HandleResponse(response){
        console.log(response.data);
        setResults(response.data[0]);
    }

    function Search(event){
        event.preventDefault(); 
        alert(`Searching for ${keyword} definition`);
        let apiURL =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiURL).then(HandleResponse);
    }
    
    function HandleKeyword(event){
        event.preventDefault(); 
        console.log(event.target.value);
        setKeyword(event.target.value);
    }
    
    
    return (
      <div className="SearchedWord">
        <form >
          <input
            type="search"
            placeholder="&#128269; Type Word"
            autoFocus={true}
            onChange={HandleKeyword}
          />
          <input className="btn btn-info" value="Search" onClick={Search}/>
        </form>
        <br/>
        <Results data={results}/>
      </div>
    );
}
