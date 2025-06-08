import { useState,useEffect } from "react";
import axios from "axios";

const Display=()=>{
  const[mydata,setMydata] = useState([]);

  const loadData = async()=>{
    let api="http://localhost:3000/student";
    const response = await axios.get(api)
    console.log(response.data);
    setMydata(response.data)
  }

  useEffect(()=>{
    loadData();
  },[])
  
  const ans=mydata.map((key)=>{
    return(
      <>
       <tr>
        <td>{key.Name}</td>
        <td>{key.Roll}</td>
        <td>{key.City}</td>
        <td>{key.Age}</td>
       </tr>
      </>
    )
  })
    return(
        <>
          <h3>Our data</h3>
          <hr />
          <table border="1" width="500px">
            <tr>
              <th>Name</th>
              <th>Roll</th>
              <th>City</th>
              <th>Age</th>
            </tr>
            {ans}
          </table>
        </>
    )
}
export default Display;