import Comp2 from "./Comp2";

const Comp1 = ( {user}) =>{
    return(
        <>
        <h2>component 1</h2>
        <Comp2 user ={user}/>
        </>
    )
}

export default Comp1;