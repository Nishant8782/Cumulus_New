import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateAdminRoute = ({ children }) => {
  const role = localStorage.getItem("role") || "";
  const token = localStorage.getItem("token");
  console.log("roleeeee", role)
  console.log("tokenn", token)
  const isAuthenticated = role === "Admin" ? true : false;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;

};

export default PrivateAdminRoute;