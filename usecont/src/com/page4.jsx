import { UserContext } from "../App";
import { useContext } from "react";


const Page4=()=>{
    const {use} = useContext(UserContext);
    return(
        <>
         <h1>Page4:{use}</h1>
        
        </>
    )
}
export default Page4;