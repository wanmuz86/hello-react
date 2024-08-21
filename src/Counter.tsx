// 1) Import useState from react library
import React, { useState } from 'react';

const Counter: React.FC = () => {

    // Setter = setCount
    // getter/ variable name = count
    // Initial value = 0
    const [count, setCount] = useState(0);

    // Create a variable / getter = message
    // The setter for this variable is setMessage
    // Initial value = ""

    const [message, setMessage] = useState("");

    // Arrow notation function declaration

    // Set the value of count to count (getter) + 1
    const increment = () => {
        setMessage("")
        setCount(count + 1);
    }

    const decrement = () => {
        if (count === 0) {
            setMessage("Number cannot be less than 0");
        } else {
            setCount(count - 1)
        }
    };
    const reset = () => {
        setMessage("");
        setCount(0);
    }

    // JSX part - Calling HTML inside JS/ TS file
    return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <p>{message}</p>
        </div>
    )
};
export default Counter;
