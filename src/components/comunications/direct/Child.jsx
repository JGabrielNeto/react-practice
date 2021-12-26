import React from "react";

export const Child = (props) =>
<div>
    <h3>Children Component {props.count}</h3>
    <p>{props.children} {props.surname}</p>
</div>