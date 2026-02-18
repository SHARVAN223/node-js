import axios from "axios";
import { useEffect } from "react"
import { useParams , useState} from "react-router-dom"


const MyEdit  =() =>{
    const [mydata , setMydata] = useState({});
    const{id} = useParams();
    const loadData = async()=>{
        let api = `http://localhost:3000/data/${id}`;
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
    }
    useEffect(()=>{
        loadData();
    },[]);

const handleInput=(e) =>{
    let Name = e.target.name;
    let value = e.target.value;
    setMydata(values=>({...values,[name]:value}));
}

const handleSumbit = async() =>{
   let api = `http://localhost:3000/data/${id}`;
   const response = awaitaxios.put(api,mydata);
   alert("data update !!")
}
    return (
        <>
        <h1> Edit page :{id}</h1>
        Enter Name : <input type = 'text' name="name" value ={mydata.name} onChange={{handleInput}} />
        <br/>
        Enter Roll no : <input type = 'text' name="name" value ={mydata.rollno} onChange={{handleInput}} />
        <br/>
        Enter City : <input type = 'text' name="name" value ={mydata.city} onChange={{handleInput}} />
        <br/>
        Enter Age : <input type = 'text' name="name" value ={mydata.age} onChange={{handleInput}} />
        <br/>
        <button onClick={handleSumbit}>Update</button>
        </>
    )
}


export default MyEdit
