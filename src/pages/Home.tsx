import React from 'react';

import { Route, Routes } from 'react-router-dom';

import ProductsList from '../components/ProductsList';
import Product from './Product';

const Home: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<ProductsList />} />
      <Route path="create" element={<Product />} />
    </Routes>
  );
};

export default Home;
