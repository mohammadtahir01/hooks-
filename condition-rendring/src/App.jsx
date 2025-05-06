
import { useState } from "react";
import LoginBtn from './LoginBtn';
import Logout from './LogOut';

import './App.css'

function App() {
 const [LogIn,setLogIn] = useState(false)

  if(LogIn){
    return(
    <LoginBtn/>
    )
  }else{
    return <Logout/>
  }
 
}

export default App
