import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  component: React.ComponentType;
  path?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: RouteComponent,
}) => {
  const userData = localStorage.getItem('userData');
  const parsedData = userData ? JSON.parse(userData) : '';

  if (parsedData) return <RouteComponent />;

  return <Navigate to="/signin" />;
};

export default PrivateRoute;
