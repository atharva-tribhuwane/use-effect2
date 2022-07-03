import React from "react";
import { useState } from "react";
const Grocerylist=()=>{

    React.useEffect(()=>{
        fetch(`http://localhost:3001/list`)
         .then((res)=>res.json())
         .then((res)=>console.log(res))
    },[])

    return(
        <>
        <h1>GroceryList</h1>
        
        </>
    )
}

export default Grocerylist;