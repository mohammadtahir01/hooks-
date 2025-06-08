
import { useState } from "react"


function App1() {
const [use,setUse] = useState("")
  return (
    <>
     <h1>helo:{use}</h1>
     <button onClick={()=>{setUse("Rahul")}}>click</button>
    </>
  )
}

export default App1
