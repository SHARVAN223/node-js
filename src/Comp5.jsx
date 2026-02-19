import { useContext } from "react";
import { UserContext } from "./App";


const Comp5 = () => {
    const user = useContext(UserContext);

    return (
        <>
            <h2>Comp5 User: {user}</h2>
        </>
    )
}

export default Comp5;
