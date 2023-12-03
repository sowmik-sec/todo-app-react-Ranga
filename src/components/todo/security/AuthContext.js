import { createContext, useContext, useState } from "react";

//1: create a context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//2: share the created with other components
const AuthProvider = ({ children }) => {
  //3: put some state in the context
  const [number, setNumber] = useState(506);
  setInterval(() => setNumber(number + 1), 3000);
  return (
    <AuthContext.Provider value={{ number }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
