import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(null);

  const navigate = useNavigate();

  const authContext = useAuth();

  const handleSubmit = () => {
    if (authContext.login(username, password)) {
      setLoggedIn(true);
      navigate(`/welcome/${username}`);
    } else {
      setLoggedIn(false);
    }
  };
  return (
    <div className="Login">
      <h1>Login</h1>
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
