import React from 'react'

export default function Card(props){
    return(
        <div>
          
        <input type="text"
        onChange={(e)=> props.val(e.target.value)}/>
        <p>{props.name}</p>
        </div>
    )
}