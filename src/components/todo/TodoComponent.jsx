import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { retrieveTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";

export const TodoComponent = () => {
  const { id } = useParams();
  const { username } = useAuth();
  const [description, setDescription] = useState("");
  const retrieveTodo = () => {
    retrieveTodoApi(username, id)
      .then((res) => setDescription(res.data.description))
      .catch((error) => console.log(error));
  };

  useEffect(() => retrieveTodo, [id]);

  return (
    <div className="container">
      <h1>Enter Todo Details</h1>
      <div>description: {description}</div>
    </div>
  );
};
