import React, { useState } from "react";
import "./Counter.css";
import CounterButton from "./CounterButton";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCounterParentFunction = (by) => {
    setCount(count + by);
  };

  const decrementCounterParentFunction = (by) => {
    setCount(count - by);
  };

  return (
    <div>
      <span className="count">{count}</span>
      <CounterButton
        by={1}
        incrementMethod={() => incrementCounterParentFunction(1)}
        decrementMethod={() => decrementCounterParentFunction(1)}
      />
      <CounterButton
        by={2}
        incrementMethod={() => incrementCounterParentFunction(2)}
        decrementMethod={() => decrementCounterParentFunction(2)}
      />
      <CounterButton
        by={5}
        incrementMethod={() => incrementCounterParentFunction(5)}
        decrementMethod={() => decrementCounterParentFunction(5)}
      />
    </div>
  );
};
