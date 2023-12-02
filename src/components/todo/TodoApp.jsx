import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  Link,
  NavLink,
} from "react-router-dom";
import "./TodoApp.css";

export const TodoApp = () => {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome/:username" element={<WelcomeComponent />} />
          <Route path="/todos" element={<ListToDosComponent />} />
          <Route path="/logout" element={<LogoutComponent />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
        <FooterComponent />
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
      navigate(`/welcome/${username}`);
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
  const { username } = useParams();
  console.log(username);
  return (
    <div className="WelcomeComponent">
      <h1>Welcome {username}</h1>
      <p>
        Manage your <Link to="/todos">Todos</Link>
      </p>
    </div>
  );
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

const ListToDosComponent = () => {
  const today = new Date();
  const targetDate = new Date(
    today.getFullYear() + 1,
    today.getMonth(),
    today.getDay()
  );
  const toDos = [
    { id: 1, description: "Learn AWS", done: false, targetDate: targetDate },
    {
      id: 2,
      description: "Learn Full stack development",
      done: false,
      targetDate: targetDate,
    },
    { id: 3, description: "Learn DevOps", done: false, targetDate: targetDate },
  ];
  return (
    <div className="container">
      <h1>Things You want To Do!</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>Description</td>
              <td>Completed</td>
              <td>Target Date</td>
            </tr>
          </thead>
          <tbody>
            {toDos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toDateString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <a
              className="navbar-brand ms-2 fs-2 fw-bold text-black"
              href="https://www.google.com"
            >
              Google
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item fs-5">
                  <Link className="nav-link" to="/welcome/sowmik">
                    Home
                  </Link>
                </li>
                <li className="nav-item fs-5">
                  <Link className="nav-link" to="/todos">
                    Todos
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item fs-5">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item fs-5">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const FooterComponent = () => {
  return (
    <footer className="FooterComponent">
      <div className="container">Your Footer</div>
    </footer>
  );
};

const LogoutComponent = () => {
  return (
    <div className="LogoutComponent">
      <h1>You are logged out!</h1>
      <div>Thank you for using our App</div>
    </div>
  );
};
