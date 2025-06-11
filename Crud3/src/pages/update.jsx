import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; //edit
const Update=()=>{

const navigate = useNavigate();  //edit

const[mydata,setMydata]=useState([]);
const loadData=async()=>{
    let api="http://localhost:3000/student";
    const response = await axios.get(api)
    console.log(response.data);
    setMydata(response.data)
  }

useEffect(()=>{
    loadData();
},[])

const recDelete=async(id)=>{
    const api=`http://localhost:3000/student/${id}`
    const response=await axios.delete(api);
    alert("data successfully deleted");
    loadData();
}

const reEdit=(id)=>{  //edit
  navigate(`/edit/${id}`);
}

let sno=0;
const ans=mydata.map((key)=>{
    sno++;
    return(
      <>
       <tr>
        <td>{sno}</td>
        <td>{key.Name}</td>
        <td>{key.Roll}</td>
        <td>{key.City}</td>
        <td>{key.Age}</td>
        <td>
            <button onClick={()=>reEdit(key.id)}>Edit</button>
        </td>
        <td>
            <button onClick={()=>{recDelete(key.id)}}>Delete</button>
        </td>
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
              <th>Sno</th>
              <th>Name</th>
              <th>Roll</th>
              <th>City</th>
              <th>Age</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {ans}
          </table>
        </>
    )
}
export default Update;