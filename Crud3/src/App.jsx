import {BrowserRouter , Routes,Route} from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Insert from "./pages/insert";
import Contact from "./pages/contact";
import Display from "./pages/display";
import Update from "./pages/update";
import Search from "./pages/search";
import Editt from "./pages/edit";

const App=()=>{
  return(
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="insert" element={<Insert/>}/>
    <Route path="display" element={<Display/>}/>
    <Route path="update" element={<Update/>}/>
    <Route path="search" element={<Search/>}/>
    <Route path="edit/:id" element={<Editt/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}
export default App;