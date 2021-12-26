import React from "react";
import { SubComp } from "./SubComp";
import { useState } from "react";

export const SuperComp = (props) => {
    const [num, setNum] = useState(0)
    function clicked(value) {
        setNum(parseInt(value*(20 - 0) + 1))
    }

    return ( 
    <div>
        <h4>Roll the D20: {num}</h4>
        <SubComp Clic={clicked}></SubComp>
        
    </div> 
    )
}