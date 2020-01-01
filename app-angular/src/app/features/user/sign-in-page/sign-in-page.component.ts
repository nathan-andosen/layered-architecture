import { Component } from '@angular/core';
import {
  AjaxRequestService
} from '@app-services/api/ajax-request.service';


@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent {



  constructor() {
    const ajaxSrv = new AjaxRequestService();
    ajaxSrv.get('assets/dummy-data/user-data.json', {})
    .then((res) => {
      console.log('SignInPageComponent success', res);
    })
    .catch((err) => {
      console.log('SignInPageComponent error', err);
    });
  }

}
