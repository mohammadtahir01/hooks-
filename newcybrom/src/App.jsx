import { Increment,Decrement } from "./counterSlice"
import { useSelector,useDispatch } from "react-redux"
/// redux toolkit
function App() {
  const cnt = useSelector((state)=>state.mycounter.counter)
  const dispatch = useDispatch();
  return (
    <>
    <h1>helo</h1>
    <button onClick={()=>{dispatch(Increment())}}>Increment</button>
    <h1>{cnt}</h1>
    <button onClick={()=>{dispatch(Decrement())}}>Decrement</button>
    </>
  )
}

export default App
