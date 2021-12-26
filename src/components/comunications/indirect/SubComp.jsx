import React from "react";

export const SubComp = (props) => {
    return (
        <div>
            <button onClick={() => {
                props.Clic(Math.random())
                }}>Randomize</button>
        </div>
    )
}