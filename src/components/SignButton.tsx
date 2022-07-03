import React from 'react';

import { useAuth } from '../context/UserContext';

import Button from '@mui/material/Button';

const SignButton: React.FC = () => {
  const { signed, Login } = useAuth();

  const handleSignIn = () => {
    console.info('SignButton Clicado');
    Login();

    console.info(signed);
  };

  return (
    <Button onClick={handleSignIn} variant="outlined">
      Sign Up
    </Button>
  );
};

export default SignButton;
