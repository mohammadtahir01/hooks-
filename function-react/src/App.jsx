import React from 'react';
import Add from './Function1';
import {useState} from 'react'

function App() {
  let [start1 , setStart1] =  useState(0);

  let click1=()=>{
    setStart1(start1+1);
  }
  return (
    <>

   <p>count:{start1}</p>
   <Add hendle1={click1} text={"click me"}/>
   
    </>
  )
}

export default App
