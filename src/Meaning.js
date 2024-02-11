import React from "react";


export default function Meaning (props){
    console.log(props.meaning);
    return (
      <div>
        <div className="Meaning">
        <h5>{props.meaning.partOfSpeech}</h5>
        
        {props.meaning.definitions.map(function (definition, index)
        { return (
          <div key={index}>
            <br/>
            <p>{definition.definition}</p>
             <em class="text-primary" mt="1">{definition.example}</em>
          </div>
        );
        })}
      </div>
        <hr/>
      </div>
    );
}