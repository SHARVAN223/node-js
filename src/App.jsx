// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./pages/Home";
// import Insert from "./pages/Insert";
// import Display from "./pages/Display";
// import Search from "./pages/Search.jsx";
// import Update from "./pages/Update.jsx";
// import MyEdit from "./MyEdit.jsx";

import Collage from "./Collage"
import MyContext from "./MyContext"




// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />} >
//             <Route index element={<Home />} />
//             <Route path="home" element={<Home />} />
//             <Route path="insert" element={<Insert />} />
//             <Route path="display" element={<Display />} />
//             <Route path="update" element={<Update />} />
//             <Route path="myedit/:id" element={<MyEdit />} />
//             <Route path="search" element={<Search />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }
// export default App;



// import { useState , createContext } from "react"
// import Comp1 from "./comp1"


// const UserContext = createContext()
// const App= ()=>{
//   const [user , SetUser] = useState("sharvan")
//   return(
//     <>
//     <h2>This is app: {user}</h2>
//      <UserContext.Provider value={user}>
//         <Comp1/>
//      </UserContext.Provider>
      
   
//     </>
//   )
// }

// export default App
// export {UserContext}


const App =() =>{
  return (
    <>
    <h1>Welcome to app:</h1>
    <MyContext>
      <Collage/>
    </MyContext>
   
    </>
  )
}

export default App