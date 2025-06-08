
import { useEffect, useState } from "react";
import axios from "axios";

const Update=()=>{
    const [input,setInput] = useState([]);

    const onload=async()=>{
        let ap1 = "http://localhost:3000/Hotel"
        let res = await axios.get(ap1);
        console.log(res.data);
        setInput(res.data);
    }

    useEffect(()=>{
        onload();
    },[]);

    const Del=async(id)=>{
        let ap1 = `http://localhost:3000/Hotel/${id}`
        let res = await axios.delete(ap1);
        alert("data has deleted!!");
        onload();
    }

    let Data1=input.map((key1)=>{
        return(
            <>
            <tr>
                <td>{key1.Name}</td>
                <td>{key1.Address}</td>
                <td>{key1.Addhar}</td>
                <td>{key1.Mobile}</td>
                <td><button>edit</button></td>
                <td><button onClick={()=>Del(key1.id)}>Delete</button></td>
            </tr>
            </>
        )
    })

    return(
        <>
        <table border="1" width="500px">
            <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Addhar No</th>
                <th>Mobile No</th>
            </tr>
            </thead>
            <tbody>{Data1}</tbody>
        </table>
        </>
    )
}
export default Update;