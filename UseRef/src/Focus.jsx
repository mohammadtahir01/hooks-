import { useRef } from 'react'

export default function Foucs1(){

    let useref = useRef(null);

    let update=()=>{
        useref.current.focus();
    }
    return(
        <div>
            <input type="text" ref={useref} />
            <button onClick={update}>Fous</button>
        </div>
    )
}