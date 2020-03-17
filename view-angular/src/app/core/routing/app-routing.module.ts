import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'user', pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: '../../features/sign-in/sign-in.module#SignInModule',
    data: {
      name: 'sign-in'
    }
  },
  {
    path: 'calorie-intake',
    loadChildren:
      '../../features/calorie-intake/calorie-intake.module#CalorieIntakeModule',
    data: {
      name: 'calorie-intake'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
