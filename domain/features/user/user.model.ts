import { ObservableStore } from '@app-services/observable-store';
import { IUserData } from './user.interfaces';
import { Subscription, Observable } from 'rxjs';


export class UserModel {
  private store: ObservableStore<IUserData>;

  get state$(): Observable<IUserData> {
    return this.store.state$;
  }

  get state(): IUserData {
    return this.store.state;
  }

  constructor() {
    this.store = new ObservableStore();
  }

  setData(userData: IUserData) {
    this.store.patchState(userData);
  }

  updateData(data: Partial<IUserData>) {
    this.store.patchState(data);
  }

  updateFirstname(name: string) {
    this.store.patchState({ firstname: name });
  }

  test(): string {
    return 'Hope this works!';
  }
}
