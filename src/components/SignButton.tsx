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
  };

  useEffect(() => {
    console.log(props.text);
    console.log(user);
    if (props.text === 'Sign Up' && user) createUser(user);
  });

  const createUser = (user: User | null) => {
    const postUser = async (user: User | null) => {
      const response = await service.post('users', user);
      console.info('Create user response');
      console.info(response);
    };

    if (user) postUser(user).catch((err) => console.error(err));
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
