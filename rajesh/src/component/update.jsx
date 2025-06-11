import axios from "axios";
import { useEffect, useState } from "react"

function Update() {
  const [upadate,setUpdate] = useState([]);

const DataUp=async()=>{
  let  ap = "http://localhost:3000/Laptop";
  let res = await axios.get(ap);
  console.log(res.data);
  setUpdate(res.data);
}
useEffect(()=>{
  DataUp();
},[]);

const del=async(id)=>{
  let ap = `http://localhost:3000/Laptop/${id}`;
  let res = await axios.delete(ap);
  alert("Data has deleted");
  DataUp();
}

let ans = upadate.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.LaptopName}</td>
      <td>{key.Model}</td>
      <td>{key.Price}</td>
      <td><button>Edit</button></td>
      <td><button onClick={()=>del(key.id)}>Delete</button></td>
    </tr>
    </>
  )
})

  return (
    <>
     <h1>Updateed Data</h1>
     <table border="1" width="400px">
      <thead>
        <tr>
          <th>Laptop</th>
          <th>Model</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{ans}</tbody>
     </table>
    </>
  )
}

export default Update
