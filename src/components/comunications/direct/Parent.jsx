import React from "react";
import { Child } from "./Child";

export const Parent = (props) =>
<div>
    <Child surname={props.surname} count="2">Gabriel</Child>
    <Child surname={props.surname} count="3">Luinha</Child>
</div>