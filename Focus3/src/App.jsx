import { useRef } from "react";
import './App.css'

function App() {
  let focusref = useRef(null);

  let focs=()=>{
    focusref.current.focus()
  }
 

  return (
    <>
    <input type="text" ref={focusref} id="" />
     <button onClick={focs}>click</button>
    </>
  )
}

export default App
