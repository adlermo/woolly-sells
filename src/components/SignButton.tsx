import React, { useEffect } from 'react';

import { useAuth } from '../context/UserContext';

import Button from '@mui/material/Button';

import service from '../services/service';

import { User } from '../interfaces/user';

const SignButton: React.FC<any> = (props) => {
  const { Login, user } = useAuth();

  const handleSignIn = async () => {
    console.info(`${props.text} clicked`);

    await Login();

    // Triggering user creation
    if (props.text === 'Sign Up' && user) await createUser(user);
  };

  const createUser = async (user: User | null) => {
    const response = await service.post('users', user);
    console.info('Create user response');
    console.info(response);
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
