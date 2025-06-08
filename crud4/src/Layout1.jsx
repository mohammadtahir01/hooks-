import { Outlet,Link } from "react-router-dom";
import Footer from "./page/footer";
const Layout1=()=>{
    return(
        <>
        <Link to="home">Home</Link> |
        <Link to="insert">Insert</Link> |
        <Link to="display">Display</Link> |
        <Link to="update">Update</Link> |
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout1;