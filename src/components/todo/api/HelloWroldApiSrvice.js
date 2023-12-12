import axios from "axios";

// export const retrieveHelloWorldBean = () =>
//   axios.get(`http://localhost:8080/hello-world-bean`);

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export const retrieveHelloWorldPathVariable = (username) =>
  apiClient.get(`/hello-world/path-variable/${username}`, {
    headers: {
      Authorization: "Basic c293bWlrOmR1bW15",
    },
  });

export const executeBasicAuthenticationService = (token) =>
  apiClient.get(`/basicauth`, {
    headers: {
      Authorization: token,
    },
  });
