import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";


export default function Results (props){
    console.log(props.data);
   console.log(props.data.word);
    console.log(props.data.phonetic);


    if (props.data){
    return (
      <div className="results">
        <h1>{props.data.word}</h1>
        <h5> {props.data.phonetic}</h5>

        <Phonetics phonetics={props.data.phonetics[0]} />

        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );}

    else{
        return null;
    }
}