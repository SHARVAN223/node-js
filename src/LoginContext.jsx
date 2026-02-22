import { useState ,createContext } from "react"

const UserLogin = createContext()
const LoginContext =({Children})=>{
    const [user,setUser]  = useState({name:"",auth:false});
    const Login =(nm)=>{
        setUser({name:nm, auth:true})
    }
    const Logout =()=>{
        setUser({name:"", auth:false})
    }
    return (
        <>
        <UserLogin.Provider value={{Login,Logout,user}}>
            {Children}
        </UserLogin.Provider>
        </>
    )
}

export default LoginContext
export {UserLogin}