import React from "react";



export default function Phonetics (props){
  try {
    if (props.phonetics.audio) {
      return (
        <div>
          <audio controls src={props.phonetics.audio} />
        </div>
      );
    } else {
      return null;
    }
  } catch (error) {
    // Handle the error here
    console.error(error);
    return null;
  }
}