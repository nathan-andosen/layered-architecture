import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SignInPageComponent } from './sign-in-page';
import { SettingsPageComponent } from './settings-page';


@NgModule({
  declarations: [
    SignInPageComponent,
    SettingsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/user/signin'
      },
      {
        path: 'signin',
        component: SignInPageComponent
      },
      {
        path: 'settings',
        component: SettingsPageComponent
      }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule {}
