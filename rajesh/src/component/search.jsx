import axios from "axios"
import { useState } from "react"




function Search() {
  const [searchh,setSearchh] = useState("") // usestate using for search
  const [showData,setShowData] = useState([]); //useState using for showing the data

  const sear=async()=>{
    let ap = `http://localhost:3000/Laptop/?Model=${searchh}`
    let res = await axios.get(ap);
    setShowData(res.data)
  }

  let ans = showData.map((key)=>{
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
  const searching=(e)=>{
    setSearchh(e.target.value)
  }

  return (
    <>
     <h1>Search Data Here</h1>
     Enter Id: <input type="text" value={searchh} name="Model" onChange={searching}/>
     <button onClick={sear}>SearchData</button>

     <table>
      <thead>
        <tr>
          <th>LaptopName</th>
          <th>Model</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{ans}</tbody>
     </table>
    </>
  )
}

export default Search
