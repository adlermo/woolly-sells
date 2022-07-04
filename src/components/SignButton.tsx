import React from 'react';

import { useAuth } from '../context/UserContext';

import Button from '@mui/material/Button';

const SignButton: React.FC<any> = (props) => {
  const { Login } = useAuth();

  const handleSignIn = async () => {
    console.info(`${props.text} clicked`);
    await Login();
  };

  return (
    <Button
      onClick={handleSignIn}
      variant={props.text === 'Sign Up' ? 'contained' : 'outlined'}
    >
      {props.text}
    </Button>
  );
};

export default SignButton;
