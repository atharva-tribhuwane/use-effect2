import React from "react";
import { useState } from "react";


const Groceryinput=()=>{

    const [item,setItem] = useState("");

    const postdata = () =>{
        const data = {
            "task":item,
            "isCompleted":false
        }

        fetch(`http://localhost:3001/list`,{
            method:"POST",
            body: JSON.stringify(data),
            headers:{
                "Content-type" : "application/json"
            }
        })
          .then((res)=>res.json())
          .then((res)=>console.log(res))
    }
    return(
        <>
        <h1>Enter Items</h1>
        <form onSubmit={(e)=>e.preventDefault()}>
            <input type="text" value={item} onChange={(e)=> setItem(e.target.value)}/>
            <button onClick={postdata}>Submit</button>
        </form>
        </>
    )
}

export default Groceryinput;