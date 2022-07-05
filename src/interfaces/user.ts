import { Url } from 'url';

export interface User {
  email: string;
  familyName: string;
  givenName: string;
  googleId: number;
  imageUrl: Url;
  name: string;
}
