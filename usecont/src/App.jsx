import { useState,createContext } from "react"
import Page1 from "./com/page1"

const UserContext = createContext();

function App() {
  const [use,setUse] = useState("tahir")
  
  return (
    <>
     <h1>hello:{use}</h1>
     <UserContext.Provider value={{use}}>
      <Page1/>
     </UserContext.Provider>
     
    </>
  )
}

export default App;
export {UserContext};
