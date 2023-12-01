import "./App.css";
import { Component } from "react";

function App() {
  return (
    <div className="App">
      <MyFirstComponent />
      <MySecondComponent />
      <MyThirdComponent />
      <MyFourthComponent />
    </div>
  );
}

function MyFirstComponent() {
  return <div className="FirstComponent">First Component</div>;
}

function MySecondComponent() {
  return <div className="SecondComponent">Second Component</div>;
}

class MyThirdComponent extends Component {
  render() {
    return <div className="ThirdComponent">Third Component</div>;
  }
}

class MyFourthComponent extends Component {
  render() {
    return <div className="FourthComponent">Fourth Component</div>;
  }
}

export default App;
