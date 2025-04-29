import {useState,useEffect} from 'react';

export default function Setint(){
    const [sec,setSec] = useState(0);
    const [start,setStart] = useState(false)


    useEffect(()=>{
        if (!start) return ;
        const intervalId = setInterval(() => {
            console.log("setInterval excuted");
            setSec(current => current +1);
        }, 1000);
    
        return ()=>{
            console.log("Time to Stop");
            clearInterval(intervalId);
        }
    },[start])
    
    return(
        <div>
          <p>Second:{sec}</p>
          <button onClick={()=> setStart(!start)}>{start ? "Stop" : "Start"}</button>
        </div>
    )
}