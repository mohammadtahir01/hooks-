import {useRef , useState} from 'react'

export default function Useref3(){
    const [value,setValue] = useState(0);
    let ref = useRef(0);
    let update=()=>{
        ref.current = ref.current+1;
        // alert('You Clicked'+ref.current)
        setValue(ref.current);
    }
    return(
        <div>
            <p>{value}</p>
            <button onClick={update}>click</button>

        </div>
    )
}