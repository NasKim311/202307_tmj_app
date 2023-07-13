import React from 'react';
import { Route, Navigate  } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {

  let search = window.location.search;

  if (!localStorage.getItem("token")) {
    const path = {pathname : "/login" , search : search};
    return <Navigate to={path} />;
  }
  return children;
  
}; 