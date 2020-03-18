import { DI } from '../../app-services/di';
import { UserApiService } from './user';

@DI.Singleton('ApiService')
export class ApiService {

  @DI.Inject(UserApiService)
  user: UserApiService;
}
