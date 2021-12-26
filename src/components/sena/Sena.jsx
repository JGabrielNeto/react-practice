import React from "react";
import { useState } from "react";

export const Sena = (props) => {
    const [numbers, setNumbers] = useState(Array(props.nums).fill(0))
    
    function generateUncontainedNumbers(array) {
        const newNumber = parseInt(Math.random() * (60 - 1)) + 1;
        return array.includes(newNumber) ? generateUncontainedNumbers(array) : newNumber
    }

    function generateNumbers() {
        const newArray =  Array(props.nums)
        .fill(0)
        .reduce(a => [...a, generateUncontainedNumbers(a)], [])
        .sort((a, b) => a-b)
        setNumbers(newArray)
    }

    return (
    <>
        <h3>Sena</h3>
        <h4>{numbers.join(" - ")}</h4>
        <button onClick={generateNumbers}>Generate Numbers</button>
    </>
    )
}