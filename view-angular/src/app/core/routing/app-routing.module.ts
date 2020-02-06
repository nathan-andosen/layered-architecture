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
  {
    path: 'chat',
    loadChildren: '../../features/chat/chat.module#ChatModule',
    data: {
      name: 'chat'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
