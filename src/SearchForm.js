import React, {useState} from "react";
import "./App.css";

export default function SearchForm () {

    let [keyword,setKeyword] = useState("");

    function Search(event){
        event.preventDefault(); 
        alert(`Searching for ${keyword} definition`);
    }
    
    function HandleKeyword(event){
        event.preventDefault(); 
        console.log(event.target.value);
        setKeyword(event.target.value);
    }
    
    
    return (
      <div>
        <form >
          <input
            type="search"
            placeholder="&#128269; Type Word"
            autoFocus={true}
            onChange={HandleKeyword}
          />
          <input className="btn btn-primary" value="Search" onClick={Search}/>
        </form>
      </div>
    );
}
