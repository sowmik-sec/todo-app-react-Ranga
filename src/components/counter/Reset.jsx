import React from "react";
import "./Reset.css";
export const Reset = ({ resetCounter }) => {
  return (
    <div>
      <button className="btn-reset" onClick={() => resetCounter()}>
        Reset
      </button>
    </div>
  );
};
