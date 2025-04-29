import {useContext} from 'react'
import {UserContext} from '../App'
import { User1Context } from '../App'


export default function ChildC() {
    const user = useContext(UserContext)
    const {user1,setUser1} = useContext(User1Context);
    
    let handle=()=>{

        if(user1 === 'grey'){
            setUser1('white');
        }else{
            setUser1('grey');
        }
    
    }
    
    return(
        <>
          <p>{user1}</p>
          <button onClick={handle}>Click me?</button>
          HELLO:{user.Name}
        </>
    
    )
}