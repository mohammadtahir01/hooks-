import { useEffect, useState } from "react"


function App4() {
const [time1,setTime1] = useState(0);
useEffect(()=>{

    setTimeout(() => {
        setTime1(time1+1);
    }, 2000);
})
  return (
    <>
  <h1>welcome:{time1}</h1>
    </>
  )
}

export default App4
