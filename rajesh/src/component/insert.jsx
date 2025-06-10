import axios from "axios";
import { useState } from "react";




function Insert() {
  const [sendData,SetsendData] = useState({})


  let handle=(e)=>{
     let naam = e.target.name;
     let val = e.target.value;
     SetsendData(values=>({...values,[naam]:val}))
     console.log(sendData);
  }

  let sub1=async()=>{
    let api = "http://localhost:3000/Laptop";
    let res = await axios.post(api,sendData);
    alert("Data has send")
  }
  return (
    <>
    <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
     <h1>Insert Value</h1>
     Enter Laptop:<input type="text" name="LaptopName" onChange={handle}/>
     Enter Model:<input type="text" name="Model" onChange={handle}/>
     Enter Price:<input type="text" name="Price" onChange={handle}/>
     <button onClick={sub1}>Send Data</button>
     </div>
    </>
  )
}

export default Insert
