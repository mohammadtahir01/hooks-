import {useState,useEffect} from 'react'

export default function Set2(){
    const [con , setCon] = useState(0);
    const [conut3, setCount3] = useState(0);

    useEffect(()=>{
     console.log("function excuted:",conut3)
    },[conut3])

    useEffect(()=>{
        const inter = setInterval(() => {
            setCon((current1)=>current1+1);
        }, 1000);
    
        return()=> clearInterval(inter);
    },[])
    

    return(
        <div>
          <p>Second:{con}</p>
        </div>
    )
}