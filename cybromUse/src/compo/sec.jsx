
import { useState } from "react";

const Sec = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    console.log({ name: name, city: city }); 
  };

  return (
    <>

    <h1>Application Form</h1>
    Enter name : <input type="text" value={name}  onChange={(e) => {
    setName(e.target.value)
  }}/>
     <br />
     Enter city : <input type="text"  value={city}  onChange={(e) => {
    setCity(e.target.value)
  }} />

      <button onClick={handleSubmit}>Click!</button> 
    </>
  );
};

export default Sec;