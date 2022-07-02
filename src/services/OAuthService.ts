export default class OAuthService {
  private user: any;
  private refreshTiming: number;

  constructor() {
    this.user = null;
    this.refreshTiming = 3600 - 5 * 60;
  }

  public setUSer = (user: any) => {
    this.user = user;
  };

  public getUser = () => this.user;

  private refreshToken = async (res: any) => {
    const newAuthRes = await res.reloadAuthResponse();
    this.refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    console.log('newAuthRes:', newAuthRes);
    // saveUserToken(newAuthRes.access_token);  <-- save new token
    sessionStorage.setItem('authToken', newAuthRes.id_token);

    // Setup the other timer after the first one
    setTimeout(this.refreshToken, this.refreshTiming);
  };

  public refreshTokenSetup = (res: any) => {
    // Timing to renew access token
    this.refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

    // Setup first refresh timer
    setTimeout(this.refreshToken, this.refreshTiming);
  };
}
