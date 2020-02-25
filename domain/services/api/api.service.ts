import { DI } from '../dependency-injection.service';
import { UserApiService } from './user';

@DI.Singleton('ApiService')
export class ApiService {

  @DI.Inject(UserApiService)
  user: UserApiService;


}

