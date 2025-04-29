import {useState,useEffect,useRef} from 'react';
// import './App.css'


function Useref() {
  const [count, setCount] = useState(0)

  let btnRef = useRef();
  // let val = 1;

 //now it is not re-rendring frequently
  let val = useRef(0);
  

  let update=()=>{
    val.current=val.current+1;
    console.log("current value is:",val)
    setCount(count+1);
  }
  useEffect(()=>{
    console.log("We are re-rendring on every click")
  })

  let color1=()=>{
    btnRef.current.style.backgroundColor="red";
  }
  return (
    <>
     <button ref={btnRef} onClick={update}>click me</button>
     <h1>{count}</h1>
     <button onClick={color1}>For Color Change</button>
    </>
  )
}

export default Useref
