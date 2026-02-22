import { useContext, useState } from "react"
import { UserLogin } from "./LoginContext"



const UnAuth =()=>{
    const [txtval , setTxtval] = useState("")
    const {login} = useContext(UserLogin)
    return (
        <>
        <h1>Unauth app</h1>
        Enter name :<input type="text" value={txtval} onChange={(e)=>{setTxtval(e.target.value)}} />
        <button onClick={()=>{login(txtval)}}>Login</button>
        </>
    )
}

export default UnAuth