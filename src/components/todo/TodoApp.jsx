import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./TodoApp.css";

export const TodoApp = () => {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome" element={<WelcomeComponent />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username === "sowmik" && password === "dummy") {
      setLoggedIn(true);
      navigate("/welcome");
    } else {
      setLoggedIn(false);
    }
  };
  return (
    <div className="Login">
      <h1>Login</h1>
      <div
        className={`successMessage ${
          loggedIn === true ? "d-block" : "d-hidden"
        }`}
      >
        Authenticated Successfully
      </div>
      <div
        className={`errorMessage ${
          loggedIn === false ? "d-block" : "d-hidden"
        }`}
      >
        Authentication failed
      </div>
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
          <button type="button" name="login" onClick={handleSubmit}>
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

const ErrorComponent = () => {
  return (
    <div className="ErrorComponent">
      <h1>We are working really hard!</h1>
      <p>
        Apologies for the 404. Reach out to our team at middle-of-nowhere.com
      </p>{" "}
      <p>
        Go to <a href="http://localhost:3000">Home Page</a>
      </p>
    </div>
  );
};
