import React from 'react';
import { startTransition, useTransition } from 'react';
import { Route, Navigate  } from 'react-router-dom';

export const PublicRoute = ({ children }) => {

  if (localStorage.getItem("token")) {
  
    return <Navigate to="/" />;
    
  }
  return children;
}; 