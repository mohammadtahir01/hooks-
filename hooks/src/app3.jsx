import { useState } from "react"


function App3() {
const [use,setUse] = useState(0)

let hendle=()=>{
setUse(use+1)
}
let hendle2=()=>{

    if(use == 0){
        alert("No Decrement!")
    }else{
        setUse(use-1)
    }
}
  return (
    <>
     <button onClick={hendle}>increment</button>
     <p>{use}</p>
     <button onClick={hendle2}>dicriment</button>

    </>
  )
}

export default App3
