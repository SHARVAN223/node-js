// import Collage from "./Collage"
// import MyContext from "./MyContext"

// import { useContext, useEffect, useRef, useState } from "react";
// import { UserLogin } from "./LoginContext";
// import Auth from "./Auth";
// import UnAuth from "./UnAuth";

// const App =() =>{
//   return (
//     <>
//     <h1>Welcome to app:</h1>
//     <MyContext>
//       <Collage/>
//     </MyContext>
   
//     </>
//   )
// }

// export default App



// const App =()=>{
//   const {user}= useContext(UserLogin);
//     return(
//       <>
//         <h2>App:</h2>
//         {user.auth ? <Auth/>: <UnAuth/>}
//       </>
//     )

// }
// export default App;


//  import { useRef } from "react";
// const App=()=>{
//   const myref = useRef("hjhhh")
//   const myColor=()=>{
//     myref.current.style.color="red"
//   }
//   return (
//     <>
     
//        <h1 ref={myref}>welcome to app</h1>
//        <button onClick={myColor}>Click</button>
//     </>
//   )
// }
// export default App



// import { useState ,useEffect,useRef } from "react";
// const App =()=>{
//   const [inputValue , setInputvalue] = useState("")
//   const count = useRef(0);
//   useEffect(()=>{
//     count.current = count.current+1
//   });
//   return (
//     <>
//       <input type="text" value={inputValue} onChange={(e) =>setInputvalue(e.target.value)}/>  
//       <h1>Render Count:{count.current}</h1>    
//     </>
//   )
// }

// export  default App;


import { useReducer } from "react";

const App = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    switch (action) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>Welcome my program</h2>
      <h3>Count: {count}</h3>

      <button onClick={() => dispatch("INCREMENT")}>
        Increment
      </button>

      <button onClick={() => dispatch("DECREMENT")}>
        Decrement
      </button>
    </>
  );
};

export default App;