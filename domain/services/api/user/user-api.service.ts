import { DI } from '../../dependency-injection.service';
import { BaseRequest, RequestFactory } from '../request';
import { API_ENDPOINTS } from '../api.constants';

@DI.Singleton('UserApiService')
export class UserApiService {

  @DI.InjectViaFactory(new RequestFactory())
  requestSrv: BaseRequest;

  signin(username: string, password: string) {
    return this.requestSrv.post(API_ENDPOINTS.USER_SIGNIN,
      { username, password });
  }
}
