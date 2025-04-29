//first we will had to create a counter then memo
import {useState,useMemo } from 'react'


export default function Usemema(){
let [count,setCount] = useState(0)
let [input ,setInput] = useState(0);
// let update=()=>{
//     setCount((current)=> current+1);
// }

let expensive=(num)=>{
    for(let i=0; i<1000000000; ++i){}
    return num*2;
}
let doubleval = useMemo(()=>expensive(input),[input]);

// useMemo(()=>expensive(input),[input])
    return(
        <div>
          <button onClick={()=> setCount(count+1)}>Click</button>
          <p>Counter:{count}</p>

       <input type="number" 
       placeholder="enter the number"
       value={input}
       onChange={(e)=> setInput((e.target.value))} />
          <h1>Double:{doubleval}</h1>
        </div>
    )
}