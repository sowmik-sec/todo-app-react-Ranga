import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteTodoApi,
  retrieveAllToDosForUsernameApi,
  updateTodoApi,
} from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";

export const ListToDosComponent = () => {
  // const today = new Date();
  // const targetDate = new Date(
  //   today.getFullYear() + 1,
  //   today.getMonth(),
  //   today.getDay()
  // );

  const [toDos, setToDos] = useState([]);
  const [message, setMessage] = useState(null);
  const { username } = useAuth();
  const navigate = useNavigate();

  useEffect(() => refreshToDos(), []);

  const refreshToDos = () => {
    retrieveAllToDosForUsernameApi(username)
      .then((response) => {
        // console.log(response.data);
        setToDos(response.data);
      })
      .catch((error) => console.log(error))
      .finally(console.log("cleanup"));
  };

  const handleDeleteTodo = (username, id) => {
    deleteTodoApi(username, id)
      .then(() => {
        //1: Display message
        setMessage(`Delete of todo with id: ${id} is successful`);
        //2: Update Todos list
        refreshToDos();
      })
      .catch((error) => console.log(error))
      .finally(console.log("cleanup"));
  };

  const handleUpdateTodo = (id) => {
    navigate(`/todo/${id}`);
  };

  const handleAddNewTodo = () => {
    navigate(`/todo/-1`);
  };

  // const toDos = [
  //   { id: 1, description: "Learn AWS", done: false, targetDate: targetDate },
  //   {
  //     id: 2,
  //     description: "Learn Full stack development",
  //     done: false,
  //     targetDate: targetDate,
  //   },
  //   { id: 3, description: "Learn DevOps", done: false, targetDate: targetDate },
  // ];
  return (
    <div className="container">
      <h1>Things You want To Do!</h1>
      <h5 className="text-danger">{message}</h5>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Completed</th>
              <th>Target Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {toDos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => handleUpdateTodo(todo.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleDeleteTodo(todo.username, todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="btn btn-success m-5" onClick={handleAddNewTodo}>
        Add New Todo
      </div>
    </div>
  );
};
