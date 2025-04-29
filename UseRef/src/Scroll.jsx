
import {useRef} from 'react';

export default function Scroll1(){
    let useref1 = useRef(null);

    let scrollToIndex=(index)=>{
     
        const nodelist = useref1.current;
        const nodeimg = nodelist.querySelectorAll('li > img').item(index);
        nodeimg.scrollIntoView({
            behavior:'smooth',
            block:'nearest',
            inline :'center',
        });
    }
    return(
        <>
        <nav>
            <button onClick={()=> scrollToIndex(0)}>neo</button>
            <button onClick={()=> scrollToIndex(1)}>mile</button>
            <button onClick={()=> scrollToIndex(2)}>new</button>
        </nav>
        <div className="id1">
        <ul ref={useref1}  className="ul1">
                <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOlcwWio1JV-OGm8l8PJUxCDtAzYEsVPOew&s" alt="neo" id="img1" /></li>
                <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVTWL4dqk9ZokaiRQe0kdV3_dNvkB7A3xTw&s" alt="mile" id="img1"/></li>
                <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3m4oBUnrk-E-rCQWjB-8JxFTzS7VTXUM0Vg&s" alt="new" id="img1"/></li>
            </ul>
        </div>
        </>
    );
}