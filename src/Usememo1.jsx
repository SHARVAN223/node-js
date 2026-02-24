import { useState ,useMemo } from "react"

const Usememo1 =()=>{
    const [num, setNum] = useState(0);
    const [txtVal,setTxtVal] = useState("");

    const heightCompute=()=>{
        for(var i=0; i<=10000000000; i++){}
        return num*2
    }
    const mymulti= useMemo(heightCompute,[num])

    return (
        <>
            <h1>Welcome</h1>
            Select Number: <input value={num} type="number" onChange={(e) =>{setNum(e.target.value)}} />
            Select Message: <input value={txtVal} type="text" onChange={(e) =>{setTxtVal(e.target.value)}} />
            <br></br>
            <h1>My Compute: {mymulti}</h1>
        </>
    )
}

export default Usememo1