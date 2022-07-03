import React from 'react';
import { useAuth } from '../context/UserContext';

import AuthRoutes from './AuthRoutes';
import DashboardRoutes from './DashboardRoutes';

const Routes: React.FC = () => {
  const { signed } = useAuth();

  return signed ? <DashboardRoutes /> : <AuthRoutes />;
};

export default Routes;
