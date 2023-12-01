import React, { useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const incrementCounterFunction = () => {
    console.log("increment clicked");
    setCount(count + 1);
    console.log(count);
  };
  const decrementCounterFunction = () => {
    console.log("increment clicked");
    setCount(count - 1);
    console.log(count);
  };
  const [count, setCount] = useState(0);
  return (
    <div className="Counter">
      <span className="count">{count}</span>
      <div>
        <button
          className="counterButton"
          onClick={() => incrementCounterFunction()}
        >
          +1
        </button>
        <button
          className="counterButton"
          onClick={() => decrementCounterFunction()}
        >
          -1
        </button>
      </div>
    </div>
  );
};
