import { IUserSignInData, IUserSignInResponse } from './user-api.interfaces';
import { DI } from '../../../app-services/di';
import { AjaxRequestService } from '../../../app-services/api';
import { IUser } from '../../user';

@DI.Singleton('UserApiService')
export class UserApiService {

  @DI.Inject(AjaxRequestService)
  ajaxRequestSrv: AjaxRequestService;


  signin(data: IUserSignInData): Promise<IUserSignInResponse> {
    if (data.email === 'clark.kent@email.com' && data.password === 'password') {
      return this.fetchUser('123')
      .then((user: IUser) => {
        const responseData: IUserSignInResponse = {
          success: true,
          data: user
        };
        return Promise.resolve(responseData);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
    }
    return Promise.resolve({
      success: false,
      error: 'Incorrect username or password, please try again.'
    });
  }


  fetchUser(id: string): Promise<any> {
    return this.ajaxRequestSrv.get('assets/dummy-data/user-data.json', {});
  }
}
