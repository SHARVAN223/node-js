
// import { useState } from "react"
// const App =()=>{
//   const[name,setName] = useState("");
//    const[city,setCity] = useState("");

// const { useState } = require("react")

//  const handleSumbit =() =>{
//   console.log({name:name,city:city})
//  }

//   return (
//     <>
//     <h1>Application form</h1>
//     Enter name:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
//     <br />
//     Enter City:<input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
//     <br />
//     <button onClick={handleSumbit}>Save!!</button>
//     </>
//   )
// }


// export default App


// const App =()=>{
//   const [input , setInput] =useState({});
//   const handleInput =(e) =>{
//     let name = e.target.name
//     let value = e.target.value
//     setInput(values =>({...values,[name]:value}));
//     console.log(input);
//   }
//   return (
//     <>
//     <h1>Application form</h1>
//     Enter name:<input type="text" name ="name" onChange={handleInput}/>
//     <br />
//     Enter City:<input type="text" name ="city" onChange={handleInput}/>
//     <br />
//     Enter RollNo:<input type="text" name = "RollNo" onChange={handleInput}/>
//     <br />
//     Enter age:<input type="text" name = "age" onChange={handleInput}/>
//     <br />

//     <button>Save!!</button>
//     </>
//   )
// }

// export default App


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="insert" element={<Insert />} />
            <Route path="display" element={<Display />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;