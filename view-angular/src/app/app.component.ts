import { Component } from '@angular/core';
import { UserModel } from '@domain/features/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-angular';
  msg = 'Test';

  constructor() {
    const user = new UserModel();
    this.msg = user.test();
  }
}
