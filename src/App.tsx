import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Authenticate from './components/Authenticate';

import OAuthService from './services/OAuthService';

function App() {
  const service = new OAuthService();

  const user = useState(service.getUser());

  return (
    <>
      <Routes>
        <Route index element={<Authenticate />} />
        <Route path="login" element={<Authenticate />} />
      </Routes>
    </>
  );
}

export default App;
