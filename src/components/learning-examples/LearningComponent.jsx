import React from "react";
import { FifthComponent, FirstComponent } from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import { ThirdComponent } from "./ThirdComponent";
import { FourthComponent } from "./FourthComponent";

const person = {
  firstName: "Ahsan",
  lastName: "Habib",
  address: {
    road: "Bazar road",
    post: "Bhurungamari",
    zilla: "Kurigram",
  },
  profiles: ["facebook", "twitter", "instagram"],
  printprofile: () => {
    person.profiles.map((profile) => console.log(profile));
    console.log(person.address.zilla);
  },
};

export const LearningComponent = () => {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <FifthComponent />
      <div>
        Name: {person.firstName} {person.lastName}
      </div>
      <div>Address: {person.address.post}</div>
      <div>Social Media: {person.profiles[0]}</div>
      <div>{person.printprofile()}</div>
    </div>
  );
};
