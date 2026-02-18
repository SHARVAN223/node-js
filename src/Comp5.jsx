import { useContext } from "react";
import { MyContext } from "./App";

const Comp5 = () => {
    const user = useContext(MyContext);

    return (
        <>
            <h2>Comp5 User: {user}</h2>
        </>
    )
}

export default Comp5;
