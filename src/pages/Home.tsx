import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Create from './Create';

import ProductsList from '../components/ProductsList';

const Home: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<ProductsList />} />
      <Route path="create" element={<Create />} />
    </Routes>
  );
};

export default Home;
