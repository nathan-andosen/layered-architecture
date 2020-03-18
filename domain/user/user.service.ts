import { isEmail, isSet } from '../../app-services/utilities';
import { DI } from '../../app-services/di';
import { ApiService } from '../api';
import { UserModel } from './user.model';

export interface ISigninResponse {
  valid: boolean;
  emailValid?: boolean;
  passwordValid?: boolean;
  error?: string;
  user?: UserModel;
}


const USER_ID_KEY = 'signin-user-id';


@DI.Singleton('UserService')
export class UserService {

  @DI.Inject(ApiService)
  apiSrv: ApiService;

  private _signedInUser: UserModel;
  set signedInUser(user: UserModel) {
    if (!user) {
      localStorage.removeItem(USER_ID_KEY);
      this._signedInUser = null;
      return;
    }
    localStorage.setItem(USER_ID_KEY, user.state.id);
    this._signedInUser = user;
  }
  get signedInUser(): UserModel {
    return this._signedInUser;
  }

  private validateSignIn(email: string, password: string): ISigninResponse {
    const emailValid = isEmail(email);
    const passwordValid = (isSet(password) && password.length > 0);
    return {
      valid: (emailValid && passwordValid),
      emailValid,
      passwordValid
    };
  }


  signIn(email: string, password: string): Promise<ISigninResponse> {
    // todo: sign in should return a user object if successful
    const validationResults = this.validateSignIn(email, password);
    if (validationResults.valid) {
      return this.apiSrv.user.signin({ email, password })
      .then((response) => {
        if (response.success) {
          const user = new UserModel(response.data);
          this.signedInUser = user;
          return Promise.resolve({
            valid: true,
            user
          } as ISigninResponse);
        } else {
          return Promise.resolve({
            valid: false,
            error: response.error
          } as ISigninResponse);
        }
      })
      .catch((err) => {
        return Promise.reject(err);
      });
    }
    return Promise.resolve(validationResults);
  }


  fetchSignedInUser(): Promise<UserModel> {
    const userId = localStorage.getItem(USER_ID_KEY);
    if (!userId) return Promise.resolve(null);
    return this.apiSrv.user.fetchUser(userId)
    .then((userData) => {
      const user = new UserModel(userData);
      this.signedInUser = user;
      return Promise.resolve(user);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
  }



}
