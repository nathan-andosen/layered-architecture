import { IUser } from '../../user';
import { IApiResponse } from '../api.interfaces';

export interface IUserSignInData {
  email: string;
  password: string;
}

export interface IUserSignInResponse extends IApiResponse {
  data?: IUser;
}
