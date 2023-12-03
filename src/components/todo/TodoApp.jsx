import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./TodoApp.css";
import { LogoutComponent } from "./LogoutComponent";
import { HeaderComponent } from "./HeaderComponent";
import { ListToDosComponent } from "./ListToDosComponent";
import { ErrorComponent } from "./ErrorComponent";
import { WelcomeComponent } from "./WelcomeComponent";
import { LoginComponent } from "./LoginComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";

const AuthenticatedRoute = ({ children }) => {
  const authContext = useAuth();
  if (authContext.isAuthenticated) {
    return children;
  }
  return <Navigate to="/" />;
};

export const TodoApp = () => {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponent />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  <ListToDosComponent />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  <LogoutComponent />
                </AuthenticatedRoute>
              }
            />
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};
