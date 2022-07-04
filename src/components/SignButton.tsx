import React from 'react';

import { useAuth } from '../context/UserContext';

import Button from '@mui/material/Button';

const SignButton: React.FC<any> = (props) => {
  const { signed, Login } = useAuth();

  const handleSignIn = () => {
    console.info(`${props.text} clicked`);
    Login();

    console.info(signed);
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
