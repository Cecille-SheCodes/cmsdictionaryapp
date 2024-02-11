import React from "react";
import Meaning from "./Meaning";

export default function Results (props){
    console.log(props.data);
   console.log(props.data.word);
    console.log(props.data.phonetic);


    if (props.data){
    return (
      <div className="results">
        <h1>{props.data.word}</h1>
        <h5>{props.data.phonetic}</h5>
        <div>
          <audio controls src={props.data.phonetics[0].audio} />
       
        </div>

    {props.data.meanings.map(function (meaning, index){
return (
  <div  key={index}>
    <Meaning meaning={meaning} />
  </div>
);
    })
    }
        
        </div>
    );}
    else{
        return null;
    }
}