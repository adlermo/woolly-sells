import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Authenticate from '../pages/Authenticate';

const AuthRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" element={<Authenticate />} />
    </BrowserRouter>
  );
};

export default AuthRoutes;
