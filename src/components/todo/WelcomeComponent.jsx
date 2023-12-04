import axios from "axios";
import { Link, useParams } from "react-router-dom";
export const WelcomeComponent = () => {
  const { username } = useParams();
  const callHelloWorldRestApi = () => {
    axios
      .get(`http://localhost:8080/hello-world`)
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("cleanup"));
  };
  const successfulResponse = (response) => {
    console.log(response);
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
    </div>
  );
};
