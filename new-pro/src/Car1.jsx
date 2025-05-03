import {useState} from 'react'
import Car2 from './Car2'

export default function Car(){
    let [inputvalue, setInputValue] = useState('')

    let update=(e)=>{
        setInputValue(e.target.value);
    }
    return(
        <div>
            <Car2  
            label="First: "
            value={inputvalue}
            onChange={update}/>
            <p>{inputvalue}</p>
            <Car2 
            label="Second: "
            val1={inputvalue}
            onChange={update}/>
              <p>{inputvalue}</p>
        </div>
    )
}