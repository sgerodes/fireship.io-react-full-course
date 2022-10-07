import React, { useState } from 'react';


function Stateful() {
    const [counter, setCounter] = useState(0);
    const [prevCounter, setPrevCounter] = useState(0);

    const handleClick = () => {
        setPrevCounter(counter);
        setCounter(counter + 1);
    }

    return (
        <>
            <h3>Current count: {counter}</h3>
            <h3>Previous count: {prevCounter}</h3>
            <button onClick={handleClick}>Increment</button>
        </>
    )
}

export default Stateful;
