import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'user', pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: '../../features/user/user.module#UserModule',
    data: {
      name: 'user'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
