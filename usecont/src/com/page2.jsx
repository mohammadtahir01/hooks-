import Page3 from "./page3";
import { UserContext } from "../App";
import { useContext } from "react";

const Page2=()=>{
    const {use} = useContext(UserContext);
    return(
        <>
         <h1>Page2:{use}</h1>
         <Page3/>
        </>
    )
}
export default Page2;