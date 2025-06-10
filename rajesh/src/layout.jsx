import { Link, Outlet } from "react-router-dom"





function Layout() {
  return (
    <>
   <Link to="home" >Home</Link>
   <Link to="display" >Display</Link>
   <Link to="insert" >Insert</Link>
   <Link to="search" >Search</Link>
   <Link to="update" >Update</Link>
   <Outlet/>

    </>
  )
}

export default Layout
