import { DI } from '../../app-services/di';
import { UserService } from '../user';

@DI.Singleton('AppService')
export class AppService {

  @DI.Inject(UserService)
  private userSrv: UserService;

  /**
   * Initialise the app
   *
   * @memberof AppService
   */
  initializeApp(): Promise<any> {
    return this.userSrv.fetchSignedInUser();
  }



}
