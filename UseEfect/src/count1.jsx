

import { useState,useEffect } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0)
  // let btn=()=>{
  //   setCount(()=> count+1)
  // }

  // it will run only on first time render 
  useEffect(()=>{
    console.log("component re-render"
    ) 
  },[])
  return (
    <>
      <div>
      <button onClick={()=> setCount(count+1)}>Count: {count}</button>
      </div>
    </>
  )
}

export default Counter
