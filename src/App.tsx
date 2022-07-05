import React from 'react';

import { UserProvider, useAuth } from './context/UserContext';

import { Routes, Navigate, Route } from 'react-router-dom';

import Authenticate from './pages/Authenticate';
import Home from './pages/Home';

import Header from './components/Header';

function App() {
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    // isAuthenticated: signed,
    authenticationPath: '/login',
  };

  return (
    <>
      <UserProvider>
        <Header></Header>
        <Routes>
          <Route path="login" element={<Authenticate />} />

          <Route
            path="products/*"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<Home />}
              />
            }
          />
          <Route path="*" element={<Navigate to={'products'} />} />
        </Routes>
      </UserProvider>
    </>
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
