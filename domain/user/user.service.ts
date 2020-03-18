import { isEmail, isSet } from '../../app-services/utilities';
import { DI } from '../../app-services/di';
import { ApiService } from '../api';
import { UserModel } from './user.model';
import { AuthService } from '../auth';

export interface ISigninResponse {
  valid: boolean;
  emailValid?: boolean;
  passwordValid?: boolean;
  error?: string;
  user?: UserModel;
}

@DI.Singleton('UserService')
export class UserService {

  @DI.Inject(ApiService)
  apiSrv: ApiService;

  @DI.Inject(AuthService)
  authSrv: AuthService;

  validateSignIn(email: string, password: string): ISigninResponse {
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
          this.authSrv.signedInUser = user;
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
}
