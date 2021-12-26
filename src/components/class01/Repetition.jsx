import React from "react";
import { Products } from "../data/Products";

export const Repetition = (props) => {
    function getProductList() {
        return Products.map(prod => {
            return <li key={prod.id}>{prod.id} - {prod.name} - $ {prod.price}</li>
        }); 
    }
    return (
        <div>
            <h2>Repetition</h2>
            <ul>
                {getProductList()}
            </ul>
        </div> 
    )
}