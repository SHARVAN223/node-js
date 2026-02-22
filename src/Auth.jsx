import { useContext } from "react";
import { UserLogin } from "./LoginContext";


const Auth =()=>{
    const {user,Logout} = useContext(UserLogin)
    return (
        <>
           <h1>Auth app</h1>
           <h2>welcome {user.name}</h2>
           <button onClick={Logout}>Logout</button>
        </>
    )
}

export default Auth;