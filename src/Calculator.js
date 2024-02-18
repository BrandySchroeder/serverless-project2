import React from "react"; 

export const Calculator = (props) => {
    console.log(props);
    return (
        <h1>{props.numberA} + {props.numberB} = {props.numberA + props.numberB}</h1>

    );

};