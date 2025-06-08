import axios from "axios";
import { useState } from "react";

const Insert1=()=>{
    const [imp,setImp] = useState({});

    const update=(e)=>{
        let nam = e.target.name;
        let val1 = e.target.value;
        setImp(prev1=>({...prev1,[nam]:val1}))
        console.log(imp);
    }

    const btn=async()=>{
        let url = "http://localhost:3000/Hotel"
        let res = await axios.post(url,imp);
        alert("data inserted!!")
    }

    return(
        <>
        <h1>Full fil the form</h1>
        <div style={{display:"flex",flexDirection:"column", width:"20%"}}>
        Enter Name: <input type="text" name="Name" onChange={update} />
        Enter Add: <input type="text" name="Address" onChange={update} />
        Enter Addhar: <input type="text" name="Addhar" onChange={update} />
        Enter Mobile No: <input type="text" name="Mobile" onChange={update} />
        <button onClick={btn}>SUBMIT</button>
        </div>
        </>
    )
}
export default Insert1;