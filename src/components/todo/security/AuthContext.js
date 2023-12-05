import { createContext, useContext, useState } from "react";

//1: create a context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//2: share the created with other components
const AuthProvider = ({ children }) => {
  //3: put some state in the context
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);

  const login = (username, password) => {
    if (username === "sowmik" && password === "dummy") {
      setAuthenticated(true);
      setUsername(username);
      return true;
    } else {
      setAuthenticated(false);
      setUsername(null);
      return false;
    }
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
