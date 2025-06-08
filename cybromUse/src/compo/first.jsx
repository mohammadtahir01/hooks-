
import { useEffect, useState } from "react";

const First=()=>{

  const [count,setCount]=useState(0);
  const [multi,setMulti]=useState(0);

  useEffect(()=>{
    setMulti(count*2);
  })
  return(
    <>
<h1>welcome my app</h1>
<button onClick={()=>{setCount(count+1)}}>click</button>
<h1>my count :{count}</h1>
<h1 >multipilication:{multi}</h1>
    </>
  )
} 

export default First;