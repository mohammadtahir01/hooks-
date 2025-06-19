import { useContext } from "react";
import { MyContext } from "./App";
const Bhopal=()=>{
    const{user,setUser}=useContext(MyContext)
    return(
        <>
        <h1>Welcome to bhopal: {user}</h1>
        <button onClick={()=>{setUser("Prinshu")}}>Click Here</button>
        </>
    )
}
export default Bhopal;