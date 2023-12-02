import React, { useState } from "react";
import "./TodoApp.css";

export const TodoApp = () => {
  return (
    <div className="TodoApp">
      Todo Management Application
      <LoginComponent />
      {/* <WelcomeComponent /> */}
    </div>
  );
};

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="Login">
      <div className="LoginForm">
        <div className="field">
          <label>User Name: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="field">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="button" name="login">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

const WelcomeComponent = () => {
  return <div className="Welcome">Welcome Component</div>;
};
