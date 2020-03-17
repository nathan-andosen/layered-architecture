import { auth } from 'firebase';
import { isEmail, isSet } from '../../app-services/utilities';


export interface ISignIn {
  valid: boolean;
  emailValid: boolean;
  passwordValid: boolean;
  failMessage?: string;
  user?: any;
}


export class UserService {


  validateSignIn(email: string, password: string): ISignIn {
    const emailValid = isEmail(email);
    const passwordValid = (isSet(password) && password.length > 0);
    return {
      valid: (emailValid && passwordValid),
      emailValid,
      passwordValid
    };
  }


  signIn(email: string, password: string) {
    // todo: sign in should return a user object if successful
  }
}
