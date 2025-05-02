import React from 'react';

export default function Add(props){
    return(
        <div>
        <button onClick={props.hendle1}>{props.text}</button> 
        </div>
    )
}
