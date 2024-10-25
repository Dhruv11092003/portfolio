import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("jwt_token");

  // If there's no token, redirect to the AdminConsole page
  if (!token) {
    return <Navigate to="/AdminConsole" />;
  }

  // If there's a valid token, render the protected component
  return children;
};

export default ProtectedRoute;
