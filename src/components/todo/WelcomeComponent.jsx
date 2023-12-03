import { Link, useParams } from "react-router-dom";
export const WelcomeComponent = () => {
  const { username } = useParams();
  return (
    <div className="WelcomeComponent">
      <h1>Welcome {username}</h1>
      <p>
        Manage your <Link to="/todos">Todos</Link>
      </p>
    </div>
  );
};
