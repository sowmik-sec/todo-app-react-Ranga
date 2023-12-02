import React from "react";

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
  return (
    <div className="Login">
      <div className="LoginForm">
        <div>
          <label>User Name: </label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" />
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
