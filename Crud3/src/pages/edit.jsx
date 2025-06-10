import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Editt=()=>{
    const [mydata,setMydata] = useState({});
    const {id} = useParams();

    const dataload=async()=>{
        let api=`http://localhost:3000/student/${id}`;
        let res = await axios.get(api);
        setMydata(res.data);
    }

    useEffect(()=>{
        dataload();
    },[])

    let handleInp=(e)=>{
       let naam = e.target.name;
       let val = e.target.value;
       setMydata(values=>({...values,[naam]:val}))
       console.log(mydata);
    }

    let handlesub=async()=>{
        let ap =`http://localhost:3000/student/${id}`;
        let response = await axios.put(ap,mydata);
        alert("data")
    }


    return(
        <>
        <h1>helo{id}</h1>
        <input type="text" name="Name" value={mydata.Name} onChange={handleInp}/>
        <input type="text" name="Roll" value={mydata.Roll} onChange={handleInp} />
        <input type="text" name="City" value={mydata.City} onChange={handleInp} />
        <input type="text" name="Age" value={mydata.Age} onChange={handleInp} />
        <button onClick={handlesub}>Save data</button>
        </>
    )
}
export default Editt;