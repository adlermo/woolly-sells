import React from 'react';

import './App.css';

import LoginGoogle from './components/LoginGoogle';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <h2>{process.env.NODE_ENV}</h2>
      <h2>{process.env.CLIENT_ID}</h2>
      <LoginGoogle></LoginGoogle>
    </>
  );
}

export default App;
