import { Outlet, Link } from "react-router-dom";


const Layout=()=>{
    return(
        <>
       <Link to="home">Home</Link> |
       <Link to="contact">Contact</Link> |
       <Link to="insert">Insert</Link> | 
       <Link to="display">Display</Link> |
       <Link to="update">Update</Link>
       <Outlet/>
        </>
    )
}
export default Layout