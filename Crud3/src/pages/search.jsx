import axios from "axios";
import { useState } from "react";

const Search = () => {
  const [sudent, setStudent] = useState("");
  const [mydata, setMydata] = useState([]);

  const handle = async () => {
    let ap = `http://localhost:3000/student/?Name=${sudent}`;
    let res = await axios.get(ap);
    setMydata(res.data);
  };

  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td>{key.Name}</td>
          <td>{key.Roll}</td>
          <td>{key.City}</td>
          <td>{key.Age}</td>
        </tr>
      </>
    );
  });

  return (
    <>
      <h1>Search</h1>
      enter employee:
      <input type="text" value={sudent} onChange={(e) => { setStudent(e.target.value)}}/>
      <button onClick={handle}>Search</button>
      <hr />
      <table>
        <tr>
        <th>Name</th>
        <th>Roll</th>
        <th>City</th>
        <th>Age</th>
        </tr>
        {ans}
      </table>
    </>
  );
};
export default Search;
