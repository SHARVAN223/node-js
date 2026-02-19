import { useState,createContext } from "react"
const UserContext = createContext();
const MyContext =({children})=>{
    const[name,setName] = useState("sharvan")
    return ( 
        <>
      <UserContext.Provider value={{name ,setName}} >
        {children}
      </UserContext.Provider>
        </>
    )
}

export default MyContext
export{UserContext}