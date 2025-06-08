import { useState } from "react"


function App2() {
const [use,setUse] = useState("red");

  return (
    <>
     <h1 style={{color:use}}>helo:{use}</h1>
     <button onClick={()=>{setUse("Yellow")}}>yellow</button>
     <button onClick={()=>{setUse("Blue")}}>red</button>
     <button onClick={()=>{setUse("Green")}}>green</button>
    </>
  )
}

export default App2
