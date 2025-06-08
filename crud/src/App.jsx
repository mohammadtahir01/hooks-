import axios from "axios";
import { useState } from "react"


function App() {
  const [input,setInput] = useState({});

  const handle=(e)=>{
    let naam = e.target.name;
    let val = e.target.value;

    setInput(pre=>({...pre,[naam]:val}));
    console.log(input)
  }
  let sub=async()=>{
    let api1 = "http://localhost:3000/Hotel";
    let res = await axios.post(api1,input);
    alert("data inserted!!")
  }

  return (
    <>
      <h1>Form Fill up</h1>
      Enter Name:<input type="text" name="name" onChange={handle} />
      Enter Age:<input type="text" name="age"   onChange={handle} />
      Enter City:<input type="text" name="city" onChange={handle} />
      Enter Roll:<input type="text" name="roll" onChange={handle}/>
      <button onClick={sub}>Click</button>
    </>
  )
}

export default App
