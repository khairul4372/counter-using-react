import React, { useState } from "react";
import "./styles.css";

export default function Home() {
  const [counter, setCounter] = useState(0);

  const increment = (value) => {
    return setCounter(counter + value);
  };

  const decrement = (value) => {
    return setCounter(counter - value);
  };
  const multiply = (value) => {
    return setCounter(counter * value);
  };

  const reset = () => {
    return setCounter(0);
  };

  return (
    <div className="container">
      <h1>React Counter</h1>
      <div className="counter">
        <h2>{counter}</h2>
        <div className="button">
          <div>
            <button onClick={() => increment(1)}>Increment by 1</button>
            <button onClick={() => increment(5)}>Increment by 5</button>
          </div>
          <div>
            <button onClick={() => decrement(1)}>Decrement by 1</button>
            <button onClick={() => decrement(5)}>Decrement by 5</button>
          </div>
          <div>
            <button onClick={() => multiply(5)}>Multifly by 5</button>
            <button onClick={() => multiply(10)}>Multifly by 10</button>
          </div>
          <div>
            <button onClick={reset}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}
