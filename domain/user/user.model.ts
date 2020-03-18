import { ObservableStore } from '../../app-services/store';
import { IUser } from './user.interfaces';
import { Subscription, Observable } from 'rxjs';


export class UserModel {
  private store: ObservableStore<IUser>;

  get state$(): Observable<IUser> {
    return this.store.state$;
  }

  get state(): IUser {
    return this.store.state;
  }

  constructor(userData: IUser = null) {
    this.store = new ObservableStore(userData);
  }

  setData(userData: IUser) {
    this.store.patchState(userData);
  }

  updateData(data: Partial<IUser>) {
    this.store.patchState(data);
  }

  updateFirstname(name: string) {
    this.store.patchState({ firstname: name });
  }

  test(): string {
    return 'Hope this works!';
  }
}
