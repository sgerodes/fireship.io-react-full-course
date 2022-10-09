import React, { useContext, createContext, useState } from 'react';

/*
    Create CountContext and CountProvider that uses { count, setCount } as its values.
    This will allow the count and setCount function to be passed to any of its {children} in the tree.
    Create 2 components Count and CountButton that can each call useContext(CountContext) to update the count
    and display the current count value.
 */

const CountContext = createContext();

function CountProvider() {
    const [count, setCount] = useState(0);
    return (
        <CountContext.Provider value={{ count, setCount }}>
            <Count />
            <CountButton />
        </CountContext.Provider>
    )
}

function Count() {
    const {count} = useContext(CountContext);
    return <h3>{`Current count: ${count}`}</h3>
}

function CountButton() {
    const { setCount } = useContext(CountContext)
    return (
        <button onClick={() => setCount((count) => count + 1)}>
            Increment
        </button>
    );
}

export default CountProvider;
