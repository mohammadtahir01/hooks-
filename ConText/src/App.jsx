import { useState } from 'react'
import { createContext } from 'react'
import './App.css'
import ChildA from './context/childC'

// Create a context
export const UserContext = createContext()
export const User1Context = createContext();
// Create a provider component
//

function App() {
  const [user, setUser] = useState({Name:"Tahir"})
  const [user1, setUser1] = useState('grey');

  return (
    <>
  <UserContext.Provider value={user}>
   <User1Context.Provider value={{user1,setUser1}}>
    <div id="btn"  style={{backgroundColor:user1}}>
      <ChildA/>
    </div>
    </User1Context.Provider>
    </UserContext.Provider>
    </>
  )
}

export default App
