import React, { useContext } from 'react';

import { Route, Routes } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<p color="white">Hey!</p>} />

      <Route></Route>
    </Routes>
  );
};

export default Home;
