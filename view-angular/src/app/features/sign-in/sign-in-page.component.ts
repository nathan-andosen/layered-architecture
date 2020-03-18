import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  AjaxRequestService
} from '@app-services/api/ajax-request.service';
import { UserModel } from '@domain/user';
import { UserService } from '@domain/user';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


// tslint:disable-next-line: max-line-length
const EMAIL_REG_EX = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent {
  signinFormGroup: FormGroup;
  user: UserModel;
  invalidAlertTxt: string;

  inpEmail: string;
  inpPassword: string;



  constructor(private router: Router,
  private formBuilder: FormBuilder,
  private userSrv: UserService) {
    this.buildSigninForm();
  }


  buildSigninForm() {
    const email = '';
    this.signinFormGroup = this.formBuilder.group({
      email: [email, [Validators.required, Validators.pattern(EMAIL_REG_EX)]],
      password: ['', Validators.required]
    });
  }


  formSignin() {
    if (this.validateForm()) {
      const email = this.signinFormGroup.controls.email.value;
      const password = this.signinFormGroup.controls.password.value;
      this.userSrv.signIn(email, password)
      .then((response) => {
        if (response.valid) {
          this.router.navigate(['calorie-intake']);
        } else {
          this.invalidAlertTxt = response.error;
        }
      })
      .catch((err: Error) => {
        this.invalidAlertTxt = 'Something went wrong: ' + err.message;
      });
    }
  }

  private validateForm() {
    this.invalidAlertTxt = '';
    if (this.signinFormGroup.controls.email.errors) {
      this.invalidAlertTxt = 'Invalid email!';
      return false;
    } else if (this.signinFormGroup.controls.password.errors) {
      this.invalidAlertTxt = 'Invalid password!';
      return false;
    }
    return true;
  }
}
