import axios from "axios";
import { useEffect, useState } from "react"


function Dispaly() {
    const [Datainp,setDatainp] = useState([]);

    const OnloadData=async()=>{
        let ap = "http://localhost:3000/Laptop";
        let res = await axios.get(ap)
        console.log(res.data);
        setDatainp(res.data)
    }
    useEffect(()=>{
        OnloadData();
    },[])

    let ans = Datainp.map((key)=>{
        return(
            <>
                <tr>
                    <td>{key.LaptopName}</td>
                    <td>{key.Model}</td>
                    <td>{key.Price}</td>
                </tr>
            </>
        )
    })
  return (
    <>
     <h1>Display page</h1>
     <table border="1" width="500px">
        <thead>
            <tr>
                <th>Laptop Name</th>
                <th>Model</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>{ans}</tbody>
     </table>
    </>
  )
}

export default Dispaly
