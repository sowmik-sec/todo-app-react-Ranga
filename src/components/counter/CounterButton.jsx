import React, { useState } from "react";
import { PropTypes } from "prop-types";

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

export default CounterButton;
