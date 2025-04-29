import {useRef} from 'react';

export default function Scroll2(){
    const useref5 = useRef(null);

    const scrollToIndex=(index)=>{
     const node1list = useref5.current;
     const nodeimg1 = node1list.querySelectorAll('li > img').item(index);
     nodeimg1.scrollIntoView({
        behavior:'smooth',
        block:'nearest',
        inline:'center',
     });
    }
    return(
        <>
        <nav >
            <button onClick={() => scrollToIndex(0) }>Cat1</button>
            <button onClick={() => scrollToIndex(1) }>Cat2</button>
            <button onClick={() => scrollToIndex(2) }>Cat3</button>
        </nav>
        <div style={{ display:'flex',overflowX: 'scroll', whiteSpace: 'nowrap', width: '300px', border: '1px solid black'}}>
        <ul ref={useref5} style={{display: 'flex', listStyle: 'none', padding: 0, margin: 0}}>
            <li><img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Dog" /></li>
            <li><img src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Dog2" /></li>
            <li><img src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Dog3" /></li>
        </ul>
        </div>
        </>
    )
}