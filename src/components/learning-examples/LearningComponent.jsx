import React from "react";
import { FifthComponent, FirstComponent } from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import { ThirdComponent } from "./ThirdComponent";
import { FourthComponent } from "./FourthComponent";

export const LearningComponent = () => {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <FifthComponent />
    </div>
  );
};
