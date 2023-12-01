import React, { useState } from "react";
import "./Counter.css";

export const Counter = ({ by }) => {
  const [count, setCount] = useState(0);

  const incrementCounterFunction = () => {
    console.log("increment clicked");
    setCount(count + parseInt(by, 10));
    console.log(count);
  };
  const decrementCounterFunction = () => {
    console.log("increment clicked");
    setCount(count - by);
    console.log(count);
  };

  console.log("by = ", parseInt(by, 10));

  return (
    <div className="Counter">
      <span className="count">{count}</span>
      <div>
        <button
          className="counterButton"
          onClick={() => incrementCounterFunction()}
        >
          +{by}
        </button>
        <button
          className="counterButton"
          onClick={() => decrementCounterFunction()}
        >
          -{by}
        </button>
      </div>
    </div>
  );
};
