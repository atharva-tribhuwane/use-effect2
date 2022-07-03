import React from "react";
import { useState } from "react";
import Groceryinput from "./Groceryinput";
import Grocerylist from "./Grocerylist";
const Grocery=()=>{
    return(
        <>
        <Groceryinput/>
        <Grocerylist/>
        </>
    )
}

export default Grocery;