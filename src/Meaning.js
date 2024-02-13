import React from "react";
import Synonyms from "./Synonyms"


export default function Meaning (props){
    console.log(props.meaning);
    return (
      <div>
        <div className="Meaning">
          <h5>{props.meaning.partOfSpeech}</h5>

          {props.meaning.definitions.map(function (definition, index) {
            return (
              <div key={index}>
                <br />
                <p class="text-sm-left m-2">{definition.definition}</p>
                <em class="text-primary text-sm-left " mt="1">
                  {definition.example}
                </em>
              </div>
            );
          })}
            <br/>
         
        <hr />
          <Synonyms synonym={props.meaning.synonyms} />
                
      </div>
      </div>
    );
}