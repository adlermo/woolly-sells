import React from 'react';

import { UserProvider } from './context/UserContext';

import Routes from './routes/index';

function App() {
  return (
    <UserProvider>
      <Routes></Routes>
    </UserProvider>
  );
}

export default App;
