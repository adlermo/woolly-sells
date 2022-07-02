import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';

import { gapi } from 'gapi-script';

import { refreshTokenSetup } from '../services/OAuthService';

const clientId = `537172157090-ptad5abghsvohc1303953uu9ng47p7h2.apps.googleusercontent.com`;

function LoginGoogle() {
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
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res: any) => {
    console.log('Login failed: res:', res);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
}

export default LoginGoogle;
