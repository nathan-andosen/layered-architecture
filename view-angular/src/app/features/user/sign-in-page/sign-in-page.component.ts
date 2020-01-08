import { Component } from '@angular/core';
import {
  AjaxRequestService
} from '@app-services/api/ajax-request.service';
import { UserModel } from '@domain/features/user';


@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent {
  user: UserModel;


  constructor() {
    const ajaxSrv = new AjaxRequestService();
    ajaxSrv.get('assets/dummy-data/user-data.json', {})
    .then((res) => {
      console.log('SignInPageComponent success', res);
      this.user = new UserModel();
      this.user.setData((res as any));
      setTimeout(() => {
        this.user.updateData({ firstname: 'Nathan' });
      }, 2000);
    })
    .catch((err) => {
      console.log('SignInPageComponent error', err);
    });
  }

}
