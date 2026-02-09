
//  import { useState } from "react"
//  const App =()=>{
//   const[name , setName] = useState("sharvan");

//   const display =()=>{
//     setName('saurabh')
//   }
//   return (
//     <>
//     <h1>Welcome! {name}</h1>
//     <button onClick={display}>click </button>
//     </>
//   )
// }


// // export default App


// import { useState } from "react"
// const App =()=>{
//   const[color , setColor] = useState("red");


//   return (
//     <>
//     <h1 style={{color:color}}>My color! {color}</h1>
//     <button onClick={()=>{setColor("green")}} >green </button>
//     <button onClick={()=>{setColor("blue")}}>blue </button>
//     <button onClick={()=>{setColor("black")}}>black </button>
//     <button onClick={()=>{setColor("yellow")}}>yellow </button>
//     </>
//   )
// }


// export default App



import { useState } from "react"
const App =()=>{
  const[Count , setCount] = useState(0);


  const counter = ()=>{
    if (Count>0){
      setCount(Count-1)
    }else{
      alert("you can not")
    }

  }
  return (
    <>
    <h1>Counter App:</h1>
    <button onClick={()=>{setCount(Count+1)}}>Increment</button>
    <h1>{Count}</h1>
    
    <button onClick={counter}>Decrement</button>
    </>
  )
}

export default App

