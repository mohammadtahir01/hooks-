import {useState,useMemo} from 'react'

export default function Memo(){
    let [count1,setCount1] = useState(0);
    let [use,setUse] = useState(0);

    let handle=(num)=>{
        for(let i=0; i<1000000000; ++i){}
            return num*2;
    
    }

    let double = useMemo(()=> handle(use),[use]);
    return(
        <div>
            <button onClick={()=> setCount1(count1+1)}>increase</button>
            <p>Count:{count1}</p>
            <input type="number" 
            value={use}
            onChange={(e)=> setUse(e.target.value)} />
            <p>{double}</p>
        </div>                                      
    )
}