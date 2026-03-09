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
import { addTask } from "./TodoSlice";
import { useState } from "react";
const App =()=>{
  const [txtval,setTxtVal] = useState("");
  const task = useSelector(state=>state.Todo.task);
  const dispatch = useDispatch()
  console.log(task)
  let sno=0;
  const ans = task.map((key)=>{
    sno++;
    return (
    <>
    <h1>Welcome App</h1>
    <tr>
      <td>{sno}</td>
      <td>{key.work}</td>
    </tr>
    </>
  )
  })
  return (
    <>
    <h1>To Do App</h1>
    Enter Task : <input type="" value={txtval} onChange={(e)=>{setTxtVal(e.target.value)}}/>
    <button onClick={()=>{dispatch(addTask({work:txtval}))}}></button>
    <hr/>
    <table>
      <tr>
        <th>SNO.</th>
        <th>Your Task</th>
      </tr>
      {ans}
    </table>
    </>
  )
}

export default App;









