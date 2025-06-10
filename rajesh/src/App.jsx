import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout"
import Home from "./component/home"
import Dispaly from "./component/display"
import Insert from "./component/insert"
import Search from "./component/search"
import Update from "./component/update"


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="display" element={<Dispaly/>}/>
      <Route path="insert" element={<Insert/>}/>
      <Route path="search" element={<Search/>}/>
      <Route path="update" element={<Update/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
