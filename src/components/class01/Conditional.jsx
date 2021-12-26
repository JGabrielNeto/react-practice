import React from "react";
import {If} from "./If";

export const Conditional = (props) => {
    return (
        <div>
            <h2>{props.number} is even or odd?</h2>
            <If test={props.number % 2 === 0}><span>Even</span></If>
            <If test={props.number % 2 === 1}><span>Odd</span></If>
        </div>
    )
}
