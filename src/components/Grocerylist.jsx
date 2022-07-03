import React from "react";
import { useState } from "react";
const Grocerylist=()=>{

    const [data, setData] = useState([]);

    const displaydata=()=>{
        fetch(`http://localhost:3001/list`)
         .then((res)=>res.json())
         .then((res)=>setData(res))
         .catch((err)=>console.log(err))
    }

    const handledelete = (grocid)=>{
        console.log(grocid)
        fetch(`http://localhost:3001/tasks/${grocid}`,{
            method:"DELETE"
        })
         .then((res)=>{res.json()})
         .then((res)=>console.log(res))
         .catch((err)=>console.log(err))
    }

    React.useEffect(()=>{
      displaydata();
    },[]);

    return(
        <>
        <h1>List: </h1>
        {data.map((groc) => (
        <div style={{display:"flex", width:"50%", border:"1px solid red", justifyContent:"space-between"}}>
        <h1 key={groc.id}>{groc.task}</h1>
        <button onClick={()=>handledelete(groc.id)}>Delete</button>
        </div>
      ))}
        </>
    )
}

export default Grocerylist;