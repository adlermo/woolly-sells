import React, { useEffect } from 'react';

import Button from '@mui/material/Button';

import { useGoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

const clientId = `537172157090-ptad5abghsvohc1303953uu9ng47p7h2.apps.googleusercontent.com`;

function SignInButton() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const onSuccess = (res: any) => {
    console.info('Login Success: currentUser:', res.profileObj);
    console.info(`Welcome ${res.profileObj.name} 😍.`);

    
  };

  const onFailure = (res: any) => {
    console.error('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
  });

  return (
    <Button onClick={signIn} variant="contained" color="success">
      Sign In
    </Button>
  );
}

export default SignInButton;
