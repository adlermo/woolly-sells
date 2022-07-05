import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useGoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

import { useNavigate } from 'react-router-dom';
import { User } from '../interfaces/user';

const clientId = `537172157090-ptad5abghsvohc1303953uu9ng47p7h2.apps.googleusercontent.com`;

interface LoggedUser {
  signed: boolean;
  user: User | null;
  Login(): Promise<void>;
  Logout(): void;
}

const UserContext = createContext({} as LoggedUser);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

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
    const { profileObj } = res;

    console.info('Login Success: currentUser:', profileObj);
    setUser(profileObj);

    // Navigating to home after authentication
    navigate('/products', { replace: true });
  };

  const onFailure = (res: any) => {
    console.error('Login failed: res:', res);
    setUser(null);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: false,
  });

  async function Login() {
    signIn();
    return Promise.resolve();
  }

  function Logout() {
    setUser(null);
  }

  return (
    <UserContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(UserContext);

  return context;
}

// const refreshToken = async (res: any, refreshTiming: number) => {
//   const newAuthRes = await res.reloadAuthResponse();
//   refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
//   console.log('newAuthRes:', newAuthRes);
//   // saveUserToken(newAuthRes.access_token);  <-- save new token
//   sessionStorage.setItem('authToken', newAuthRes.id_token);

//   // Setup the other timer after the first one
//   setTimeout(refreshToken, refreshTiming);
// };

// const refreshTokenSetup = (res: any) => {
//   // Timing to renew access token
//   let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

//   // Setup first refresh timer
//   setTimeout(refreshToken, refreshTiming);
// };

// export { refreshTokenSetup };
