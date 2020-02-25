import { DI } from '../../dependency-injection.service';
import { BaseRequest, RequestFactory } from '../request';

@DI.Singleton('UserApiService')
export class UserApiService {

  @DI.InjectViaFactory(new RequestFactory())
  requestSrv: BaseRequest;

  signin(username: string, password: string) {

    return this.requestSrv.post('/user/signin', { username, password });

  }

}
