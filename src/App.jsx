// const App = () => {

//   const myName =(nm,e)=>{
//     console.log(nm)
//     console.log(e.type)
//   }
//   return (
//     <>
//        <button onClick={(e)=>{myName("sharvan",e)}}>Click Here</button>
//     </>
//   )
// }
 
// export default App;


// const App = () => {

//   const myName =(nm)=>{
//     console.log(nm)
    
//   }
//   return (
//     <>
//       <button onClick={myName}>Click </button>
//     </>
//   )
// }
 
// export default App;





// const App = () => {

//   const myName =(nm)=>{
//     console.log(nm)
//     console.log(nm.target)
//     console.log(nm.target.name)
//     console.log(nm.target.value)

//     console.log(nm.target.type)


//   }
//   return (
//     <>
//       <button name="btn1" value="mybtn" type="btntype" onClick={myName}>Click </button>
//     </>
//   )
// }
 
// export default App;




const App = () => {

  const myName =(nm)=>{
    console.log(nm.target.name)
    console.log(nm.target.value)
  }
  return (
    <>
      Enter Name :<input type="text" name="name" onChange={myName}></input> <br/>
      
      Enter City : <input type="text" name="city" onChange={myName}></input>   <br/>
      <button>Click</button>
    </>
  )
}
 
export default App;