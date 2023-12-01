import React, { useState } from "react";
import { PropTypes } from "prop-types";
import "./Counter.css";

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

const CounterButton = ({ by, incrementMethod, decrementMethod }) => {
  const [count, setCount] = useState(0);
  const incrementCounterFunction = () => {
    console.log("increment clicked");
    setCount(count + parseInt(by, 10));
    console.log(count);
    incrementMethod();
  };
  const decrementCounterFunction = () => {
    console.log("increment clicked");
    setCount(count - by);
    console.log(count);
    decrementMethod();
  };

  console.log("by = ", parseInt(by, 10));

  return (
    <div className="Counter">
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

CounterButton.prototype = {
  by: PropTypes.number,
};

CounterButton.defaultProps = {
  by: 1,
};
