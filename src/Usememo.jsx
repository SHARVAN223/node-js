import { useState , useMemo } from "react"

const UseMemo =()=>{
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(100)

 const MyCalulation = ()=>{
      console.log("****");
      return add*2
    }

    const mymulti= useMemo(MyCalulation,[add])
  
  return (
    <>
      <h1>Welcome</h1>
      <button onClick={()=>{setAdd(add+1)}}>Addition</button>
      <button onClick={()=>{setSub(sub-1)}}>Substraction</button>
      <h2>My Addition : {add}</h2>
      <h2>My Substraction:{sub}</h2>
      <h1>My multi : {mymulti}</h1>
    </>
  )
}

export default UseMemo;