import React from "react";

export default function Synonyms (props){
    console.log(props.synonym);
    if (props.synonym.length > 1){
        return(
            <div>
            <h5>synonyms</h5>

            {props.synonym.map(function (synonyms, index) {
            return (
                     
            <div className="m-2 ">
              <ul className="list-group">
                <li className="list-group-item bg-info text-white" key={index}>
                  {synonyms}
                </li>
              </ul>
              
            </div>
         
        );
      })}
      <hr/>
    </div>)}
    
    else{
        return null;
    }
      
    }