import { useState } from "react";
import axios from "axios"

const Third = () => {
  const [input, setInput] = useState({});

  const HandleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  let handlesubmit=async()=>{
    let api ="http://localhost:3000/studemt";
    const res = await axios.post(api,input);
    alert("data onsrted");
  }

  return (
    <>
      <h1>Application Form</h1>
      <br />
      Enter Your Rollno :
      <input type="text" name="rollNo" onChange={HandleInput} />
      <br />
      <br />
      Enter Name :
      <input type="text" name="name" onChange={HandleInput} />
      <br />
      <br />
      Enter Mail :
      <input type="text" name="mail" onChange={HandleInput} />
      <br />
      <br />
      Enter City :
      <input type="text" name="city" onChange={HandleInput} />
      <br />
      <br />
      Enter Number :
      <input type="text" name="number" onChange={HandleInput} />
      <br />
      <br />
      <button onClick={handlesubmit}>Click</button>
    </>
  );
};

export default Third;