// import axios from "axios";
// import { useState } from "react";
// const Search=()=>{
//     const[rno,setRno]=useState("");
//     const [mydata,setMydata]=useState([]);
//     const handleSubmit = async()=>{
//         let api =`http://localhost:3000/data/?rollno=${rno}`;
//         const response =await axios.get(api);
//         console.log(response.data);
//         setMydata(response.data);
//     }
//     const ans= mydata.map((key)=>{
//         return(
//             <>
//             <tr>
//                   <td>{key.name}</td>
//                   <td>{key.rollno}</td>
//                   <td>{key.city}</td>
//                   <td>{key.age}</td>

//             </tr>
//             </>
//         )
//     })
//     return(
//         <>
//         <h1>Search Data</h1>
//         Enter Rollno:<input type="text" value={rno} onChange={(e)=>{setRno(e.target.value)}} />
//         <button onClick={handleSubmit}>Search</button>
//         <hr />
//         <table>
//             <tr>
//                <th>Name</th>
//                <th>Rollno</th>
//                <th>City</th>
//                <th>Age</th>
//             </tr>
//             {ans}
//         </table>
//         </>
//     )
// }
// export default Search;