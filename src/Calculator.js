import React from "react"; 

export const Calculator = ({numberA, numberB}) => {
    return (
        <>
            <h2>{numberA} + {numberB} = {numberA + numberB}</h2>
            <h2>{numberA} - {numberB} = {numberA - numberB}</h2>
            <h2>{numberA} * {numberB} = {numberA * numberB}</h2>
            <h2>{numberA} / {numberB} = {numberA / numberB}</h2>
        </>

    );

};