import { useState } from "react";
import axios from "axios";




const Insert=()=>{
    const [inp,setInp] = useState({});

    const handle=(e)=>{
        let naam = e.target.name;
        let val = e.target.value;
        setInp(prev=>({...prev,[naam]:val}));
        console.log(inp)
    }

    let sub1=async()=>{
        let ap = "http://localhost:3000/student";
        let res = await axios.post(ap,inp);
        alert("Data inserted!!")

    }

    return(
        <>
        <h1>Insert Pages</h1>
        Enter Name: <input type="text" name="Name" onChange={handle} />
        Enter Roll: <input type="text" name="Roll" onChange={handle}/>
        Enter City: <input type="text" name="City" onChange={handle}/>
        Enter Age: <input type="text" name="Age" onChange={handle}/>
        <button onClick={sub1}>Submit</button>
        </>
    )
}
export default Insert