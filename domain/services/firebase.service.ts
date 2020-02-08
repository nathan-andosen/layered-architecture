import { FIREBASE_CONFIG } from '../configs';
import { initializeApp, firestore } from 'firebase';
import { DI } from './dependency-injection.service';

@DI.Singleton('FirebaseService')
export class FirebaseService {
  private db: firestore.Firestore;

  /**
   * Initialise the app
   *
   * @memberof AppService
   */
  initializeApp() {
    // init the firebase app
    initializeApp(FIREBASE_CONFIG);

    // setup the firestore database
    this.db = firestore();
  }


  getDb(): firestore.Firestore {
    return this.db;
  }
}
