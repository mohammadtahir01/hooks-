import { useState } from "react"
import Com1 from "./component/compon";

//props driling
function App() {
  const [user,setUser] = useState("Tahir");

  return (
    <>
      <h1>Welcome {user}</h1>
      <Com1 unm={user}/>
    </>
  )
}

export default App


