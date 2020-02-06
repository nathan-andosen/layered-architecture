import { FIREBASE_CONFIG } from '../configs';
import { initializeApp, firestore } from 'firebase';

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
    this.db.settings({ timestampsInSnapshots: true });
  }


  getDb(): firestore.Firestore {
    return this.db;
  }
}
