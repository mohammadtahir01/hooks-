import { useContext } from "react";
import { MyContext } from "./usercontext";
const Cybrom=({children})=>{
    const{name}=useContext(MyContext)
    return(
        <>
        <h1>Welcome to bhopal: {name}</h1>
        {children}
        </>
    )
}
export default Cybrom;