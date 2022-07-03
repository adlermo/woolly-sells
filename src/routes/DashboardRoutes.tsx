import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';

const DashboardRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/dashboard" element={<Home />} />
    </BrowserRouter>
  );
};

export default DashboardRoutes;
