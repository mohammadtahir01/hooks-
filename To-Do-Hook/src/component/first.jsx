import { useState } from "react"



function First() {

    const [use,Setuse] = useState([]);
    const [use2,Setuse2] = useState("");

   let update=(e)=>{
     Setuse2(e.target.value);
     
   }
   let hendle=()=>{
    Setuse([...use,use2]);
    Setuse2("")
   }


  return (
    <>
    <input type="text"  placeholder="write something here..." value={use2} onChange={update}/>
    <button onClick={hendle}>click here</button>

    <ul>
        {
            use.map((item)=>(
                <li>{item}</li>
            ))
        }
    </ul>
    </>
  )
}

export default First
