import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { retrieveHelloWorldPathVariable } from "./api/HelloWroldApiSrvice";
export const WelcomeComponent = () => {
  const { username } = useParams();
  const [message, setMessage] = useState(null);
  const callHelloWorldRestApi = () => {
    retrieveHelloWorldPathVariable(username)
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("cleanup"));
  };
  const successfulResponse = (response) => {
    console.log(response.data);
    // setMessage(response.data);
    setMessage(response.data.message);
  };
  const errorResponse = (error) => {
    console.log(error);
  };
  return (
    <div className="WelcomeComponent">
      <h1>Welcome {username}</h1>
      <p>
        Manage your <Link to="/todos">Todos</Link>
      </p>
      <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
        Call Hello World
      </button>
      <div className="text-info">{message}</div>
    </div>
  );
};
