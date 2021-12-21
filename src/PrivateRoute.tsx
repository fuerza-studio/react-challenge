import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  component: React.ComponentType;
  path?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: RouteComponent,
}) => {
  const token = localStorage.getItem('token');

  if (token) return <RouteComponent />;

  return <Navigate to="/signin" />;
};

export default PrivateRoute;
