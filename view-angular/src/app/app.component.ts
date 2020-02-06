import { Component } from '@angular/core';
import { UserModel } from '@domain/features/user';
import { AppService } from '@domain/services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-angular';
  msg = 'Test';

  constructor(private appSrv: AppService) {
    this.appSrv.initializeApp();
    const user = new UserModel();
    this.msg = user.test();
  }
}
