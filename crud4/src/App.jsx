import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout1 from "./Layout1";
import Home from "./page/home";
import Insert1 from "./page/insert";
import Update1 from "./page/update";
import Display1 from "./page/display";

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout1/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="insert" element={<Insert1/>}/>
      <Route path="display" element={<Display1/>}/>
      <Route path="update" element={<Update1/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
