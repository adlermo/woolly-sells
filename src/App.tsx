import React from 'react';

import { UserProvider, useAuth } from './context/UserContext';

import { Routes, Navigate, Route } from 'react-router-dom';

import Authenticate from './pages/Authenticate';
import Home from './pages/Home';

function App() {
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    // isAuthenticated: signed,
    authenticationPath: '/login',
  };

  return (
    <div>
      <UserProvider>
        <Routes>
          <Route path="login" element={<Authenticate />} />

          <Route
            path="/"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<Home />}
              />
            }
          />
        </Routes>
      </UserProvider>
    </div>
  );
}

type ProtectedRouteProps = {
  // isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

function ProtectedRoute({
  // isAuthenticated,
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  const { signed } = useAuth();

  if (signed) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} replace />;
  }
}

export default App;
