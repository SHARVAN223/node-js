import { useDispatch, useSelector } from "react-redux";
import { Decrement,Increment } from "./CounterSlice";

const App=()=>{
  const myval = useSelector(state=>state.mycounter.count);
  const dispatch = useDispatch();
  return (
    <>
    <h1>welcome app</h1>
    <button onClick={()=>{dispatch(Increment())}}>Increment</button>
    <h1>{myval}</h1>
    <button onClick={()=>{dispatch(Decrement())}}>Decrement</button>
    </>
  )
}
export default App;