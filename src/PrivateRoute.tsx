import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthenticationService from './services/authentication-service';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = AuthenticationService.isAuthenticated;

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
