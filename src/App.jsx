// import { useDispatch, useSelector } from "react-redux";
// import { Decrement,Increment } from "./CounterSlice";

// const App=()=>{
//   const myval = useSelector(state=>state.mycounter.count);
//   const dispatch = useDispatch();
//   return (
//     <>
//     <h1>welcome app</h1>
//     <button onClick={()=>{dispatch(Increment())}}>Increment</button>
//     <h1>{myval}</h1>
//     <button onClick={()=>{dispatch(Decrement())}}>Decrement</button>
//     </>
//   )
// }
// export default App;


import { useSelector , useDispatch } from "react-redux"
import { colorChange } from "./colorSlice"
const App =()=>{
  const myclr = useSelector(state=>state.mycolor.color);
   const dispatch = useDispatch()
  return (
    <>
    <h1>Welcome</h1>
    <button onClick={()=>{dispatch(colorChange())}}>Click here</button>
    <div style={{width:"300px", height:"300px",backgroundColor:myclr}}></div>
    </>
  )
}

export default App;