import { useParams } from "react-router-dom";

const Editt=()=>{
    const {id} = useParams();
    return(
        <>
        <h1>helo{id}</h1>
        <input type="text" placeholder="enter id" />
        </>
    )
}
export default Editt;