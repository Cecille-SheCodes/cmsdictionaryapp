import React from "react";



export default function Phonetics (props){
    
    if (props.phonetics.audio)
      return (
        <div>
          <audio controls src={props.phonetics.audio} />
        </div>
      );

      else{
        return null;
      }
}