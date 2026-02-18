
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const MyEdit = () => {
//     const [mydata, setMydata] = useState({});
//     const { id } = useParams();
//     const loadData = async () => {
//         let api = `http://localhost:3000/data/${id}`;
//         const response = await axios.get(api);
//         console.log(response.data);
//         setMydata(response.data)
//     }
//     useEffect(() => {
//         loadData();
//     }, []);

//     const handleInput = (e) => {
//         let name = e.target.name;
//         let value = e.target.value;

//         setMydata(values => ({ ...values, [name]: value }));

//     }

//     const handleSumbit = async () => {
//         let api = `http://localhost:3000/data/${id}`;
//        const respose = await axios.put(api, mydata);
//         alert("data update !!")
//     }
//     return (
//         <>
//             <h1> Edit page :{id}</h1>
//             Enter Name : <input type='text' name="name" value={mydata.name} onChange={handleInput}/>
//             <br />
//             Enter Roll no : <input type='text' name="rollno" value={mydata.rollno} onChange={handleInput}/>
//             <br />
//             Enter City : <input type='text' name="city" value={mydata.city} onChange={handleInput} />
//             <br />
//             Enter Age : <input type='text' name="age" value={mydata.age} onChange={handleInput} />
//             <br />
//             <button onClick={handleSumbit}>Update</button>
//         </>
//     )
// }


// export default MyEdit;
