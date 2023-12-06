import axios from "axios";

// export const retrieveHelloWorldBean = () =>
//   axios.get(`http://localhost:8080/hello-world-bean`);

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export const retrieveAllToDosForUsernameApi = (username) =>
  apiClient.get(`/users/${username}/todos`);

export const deleteTodoApi = (username, id) =>
  apiClient.delete(`/users/${username}/todos/${id}`);

export const retrieveTodoApi = (username, id) =>
  apiClient.get(`/users/${username}/todos/${id}`);

export const updateTodoApi = (username, id) =>
  apiClient.put(`/users/${username}/todos/${id}`);
