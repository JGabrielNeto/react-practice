import React from "react";
import { useState } from "react";

export const Input = (props) => {
    const [name, setName] = useState('Change me!')
    return (
        <>
            <h3>{name}</h3>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </>
    )
}