import { DI } from './dependency-injection.service';
import { FirebaseService } from './firebase.service';

@DI.Singleton('AppService')
export class AppService {
  @DI.Inject(FirebaseService)
  firebaseSrv: FirebaseService;


  /**
   * Initialise the app
   *
   * @memberof AppService
   */
  initializeApp() {
    this.firebaseSrv.initializeApp();
  }
}
