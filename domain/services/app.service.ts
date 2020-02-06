import { DI } from './dependency-injection.service';
import { FirebaseService } from './firebase.service';


export class AppService {
  @DI.Inject(FirebaseService, 'FirebaseService')
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
