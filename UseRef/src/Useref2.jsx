import {useState, useRef} from "react"

export default function Useref2(){
    let [time,setTime] = useState(0);

let timeref = useRef(null )

    let start=()=>{
       timeref.current = setInterval(() => {
         setTime(time => time+1);   
        }, 1000);

    }

    let stop=()=>{
      clearInterval(timeref.current);
      timeref.current = null;
    }

    let restart=()=>{
      stop();
      setTime(0);
    }
    return(
        <div>
           <p>Second{time}</p>
           <button onClick={start}>Start Now</button>
           <button onClick={stop}>Stop Now</button>
           <button onClick={restart}>Restart</button>
        </div>
    )
}